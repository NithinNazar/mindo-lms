import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/public/subcategory-stats?category=Name
// Returns learners (enrollments) per subcategory for the given category
export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const categoryName = searchParams.get("category");
	if (!categoryName) {
		return NextResponse.json(
			{ error: "category is required" },
			{ status: 400 }
		);
	}

	const category = await prisma.category.findFirst({
		where: { name: categoryName },
		select: { id: true, name: true },
	});
	if (!category) return NextResponse.json({ subcategories: [] });

	// Get subcategories for this category
	const subs = await prisma.subCategory.findMany({
		where: { categoryId: category.id },
		select: { id: true, name: true },
		orderBy: { name: "asc" },
	});
	if (subs.length === 0) return NextResponse.json({ subcategories: [] });

	// All courses in this category (published), with subcategory linkage
	const courses = await prisma.course.findMany({
		where: { categoryId: category.id, status: "PUBLISHED" },
		select: { id: true, subcategoryId: true },
	});
	if (courses.length === 0) {
		return NextResponse.json({
			subcategories: subs.map((s) => ({ name: s.name, learners: 0 })),
		});
	}

	const courseIds = courses.map((c) => c.id);
	const courseToSub = new Map(courses.map((c) => [c.id, c.subcategoryId]));

	// Group enrollments by course and roll up per subcategory
	const enrollAgg = await prisma.enrollment.groupBy({
		by: ["courseId"],
		where: { courseId: { in: courseIds } },
		_count: { courseId: true },
	});
	const learnersBySub = new Map<number, number>();
	for (const row of enrollAgg) {
		const subId = courseToSub.get(row.courseId);
		if (!subId) continue;
		learnersBySub.set(
			subId,
			(learnersBySub.get(subId) ?? 0) + (row._count.courseId ?? 0)
		);
	}

	const payload = subs.map((s) => ({
		name: s.name,
		learners: learnersBySub.get(s.id) ?? 0,
	}));

	return NextResponse.json({ subcategories: payload });
}
