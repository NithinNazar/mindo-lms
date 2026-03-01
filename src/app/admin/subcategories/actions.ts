"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { demoReadOnlyError } from "@/lib/demo";

const SubcategorySchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, "Name must be at least 2 characters")
		.max(80, "Name must be 80 characters or fewer"),
	categoryId: z.coerce.number().int().positive("Select a category"),
});

export type ActionState = { error?: string; success?: string };

export async function createSubcategory(
	_: ActionState | undefined,
	formData: FormData
): Promise<ActionState> {
	const session = await auth();
	if (!session || session.user?.role !== "ADMIN") {
		return { error: "Unauthorized" };
	}

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) {
		return { error: readOnlyError };
	}

	const raw = {
		name: String(formData.get("name") ?? ""),
		categoryId: formData.get("categoryId"),
	};

	const parsed = SubcategorySchema.safeParse(raw);
	if (!parsed.success) {
		return { error: parsed.error.issues[0]?.message || "Invalid input" };
	}

	const { name, categoryId } = parsed.data;

	// Duplicate guard within the same category
	const existing = await prisma.subCategory.findFirst({
		where: { name, categoryId },
		select: { id: true },
	});
	if (existing) {
		return {
			error: "Subcategory with this name already exists in the selected category",
		};
	}

	try {
		await prisma.subCategory.create({ data: { name, categoryId } });
	} catch (e: unknown) {
		if ((e as { code?: string })?.code === "P2002") {
			return { error: "Subcategory with this name already exists" };
		}
		return { error: "Failed to create subcategory" };
	}

	revalidatePath("/admin/subcategories");
	return { success: "Subcategory created" };
}
