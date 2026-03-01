import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { demoReadOnlyError } from "@/lib/demo";

function canAccess(enrollment: { id: number } | null, isInstructor: boolean) {
	return isInstructor || !!enrollment;
}

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ courseId: string }> }
) {
	const { courseId: courseIdParam } = await params;
	try {
		const user = await requireUser();
		const readOnlyError = demoReadOnlyError(user);
		if (readOnlyError)
			return NextResponse.json(
				{ error: readOnlyError },
				{ status: 403 }
			);
		const courseId = Number(courseIdParam);
		if (!Number.isFinite(courseId))
			return NextResponse.json({ error: "Bad course" }, { status: 400 });

		const course = await prisma.course.findUnique({
			select: { instructorId: true },
			where: { id: courseId },
		});
		if (!course)
			return NextResponse.json({ error: "Not found" }, { status: 404 });
		const enrollment = await prisma.enrollment.findUnique({
			where: { courseId_studentId: { courseId, studentId: user.id } },
			select: { id: true },
		});
		if (
			!canAccess(enrollment, course.instructorId === user.id) &&
			user.role !== "ADMIN"
		)
			return NextResponse.json({ error: "Forbidden" }, { status: 403 });

		const threads = await prisma.discussionThread.findMany({
			where: { courseId },
			orderBy: { lastActivityAt: "desc" },
			select: {
				id: true,
				title: true,
				createdAt: true,
				lastActivityAt: true,
				author: { select: { name: true, email: true } },
				_count: { select: { posts: true } },
			},
		});
		return NextResponse.json({ threads });
	} catch (e: any) {
		return NextResponse.json(
			{ error: e?.message ?? "Unexpected error" },
			{ status: 500 }
		);
	}
}

export async function POST(
	req: NextRequest,
	{ params }: { params: Promise<{ courseId: string }> }
) {
	const { courseId: courseIdParam } = await params;
	try {
		const user = await requireUser();
		const courseId = Number(courseIdParam);
		if (!Number.isFinite(courseId))
			return NextResponse.json({ error: "Bad course" }, { status: 400 });
		const body = (await req.json()) as { title?: string; content?: string };
		const title = (body.title || "").trim();
		const content = (body.content || "").trim();
		if (title.length < 3 || content.length < 1)
			return NextResponse.json(
				{ error: "Title/content required" },
				{ status: 400 }
			);

		const course = await prisma.course.findUnique({
			select: { instructorId: true },
			where: { id: courseId },
		});
		if (!course)
			return NextResponse.json({ error: "Not found" }, { status: 404 });
		const enrollment = await prisma.enrollment.findUnique({
			where: { courseId_studentId: { courseId, studentId: user.id } },
			select: { id: true },
		});
		const allowed =
			canAccess(enrollment, course.instructorId === user.id) ||
			user.role === "ADMIN";
		if (!allowed)
			return NextResponse.json({ error: "Forbidden" }, { status: 403 });

		const thread = await prisma.discussionThread.create({
			data: { courseId, authorId: user.id, title },
			select: { id: true },
		});
		await prisma.discussionPost.create({
			data: { threadId: thread.id, authorId: user.id, content },
		});
		await prisma.discussionThread.update({
			where: { id: thread.id },
			data: { lastActivityAt: new Date() },
		});

		return NextResponse.json({ ok: true, threadId: thread.id });
	} catch (e: any) {
		return NextResponse.json(
			{ error: e?.message ?? "Unexpected error" },
			{ status: 500 }
		);
	}
}
