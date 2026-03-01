"use server";

export type ActionState = { error?: string; success?: string };

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { demoReadOnlyError } from "@/lib/demo";

const schema = z.object({
	id: z.coerce.number(),
	title: z.string().min(3).max(120),
	shortDescription: z.string().min(10).max(180),
	description: z.string(),
	whatYouWillLearn: z.string(),
	language: z.string(),
	level: z.string(),
	price: z.string().optional(),
	isFree: z.coerce.boolean().optional(),
	isCertificate: z.coerce.boolean().optional(),
	categoryId: z.coerce.number(),
	subcategoryId: z.coerce.number(),
	thumbnailUrl: z.string().url(),
	promoVideoUrl: z.string().url(),
});

export async function updateCourse(
	prevState: ActionState | undefined,
	formData: FormData
): Promise<ActionState> {
	const session = await auth();
	if (!session || !["ADMIN", "INSTRUCTOR"].includes(session.user?.role)) {
		return { error: "Unauthorized" };
	}

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) {
		return { error: readOnlyError };
	}

	try {
		const data = schema.parse(Object.fromEntries(formData.entries()));

		await prisma.course.update({
			where: { id: data.id },
			data: {
				title: data.title,
				shortDescription: data.shortDescription,
				description: data.description,
				whatYouWillLearn: data.whatYouWillLearn,
				language: data.language,
				level: data.level,
				price: data.isFree ? 0 : Number(data.price ?? 0),
				isFree: !!data.isFree,
				isCertificate: !!data.isCertificate,
				categoryId: data.categoryId,
				subcategoryId: data.subcategoryId,
				thumbnailUrl: data.thumbnailUrl,
				promoVideoUrl: data.promoVideoUrl,
			},
		});

		return { success: "Course updated successfully" };
	} catch (err: unknown) {
		const message =
			err instanceof Error ? err.message : "Failed to update course";
		return { error: message };
	}
}
