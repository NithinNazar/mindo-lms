import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { demoReadOnlyError } from "@/lib/demo";

async function checkAccess(userId: string, threadId: number) {
	const t = await prisma.discussionThread.findUnique({
		where: { id: threadId },
		select: { courseId: true, course: { select: { instructorId: true } } },
	});
	if (!t) return { ok: false, status: 404 } as const;
	const enrollment = await prisma.enrollment.findUnique({
		where: {
			courseId_studentId: { courseId: t.courseId, studentId: userId },
		},
		select: { id: true },
	});
	const isInstructor = t.course.instructorId === userId;
	return { ok: isInstructor || !!enrollment, courseId: t.courseId } as const;
}

export async function GET(
	_req: NextRequest,
	{ params }: { params: Promise<{ threadId: string }> }
) {
	const { threadId: threadIdParam } = await params;
	try {
		const user = await requireUser();
		const readOnlyError = demoReadOnlyError(user);
		if (readOnlyError)
			return NextResponse.json(
				{ error: readOnlyError },
				{ status: 403 }
			);
		const threadId = Number(threadIdParam);
		if (!Number.isFinite(threadId))
			return NextResponse.json({ error: "Bad thread" }, { status: 400 });

		const access = await checkAccess(user.id, threadId);
		if (!access.ok && (user as any).role !== "ADMIN")
			return NextResponse.json({ error: "Forbidden" }, { status: 403 });

		const thread = await prisma.discussionThread.findUnique({
			where: { id: threadId },
			select: {
				id: true,
				title: true,
				createdAt: true,
				author: { select: { name: true, email: true } },
			},
		});
		if (!thread)
			return NextResponse.json({ error: "Not found" }, { status: 404 });

		const posts = await prisma.discussionPost.findMany({
			where: { threadId },
			orderBy: { createdAt: "asc" },
			select: {
				id: true,
				content: true,
				createdAt: true,
				author: { select: { name: true, email: true } },
			},
		});
		return NextResponse.json({ thread, posts });
	} catch (e: any) {
		return NextResponse.json(
			{ error: e?.message ?? "Unexpected error" },
			{ status: 500 }
		);
	}
}

export async function POST(
	req: Request,
	{ params }: { params: Promise<{ threadId: string }> }
) {
	const { threadId: threadIdParam } = await params;
	try {
		const user = await requireUser();
		const threadId = Number(threadIdParam);
		if (!Number.isFinite(threadId))
			return NextResponse.json({ error: "Bad thread" }, { status: 400 });
		const { content } = (await req.json()) as { content?: string };
		const text = (content || "").trim();
		if (text.length < 1)
			return NextResponse.json(
				{ error: "Content required" },
				{ status: 400 }
			);

		const access = await checkAccess(user.id, threadId);
		if (!access.ok && (user as any).role !== "ADMIN")
			return NextResponse.json({ error: "Forbidden" }, { status: 403 });

		await prisma.discussionPost.create({
			data: { threadId, authorId: user.id, content: text },
		});
		await prisma.discussionThread.update({
			where: { id: threadId },
			data: { lastActivityAt: new Date() },
		});
		return NextResponse.json({ ok: true });
	} catch (e: any) {
		return NextResponse.json(
			{ error: e?.message ?? "Unexpected error" },
			{ status: 500 }
		);
	}
}
