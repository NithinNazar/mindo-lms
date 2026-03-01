"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { demoReadOnlyError } from "@/lib/demo";

const SectionSchema = z.object({
	courseId: z.coerce.number().int().positive(),
	title: z
		.string()
		.trim()
		.min(3, "Title must be at least 3 characters")
		.max(120),
});

const LessonSchema = z.object({
	courseId: z.coerce.number().int().positive(),
	sectionId: z.coerce.number().int().positive(),
	title: z
		.string()
		.trim()
		.min(3, "Title must be at least 3 characters")
		.max(140),
	type: z.enum(["video", "text"]).default("video"),
	videoUrl: z.string().url().optional(),
	duration: z.preprocess(
		(v) => (v === "" || v === null ? undefined : v),
		z.coerce.number().int().positive().optional()
	),
	isPreview: z.coerce.boolean().optional().default(false),
});

async function ensureOwnerOrAdmin(
	courseId: number,
	userId: string,
	role?: string
) {
	const course = await prisma.course.findUnique({
		where: { id: courseId },
		select: { instructorId: true },
	});
	if (!course) throw new Error("Course not found");
	const isAdmin = role === "ADMIN";
	if (!isAdmin && course.instructorId !== userId)
		throw new Error("Not authorized");
}

export type ActionState = { error?: string; success?: string };

export async function createSection(
	_: ActionState | undefined,
	formData: FormData
): Promise<ActionState> {
	const session = await auth();
	if (!session?.user?.id) return { error: "Please sign in" };

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) return { error: readOnlyError };

	const parsed = SectionSchema.safeParse(
		Object.fromEntries(formData.entries())
	);
	if (!parsed.success)
		return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
	const { courseId, title } = parsed.data;

	try {
		await ensureOwnerOrAdmin(courseId, session.user.id, session.user.role);
		const max = await prisma.section.aggregate({
			where: { courseId },
			_max: { order: true },
		});
		const nextOrder = (max._max.order ?? 0) + 1;
		await prisma.section.create({
			data: { courseId, title, order: nextOrder },
		});
		revalidatePath(`/instructor/courses/${courseId}/lessons`);
		return { success: "Section added" };
	} catch (e: unknown) {
		const msg = e instanceof Error ? e.message : "Failed to add section";
		return { error: msg };
	}
}

export async function deleteSection(
	_: ActionState | undefined,
	formData: FormData
): Promise<ActionState> {
	const session = await auth();
	if (!session?.user?.id) return { error: "Please sign in" };

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) return { error: readOnlyError };

	const sectionId = Number(formData.get("sectionId"));
	const courseId = Number(formData.get("courseId"));
	if (!sectionId || !courseId) return { error: "Invalid ids" };

	try {
		await ensureOwnerOrAdmin(courseId, session.user.id, session.user.role);
		await prisma.section.delete({ where: { id: sectionId } });
		revalidatePath(`/instructor/courses/${courseId}/lessons`);
		return { success: "Section deleted" };
	} catch (e: unknown) {
		const msg = e instanceof Error ? e.message : "Failed to delete section";
		return { error: msg };
	}
}

export async function createLesson(
	_: ActionState | undefined,
	formData: FormData
): Promise<ActionState> {
	const session = await auth();
	if (!session?.user?.id) return { error: "Please sign in" };

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) return { error: readOnlyError };

	const parsed = LessonSchema.safeParse(
		Object.fromEntries(formData.entries())
	);
	if (!parsed.success)
		return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
	const data = parsed.data;

	try {
		await ensureOwnerOrAdmin(
			data.courseId,
			session.user.id,
			session.user.role
		);
		await prisma.lesson.create({
			data: {
				title: data.title,
				type: data.type,
				videoUrl: data.videoUrl,
				duration: data.duration,
				isPreview: data.isPreview ?? false,
				sectionId: data.sectionId,
			},
		});
		revalidatePath(`/instructor/courses/${data.courseId}/lessons`);
		return { success: "Lesson added" };
	} catch (e: unknown) {
		const msg = e instanceof Error ? e.message : "Failed to add lesson";
		return { error: msg };
	}
}

export async function deleteLesson(
	_: ActionState | undefined,
	formData: FormData
): Promise<ActionState> {
	const session = await auth();
	if (!session?.user?.id) return { error: "Please sign in" };

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) return { error: readOnlyError };

	const lessonId = Number(formData.get("lessonId"));
	const courseId = Number(formData.get("courseId"));
	if (!lessonId || !courseId) return { error: "Invalid ids" };

	try {
		await ensureOwnerOrAdmin(courseId, session.user.id, session.user.role);
		await prisma.lesson.delete({ where: { id: lessonId } });
		revalidatePath(`/instructor/courses/${courseId}/lessons`);
		return { success: "Lesson deleted" };
	} catch (e: unknown) {
		const msg = e instanceof Error ? e.message : "Failed to delete lesson";
		return { error: msg };
	}
}
