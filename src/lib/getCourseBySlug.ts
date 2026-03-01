import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function getCourseBySlug(slug: string) {
	const session = await auth();
	const userId = session?.user?.id ?? null;

	const course = await prisma.course.findUnique({
		where: { slug },
		include: {
    instructor: {
        select: {
            id: true,
            name: true,
            avatarUrl: true,
            institute: true,
            position: true,
            experience: true,
            languages: true,
            description: true,
        },
    },
			category: { select: { id: true, name: true } },
			subcategory: { select: { id: true, name: true } },
			resources: {
				where: { lessonId: null },
				orderBy: { createdAt: "desc" },
				select: {
					id: true,
					title: true,
					description: true,
					fileUrl: true,
					fileName: true,
					fileType: true,
					fileSize: true,
					createdAt: true,
				},
			},
			sections: {
				orderBy: { order: "asc" },
				select: {
					id: true,
					title: true,
					order: true,
					lessons: {
						orderBy: { id: "asc" },
						select: {
							id: true,
							title: true,
							type: true,
							videoUrl: true,
							duration: true,
							isPreview: true,
							resources: {
								orderBy: { createdAt: "desc" },
								select: {
									id: true,
									title: true,
									description: true,
									fileUrl: true,
									fileName: true,
									fileType: true,
									fileSize: true,
									createdAt: true,
								},
							},
						},
					},
				},
			},
			reviews: {
				orderBy: { createdAt: "desc" },
				select: {
					id: true,
					rating: true,
					comment: true,
					createdAt: true,
					student: {
						select: { id: true, name: true, avatarUrl: true },
					},
				},
			},
			_count: {
				select: { reviews: true },
			},
		},
	});

	if (!course) return null;

	const ratingAgg = await prisma.review.aggregate({
		where: { courseId: course.id },
		_avg: { rating: true },
	});

	let isEnrolled = false;

	if (userId) {
		const [enr] = await Promise.all([
			prisma.enrollment.findUnique({
				where: {
					courseId_studentId: {
						courseId: course.id,
						studentId: userId,
					},
				},
				select: { id: true },
			}),
		]);
		isEnrolled = !!enr;
	}

	return {
		...course,
		stats: {
			averageRating: ratingAgg._avg.rating ?? 0,
			reviewCount: course._count.reviews,
		},
		userState: {
			isEnrolled,
			studentId: userId,
		},
	};
}
