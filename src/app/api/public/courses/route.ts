import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";
import { auth } from "@/lib/auth";

/**
 * GET /api/public/courses
 * Optional query params:
 *   - category: string (Category.name)
 *   - subcategory: string (SubCategory.name)
 *   - limit: number
 *   - offset: number
 *
 * Response shape matches /public/courses.json sample:
 * [
 *   {
 *     id: "c1",
 *     category: "Data Science",
 *     subcategory: "Python",
 *     title: "Python Basics for Data Science",
 *    slug: "python-basics-for-data-science",
 *     price: 39,
 *     rating: 4.9,
 *     reviewsCount: 2425,
 *     lessons: 45,
 *     learners: 7820,
 *     level: "INTERMEDIATE",
 *     images: { thumb: "/images/courses/courses1.jpg" },
 *    isFavorited: false
 *   }
 * ]
 */
export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const categoryName = searchParams.get("category") || undefined;
	const subcategoryName = searchParams.get("subcategory") || undefined;

	const limit = Math.min(Number(searchParams.get("limit") ?? 60), 200);
	const shuffle = (searchParams.get("shuffle") ?? "").toLowerCase() === "1";
	const offset = Math.max(Number(searchParams.get("offset") ?? 0), 0);

	// Base where: only published courses for public
	const where: Prisma.CourseWhereInput = { status: "PUBLISHED" };
	if (categoryName) where.category = { name: categoryName };
	if (subcategoryName) where.subcategory = { name: subcategoryName };

	// Pull primary fields + relations we need to compute output
	const take = shuffle ? Math.min(Math.max(limit * 5, limit), 100) : limit;
	const courses = await prisma.course.findMany({
		where,
		orderBy: { createdAt: "desc" },
		take,
		skip: offset,
		select: {
			id: true,
			slug: true,
			title: true,
			price: true, // Decimal
			level: true,
			thumbnailUrl: true,
			category: { select: { name: true } },
			subcategory: { select: { name: true } },
		},
	});

	if (courses.length === 0) {
		return NextResponse.json([]);
	}

	// Current user's favorites (optional)
	let favSet = new Set<number>();
	try {
		const session = await auth?.();
		if (session?.user?.id && courses.length) {
			const favs = await prisma.favorite.findMany({
				where: {
					userId: session.user.id,
					courseId: { in: courses.map((c) => c.id) },
				},
				select: { courseId: true },
			});
			favSet = new Set(favs.map((f) => f.courseId));
		}
	} catch {}

	// Pre-compute counts in batches to avoid N+1 where possible
	// 1) Reviews: average rating + count by courseId
	const reviewAgg = await prisma.review.groupBy({
		by: ["courseId"],
		where: { courseId: { in: courses.map((c) => c.id) } },
		_avg: { rating: true },
		_count: { rating: true },
	});
	const reviewByCourse = new Map(
		reviewAgg.map((r) => [
			r.courseId,
			{
				rating: r._avg.rating ?? 0,
				reviewsCount: r._count.rating ?? 0,
			},
		])
	);

	// 2) Enrollments: count by courseId
	const enrollAgg = await prisma.enrollment.groupBy({
		by: ["courseId"],
		where: { courseId: { in: courses.map((c) => c.id) } },
		_count: { courseId: true },
	});
	const learnersByCourse = new Map(
		enrollAgg.map((e) => [e.courseId, e._count.courseId ?? 0])
	);

	// 3) Lessons: count lessons per course (via sections -> lessons)
	// Do a single lessons count grouped by section.courseId
	// If your Lesson model has courseId directly, switch to groupBy on lesson.courseId.
	const lessonAgg = await prisma.lesson.groupBy({
		by: ["sectionId"],
		_count: { sectionId: true },
		where: {
			section: { courseId: { in: courses.map((c) => c.id) } },
		},
	});

	// We need to roll up lesson counts per course
	// Grab all sections for these courses
	const sections = await prisma.section.findMany({
		where: { courseId: { in: courses.map((c) => c.id) } },
		select: { id: true, courseId: true },
	});
	const sectionToCourse = new Map(sections.map((s) => [s.id, s.courseId]));
	const lessonsByCourse = new Map<number, number>();
	for (const row of lessonAgg) {
		const courseId = sectionToCourse.get(row.sectionId);
		if (!courseId) continue;
		lessonsByCourse.set(
			courseId,
			(lessonsByCourse.get(courseId) ?? 0) + row._count.sectionId
		);
	}

	// Build payload in the exact JSON shape you provided
	const payload = courses.map((c) => {
		// Prisma Decimal -> number
		const priceNumber = (c.price as Prisma.Decimal).toNumber();

		const review = reviewByCourse.get(c.id) ?? {
			rating: 0,
			reviewsCount: 0,
		};
		const learners = learnersByCourse.get(c.id) ?? 0;
		const lessons = lessonsByCourse.get(c.id) ?? 0;

		return {
			id: c.id,
			category: c.category?.name ?? "",
			subcategory: c.subcategory?.name ?? "",
			title: c.title,
			slug: c.slug,
			price: priceNumber,
			rating: Math.round((review.rating ?? 0) * 10) / 10, // one decimal like 4.9
			reviewsCount: review.reviewsCount ?? 0,
			lessons,
			learners,
			level: c.level,
			images: {
				thumb: c.thumbnailUrl ?? "",
			},
			isFavorited: favSet.has(c.id),
		};
	});

	// Optional shuffle for random selection client requests
	if (shuffle) {
		for (let i = payload.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[payload[i], payload[j]] = [payload[j], payload[i]];
		}
		return NextResponse.json(payload.slice(0, limit));
	}

	return NextResponse.json(payload);
}
