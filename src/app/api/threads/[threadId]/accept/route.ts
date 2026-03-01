import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { demoReadOnlyError } from "@/lib/demo";

type Params = { threadId: string };

export async function POST(
	req: Request,
	{ params }: { params: Promise<Params> }
) {
	try {
		const user = await requireUser();
		const readOnlyError = demoReadOnlyError(user);
		if (readOnlyError)
			return NextResponse.json(
				{ error: readOnlyError },
				{ status: 403 }
			);
		const { threadId: threadIdParam } = await params;
		const threadId = Number(threadIdParam);
		if (!Number.isFinite(threadId))
			return NextResponse.json({ error: "Bad thread" }, { status: 400 });

		const body = (await req.json()) as { postId?: number | null };
		const postId = body.postId === null ? null : Number(body.postId);

		const thread = await prisma.discussionThread.findUnique({
			where: { id: threadId },
			select: { id: true, authorId: true },
		});
		if (!thread)
			return NextResponse.json({ error: "Not found" }, { status: 404 });
		if (!(thread.authorId === user.id || user.role === "ADMIN")) {
			return NextResponse.json({ error: "Forbidden" }, { status: 403 });
		}

		if (postId !== null && !Number.isFinite(postId)) {
			return NextResponse.json({ error: "Bad post" }, { status: 400 });
		}

		if (postId !== null) {
			// Validate post belongs to thread
			const post = await prisma.discussionPost.findUnique({
				where: { id: postId },
				select: { threadId: true },
			});
			if (!post || post.threadId !== threadId)
				return NextResponse.json(
					{ error: "Invalid post" },
					{ status: 400 }
				);
		}

		await prisma.discussionThread.update({
			where: { id: threadId },
			data: { acceptedPostId: postId },
		});
		return NextResponse.json({ ok: true, acceptedPostId: postId });
	} catch (e: any) {
		return NextResponse.json(
			{ error: e?.message ?? "Unexpected error" },
			{ status: 500 }
		);
	}
}
