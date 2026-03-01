import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

/**
 * GET /api/public/menu/full
 * -> [
 *   { id, name, subcategories: [
 *     { id, name, courses: [{ title, price, link, thumbnail }] }
 *   ]}
 * ]
 */
export async function GET() {
	const categories = await prisma.category.findMany({
		orderBy: { name: "asc" },
		select: { id: true, name: true },
	});

	const subcategories = await prisma.subCategory.findMany({
		orderBy: [{ categoryId: "asc" }, { name: "asc" }],
		select: { id: true, name: true, categoryId: true },
	});

	// Build map categoryId -> subcats
	const byCategory = new Map<number, { id: number; name: string }[]>();
	for (const c of categories) byCategory.set(c.id, []);
	for (const s of subcategories) {
		const arr = byCategory.get(s.categoryId) ?? [];
		arr.push({ id: s.id, name: s.name });
		byCategory.set(s.categoryId, arr);
	}

	// Get all subcat ids to fetch courses
	const allSubIds = subcategories.map((s) => s.id);
	const allCourses =
		allSubIds.length === 0
			? []
			: await prisma.course.findMany({
					where: {
						subcategoryId: { in: allSubIds },
						status: "PUBLISHED",
					},
					select: {
						title: true,
						price: true,
						slug: true,
						thumbnailUrl: true,
						subcategoryId: true,
					},
			  });

	const bySub = new Map<
		number,
		{
			title: string;
			price: unknown;
			link: string;
			thumbnail: string | null;
		}[]
	>();
	for (const s of subcategories) bySub.set(s.id, []);
	for (const c of allCourses) {
		const arr = bySub.get(c.subcategoryId) ?? [];
		arr.push({
			title: c.title,
			price: c.price,
			link: `/course/${c.slug}`,
			thumbnail: c.thumbnailUrl ?? null,
		});
		bySub.set(c.subcategoryId, arr);
	}

	const tree = categories.map((cat) => {
		const subs = (byCategory.get(cat.id) ?? []).map((s) => ({
			id: s.id,
			name: s.name,
			courses: bySub.get(s.id) ?? [],
		}));
		return { id: cat.id, name: cat.name, subcategories: subs };
	});

	return NextResponse.json(tree);
}
