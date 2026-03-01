import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const categoryId = Number(searchParams.get("categoryId"));
		const excludeId = Number(searchParams.get("excludeId"));
		const limit = Math.min(
			Math.max(Number(searchParams.get("limit") || 8), 1),
			24
		);

		if (!categoryId || Number.isNaN(categoryId)) {
			return NextResponse.json(
				{ error: "categoryId is required" },
				{ status: 400 }
			);
		}

		const where = {
			status: "PUBLISHED" as const,
			categoryId,
			...(excludeId ? { id: { not: excludeId } } : {}),
		};

		const courses = await prisma.course.findMany({
			where,
			orderBy: { createdAt: "desc" },
			take: limit,
			select: {
				id: true,
				title: true,
				slug: true,
				price: true,
				level: true,
				thumbnailUrl: true,
				sections: { select: { _count: { select: { lessons: true } } } },
				_count: { select: { enrollments: true } },
			},
		});

		const ids = courses.map((c) => c.id);

		// favorites for current user
		let favSet = new Set<number>();
		try {
			const session = await auth?.();
			if (session?.user?.id && ids.length) {
				const favs = await prisma.favorite.findMany({
					where: { userId: session.user.id, courseId: { in: ids } },
					select: { courseId: true },
				});
				favSet = new Set(favs.map((f) => f.courseId));
			}
		} catch {}

		// ratings
		const ratings = ids.length
			? await prisma.review.groupBy({
					by: ["courseId"],
					where: { courseId: { in: ids } },
					_avg: { rating: true },
					_count: { _all: true },
			  })
			: [];
		const ratingMap = new Map<number, { avg: number; count: number }>();
		for (const r of ratings)
			ratingMap.set(r.courseId, {
				avg: r._avg.rating ?? 0,
				count: r._count._all,
			});

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

		return NextResponse.json({ data });
	} catch (e) {
		console.error("[/api/courses/related] GET error:", e);
		return NextResponse.json(
			{ error: "Failed to fetch related courses." },
			{ status: 500 }
		);
	}
}
