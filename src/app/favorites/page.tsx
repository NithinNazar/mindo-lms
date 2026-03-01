import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import FavoriteCard from "@/components/Favorites/FavoriteCard";

export const dynamic = "force-dynamic";

export default async function FavoritesPage() {
	const user = await requireUser();

	const favorites = await prisma.favorite.findMany({
		where: { userId: user.id },
		orderBy: { createdAt: "desc" },
		include: {
			course: {
				select: {
					id: true,
					slug: true,
					title: true,
					shortDescription: true,
					thumbnailUrl: true,
					price: true,
					isFree: true,
				},
			},
		},
	});

	return (
		<div className="container">
			{/* Header */}
			<div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
				<h3 className="h3 mb-0">My Favorites</h3>

				<div className="d-flex align-items-center gap-2">
					<Link href="/dashboard" className="btn btn-link p-0">
						Back to Dashboard
					</Link>
					<Link href="/courses" className="btn btn-primary">
						Browse Courses
					</Link>
				</div>
			</div>

			{favorites.length === 0 ? (
				<div className="alert alert-info" role="alert">
					You haven’t added any courses to favorites yet.
				</div>
			) : (
				<div className="row g-4">
					{favorites.map((fav) => (
						<div key={fav.id} className="col-12 col-md-6 col-xl-4">
							<FavoriteCard
								course={{
									id: fav.course.id,
									slug: fav.course.slug,
									title: fav.course.title,
									shortDescription:
										fav.course.shortDescription,
									thumbnailUrl: fav.course.thumbnailUrl,
									price: fav.course.price as unknown as
										| number
										| string,
									isFree: fav.course.isFree,
								}}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
