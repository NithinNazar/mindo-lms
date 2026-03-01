import { notFound } from "next/navigation";
import { Suspense } from "react";
import Banner from "@/components/CourseDetails/Banner";
import DeatilsContent from "@/components/CourseDetails/DeatilsContent";
import RelatedItems from "@/components/CourseDetails/RelatedItems";
import { getCourseBySlug } from "@/lib/getCourseBySlug";

export default async function CoursePage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const course = await getCourseBySlug(slug);
	if (!course) notFound();

	const lastUpdated = course.updatedAt
		? new Date(course.updatedAt).toLocaleDateString("en-US", {
				day: "numeric",
				month: "long",
				year: "numeric",
		  })
		: "";

	const bannerData = {
		title: course.title,
		description: course.shortDescription || course.description,
		averageRating: Number(course.stats?.averageRating ?? 0),
		reviewCount: Number(course.stats?.reviewCount ?? 0),
		instructorId: course.instructor?.id ?? null,
		instructorName: course.instructor?.name ?? "",
		instructorAvatarUrl:
			course.instructor?.avatarUrl ?? "/images/courses/user1.png",
		lastUpdated,
		language: course.language,
		breadcrumbCategory: course.category?.name ?? "Course",
		breadcrumbSubcategory: course.subcategory?.name ?? undefined,
	};
	return (
		<>
			<Suspense fallback={<div />}>
				<Banner data={bannerData} />
			</Suspense>

			<Suspense fallback={<div />}>
				<DeatilsContent
					description={
						course.description || course.shortDescription || ""
					}
					whatYouWillLearn={course.whatYouWillLearn || ""}
					averageRating={Number(course.stats?.averageRating ?? 0)}
					reviewCount={Number(course.stats?.reviewCount ?? 0)}
					reviews={course.reviews}
					sections={course.sections}
					course={{
						id: String(course.id),
						slug: course.slug,
						title: course.title,
						price: Number(course.price),
						language: course.language,
						level: course.level,
						isCertificate: course.isCertificate,
						thumbnailUrl: course.thumbnailUrl ?? null,
						promoVideoUrl: course.promoVideoUrl ?? null,
						instructorId: course.instructor?.id ?? null,
						instructorName: course.instructor?.name ?? null,
						categoryName: course.category?.name ?? null,
						subcategoryName: course.subcategory?.name ?? null,
						images: {
							thumb:
								course.thumbnailUrl ??
								"/images/courses/courses42.jpg",
						},
					}}
				/>
			</Suspense>

			<Suspense fallback={<div />}>
				<RelatedItems
					categoryId={course.categoryId}
					excludeId={course.id}
					limit={4}
				/>
			</Suspense>
		</>
	);
}
