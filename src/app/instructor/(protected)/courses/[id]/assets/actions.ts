"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { demoReadOnlyError } from "@/lib/demo";

const ResourceSchema = z.object({
	courseId: z.coerce.number().int().positive(),
	title: z
		.string()
		.trim()
		.min(3, "Title must be at least 3 characters")
		.max(140),
	description: z
		.string()
		.trim()
		.max(2000, "Description too long")
		.optional()
		.or(z.literal("")),
	fileUrl: z.string().url("File URL is required"),
	fileName: z.string().trim().min(1, "Filename missing"),
	fileType: z.string().trim().optional().or(z.literal("")),
	fileSize: z.preprocess(
		(v) => (v === "" || v === null ? undefined : v),
		z.coerce.number().int().positive().optional()
	),
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

export async function createResource(
	_: ActionState | undefined,
	formData: FormData
): Promise<ActionState> {
	const session = await auth();
	if (!session?.user?.id) return { error: "Please sign in" };

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) return { error: readOnlyError };

	const parsed = ResourceSchema.safeParse(
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

		await prisma.resource.create({
			data: {
				courseId: data.courseId,
				title: data.title,
				description: data.description || null,
				fileUrl: data.fileUrl,
				fileName: data.fileName,
				fileType: data.fileType || null,
				fileSize: data.fileSize,
			},
		});

		revalidatePath(`/instructor/courses/${data.courseId}/assets`);
		return { success: "Resource added" };
	} catch (e: unknown) {
		const msg = e instanceof Error ? e.message : "Failed to add resource";
		return { error: msg };
	}
}

export async function deleteResource(
	_: ActionState | undefined,
	formData: FormData
): Promise<ActionState> {
	const session = await auth();
	if (!session?.user?.id) return { error: "Please sign in" };

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) return { error: readOnlyError };

	const resourceId =
		Number(formData.get("resourceId")) || Number(formData.get("assetId")); // tolerate old name
	const courseId = Number(formData.get("courseId"));
	if (!resourceId || !courseId) return { error: "Invalid ids" };

	try {
		await ensureOwnerOrAdmin(courseId, session.user.id, session.user.role);
		await prisma.resource.delete({ where: { id: resourceId } });
		revalidatePath(`/instructor/courses/${courseId}/assets`);
		return { success: "Resource deleted" };
	} catch (e: unknown) {
		const msg =
			e instanceof Error ? e.message : "Failed to delete resource";
		return { error: msg };
	}
}
