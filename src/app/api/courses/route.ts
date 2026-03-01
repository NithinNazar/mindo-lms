import { NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@prisma/client";
import { auth } from "@/lib/auth";

const prisma = new PrismaClient();

type SortKey = "newest" | "oldest" | "price_asc" | "price_desc";

function toSortOrder(sort?: string): Prisma.CourseOrderByWithRelationInput {
	const key = (sort || "newest").toLowerCase() as SortKey;
	switch (key) {
		case "oldest":
			return { createdAt: "asc" };
		case "price_asc":
			return { price: "asc" };
		case "price_desc":
			return { price: "desc" };
		case "newest":
		default:
			return { createdAt: "desc" };
	}
}

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);

		// Query params
		const page = Math.max(parseInt(searchParams.get("page") || "1", 10), 1);
		const limit = Math.min(
			Math.max(parseInt(searchParams.get("limit") || "12", 10), 1),
			100
		); // safety cap
		const q = (searchParams.get("q") || "").trim();
		const sort = (searchParams.get("sort") || "newest").toLowerCase();

		// Filters: published + text search over title/shortDescription only
		const where: Prisma.CourseWhereInput = {
			status: "PUBLISHED",
			...(q
				? {
						OR: [
							{ title: { contains: q } },
							{
								shortDescription: {
									contains: q,
								},
							},
						],
				  }
				: {}),
		};

		// Totals & paging
		const total = await prisma.course.count({ where });
		const totalPages = Math.max(Math.ceil(total / limit), 1);
		const currentPage = Math.min(page, totalPages);
		const skip = (currentPage - 1) * limit;
		const orderBy = toSortOrder(sort);

		// Page of courses with required relations and counts
		const courses = await prisma.course.findMany({
			where,
			orderBy,
			skip,
			take: limit,
			select: {
				id: true,
				title: true,
				slug: true,
				price: true,
				level: true,
				shortDescription: true,
				thumbnailUrl: true,
				createdAt: true,
				_count: {
					select: {
						enrollments: true,
						reviews: true,
						sections: true,
					},
				},
				sections: { select: { _count: { select: { lessons: true } } } },
			},
		});

		const courseIds = courses.map((c) => c.id);

		// Current user's favorites (optional)
		let favSet = new Set<number>();
		try {
			const session = await auth?.();
			if (session?.user?.id && courseIds.length) {
				const favs = await prisma.favorite.findMany({
					where: {
						userId: session.user.id,
						courseId: { in: courseIds },
					},
					select: { courseId: true },
				});
				favSet = new Set(favs.map((f) => f.courseId));
			}
		} catch {}

		// Average rating and review counts via groupBy
		const ratings = courseIds.length
			? await prisma.review.groupBy({
					by: ["courseId"],
					where: { courseId: { in: courseIds } },
					_avg: { rating: true },
					_count: { _all: true },
			  })
			: [];

		const ratingMap = new Map<number, { avg: number; count: number }>();
		for (const r of ratings) {
			ratingMap.set(r.courseId, {
				avg: r._avg.rating ?? 0,
				count: r._count._all,
			});
		}

		// Map DB rows to the attached-file data structure
		const data = courses.map((c) => {
			const lessons = c.sections.reduce(
				(sum, s) => sum + (s._count.lessons || 0),
				0
			);
			const rating = ratingMap.get(c.id) ?? { avg: 0, count: 0 };

			return {
				id: String(c.id),
				title: c.title,
				slug: c.slug,
				price: Number(c.price),
				rating: Number((rating.avg || 0).toFixed(1)),
				reviewsCount: rating.count,
				lessons,
				learners: c._count.enrollments,
				level: c.level,
				images: {
					thumb: c.thumbnailUrl || "/images/courses/placeholder.jpg",
				},
				isFavorited: favSet.has(c.id),
			};
		});

		// If the sort key is not price-based and DB doesn't contain a timestamp you rely on, the above orderBy handles newest/oldest. No post-sort required.

		const from = total === 0 ? 0 : skip + 1;
		const to = total === 0 ? 0 : Math.min(skip + limit, total);

		return NextResponse.json({
			meta: {
				total,
				page: currentPage,
				limit,
				from,
				to,
				totalPages,
				sort,
				q: q || null,
			},
			data,
		});
	} catch (err) {
		console.error("[/api/courses] GET error:", err);
		return NextResponse.json(
			{ error: "Failed to fetch courses." },
			{ status: 500 }
		);
	}
}
