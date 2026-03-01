"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { demoReadOnlyError } from "@/lib/demo";

const CategorySchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, "Name must be at least 2 characters")
		.max(80, "Name must be 80 characters or fewer"),
});

export type ActionState = { error?: string; success?: string };

export async function createCategory(
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

	const raw = { name: String(formData.get("name") ?? "") };
	const parsed = CategorySchema.safeParse(raw);
	if (!parsed.success) {
		return { error: parsed.error.issues[0]?.message || "Invalid input" };
	}

	const name = parsed.data.name;

	// Duplicate guard (case-sensitive by default)
	const existing = await prisma.category.findFirst({
		where: { name },
		select: { id: true },
	});
	if (existing) {
		return { error: "Category with this name already exists" };
	}

	try {
		await prisma.category.create({ data: { name } });
	} catch (e: unknown) {
		if ((e as { code?: string })?.code === "P2002") {
			return { error: "Category with this name already exists" };
		}
		return { error: "Failed to create category" };
	}

	revalidatePath("/admin/categories");
	return { success: "Category created" };
}

export async function deleteCategory(
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

	const idRaw = formData.get("categoryId");
	const id = Number(idRaw);
	if (!Number.isInteger(id) || id < 1) {
		return { error: "Invalid category" };
	}

	const category = await prisma.category.findUnique({
		where: { id },
		select: {
			id: true,
			_count: { select: { Course: true, SubCategory: true } },
		},
	});
	if (!category) {
		return { error: "Category not found" };
	}

	if (category._count.Course > 0 || category._count.SubCategory > 0) {
		return {
			error:
				"Remove linked courses and subcategories before deleting this category.",
		};
	}

	try {
		await prisma.category.delete({ where: { id } });
	} catch {
		return { error: "Failed to delete category" };
	}

	revalidatePath("/admin/categories");
	return { success: "Category deleted" };
}
