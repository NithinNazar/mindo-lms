import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { demoReadOnlyError } from "@/lib/demo";

export async function POST(
	_req: NextRequest,
	{ params }: { params: Promise<{ postId: string }> }
) {
	try {
		const { postId: postIdParam } = await params;
		const postId = Number(postIdParam);
		if (!Number.isFinite(postId))
			return NextResponse.json({ error: "Bad post" }, { status: 400 });

		const user = await requireUser();
		const readOnlyError = demoReadOnlyError(user);
		if (readOnlyError)
			return NextResponse.json(
				{ error: readOnlyError },
				{ status: 403 }
			);

		const post = await prisma.discussionPost.findUnique({
			where: { id: postId },
			select: {
				id: true,
				thread: {
					select: {
						courseId: true,
						course: { select: { instructorId: true } },
					},
				},
			},
		});
		if (!post)
			return NextResponse.json({ error: "Not found" }, { status: 404 });

		const enrollment = await prisma.enrollment.findUnique({
			where: {
				courseId_studentId: {
					courseId: post.thread.courseId,
					studentId: user.id,
				},
			},
			select: { id: true },
		});
		const allowed =
			enrollment ||
			post.thread.course.instructorId === user.id ||
			user.role === "ADMIN";
		if (!allowed)
			return NextResponse.json({ error: "Forbidden" }, { status: 403 });

		// Toggle upvote
		const existing = await prisma.discussionPostUpvote.findUnique({
			where: { postId_userId: { postId, userId: user.id } },
			select: { id: true },
		});
		if (existing) {
			await prisma.discussionPostUpvote.delete({
				where: { postId_userId: { postId, userId: user.id } },
			});
		} else {
			await prisma.discussionPostUpvote.create({
				data: { postId, userId: user.id },
			});
		}

		const count = await prisma.discussionPostUpvote.count({
			where: { postId },
		});
		return NextResponse.json({ ok: true, upvoted: !existing, count });
	} catch (e: any) {
		return NextResponse.json(
			{ error: e?.message ?? "Unexpected error" },
			{ status: 500 }
		);
	}
}
