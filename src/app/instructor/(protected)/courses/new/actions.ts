"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { demoReadOnlyError } from "@/lib/demo";
import { revalidatePath } from "next/cache";

// Zod schema aligned to the latest Course form & DB schema
const CourseSchema = z.object({
	title: z
		.string()
		.trim()
		.min(3, "Title must be at least 3 characters")
		.max(120, "Title too long"),
	shortDescription: z
		.string()
		.trim()
		.min(10, "Short description must be at least 10 characters")
		.max(180, "Short description too long"),
	description: z
		.string()
		.trim()
		.min(20, "Please provide a detailed description"),
	whatYouWillLearn: z
		.string()
		.trim()
		.min(10, "Please describe what students will learn"),
	language: z.string().trim().min(2, "Select a language"),
	level: z.enum(["BEGINNER", "INTERMEDIATE", "EXPERT", "ALL_LEVELS"]),
	isFree: z.coerce.boolean().optional().default(false),
	price: z.preprocess(
		(v) => (v === "" || v === null ? undefined : v),
		z.coerce
			.number()
			.positive("Price must be greater than 0")
			.max(100000, "Unreasonable price")
			.optional()
	),
	isCertificate: z.coerce.boolean().optional().default(false),
	categoryId: z.coerce.number().int().positive("Select a category"),
	subcategoryId: z.coerce.number().int().positive("Select a subcategory"),
	thumbnailUrl: z.string().url("Upload a valid image"),
	promoVideoUrl: z.string().url("Upload a valid promo video URL"),
});

export type ActionState = {
	error?: string;
	success?: string;
	courseId?: number;
};

function slugify(input: string) {
	const base = input
		.toLowerCase()
		.trim()
		.replace(/['`”““’]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.replace(/-{2,}/g, "-");
	// limit length to something reasonable for URLs
	return base.slice(0, 140);
}

export async function createCourse(
	_: ActionState | undefined,
	formData: FormData
): Promise<ActionState> {
	const session = await auth();
	if (!session || !session.user?.id) {
		return { error: "Please sign in" };
	}

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) {
		return { error: readOnlyError };
	}

	const raw = {
		title: String(formData.get("title") ?? ""),
		shortDescription: String(formData.get("shortDescription") ?? ""),
		description: String(formData.get("description") ?? ""),
		whatYouWillLearn: String(formData.get("whatYouWillLearn") ?? ""),
		language: String(formData.get("language") ?? ""),
		level: String(formData.get("level") ?? ""),
		isFree: formData.get("isFree"),
		price: formData.get("price"),
		isCertificate: formData.get("isCertificate"),
		categoryId: formData.get("categoryId"),
		subcategoryId: formData.get("subcategoryId"),
		thumbnailUrl: String(formData.get("thumbnailUrl") ?? ""),
		promoVideoUrl: String(formData.get("promoVideoUrl") ?? ""),
	};

	const parsed = CourseSchema.safeParse(raw);
	if (!parsed.success) {
		return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
	}

	const data = parsed.data;

	// If isFree then ignore price
	const priceToUse = data.isFree ? 0 : data.price;
	if (!data.isFree && (priceToUse === undefined || priceToUse === null)) {
		return { error: "Price is required for paid courses" };
	}

	// Validate category/subcategory pairing
	const sub = await prisma.subCategory.findUnique({
		where: { id: data.subcategoryId },
		select: { id: true, categoryId: true },
	});
	if (!sub || sub.categoryId !== data.categoryId) {
		return {
			error: "Selected subcategory does not belong to the chosen category",
		};
	}

	// Create unique slug from title
	const base = slugify(data.title);
	let slug = base || `course-${Date.now()}`;
	let i = 2;
	// Ensure uniqueness by checking existing slugs
	while (await prisma.course.findUnique({ where: { slug } })) {
		slug = `${base}-${i++}`.slice(0, 140);
	}

	try {
		const created = await prisma.course.create({
			data: {
				slug,
				title: data.title,
				description: data.description,
				shortDescription: data.shortDescription,
				whatYouWillLearn: data.whatYouWillLearn,
				language: data.language,
				level: data.level,
				// Prisma Decimal expects string/Decimal
				price: String(priceToUse ?? 0),
				isFree: data.isFree ?? false,
				isCertificate: data.isCertificate ?? false,
				thumbnailUrl: data.thumbnailUrl,
				promoVideoUrl: data.promoVideoUrl,
				categoryId: data.categoryId,
				subcategoryId: data.subcategoryId,
				instructorId: session.user.id,
				status: "DRAFT",
			},
			select: { id: true },
		});

		revalidatePath("/instructor/courses");
		return { success: "Course created", courseId: created.id };
	} catch {
		return { error: "Failed to create course" };
	}
}
