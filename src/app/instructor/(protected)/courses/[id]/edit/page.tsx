import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import CourseForm from "../../new/CourseForm";

export default async function EditCoursePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
	const session = await auth();
	if (!session || !["ADMIN", "INSTRUCTOR"].includes(session.user?.role)) {
		redirect("/");
	}

    const { id } = await params;

    const course = await prisma.course.findUnique({
        where: { id: Number(id) },
        include: { category: true, subcategory: true },
    });

	if (!course) notFound();

	const categories = await prisma.category.findMany({
		orderBy: { name: "asc" },
		select: {
			id: true,
			name: true,
			SubCategory: { select: { id: true, name: true } },
		},
	});

	const initialData = {
		id: course.id,
		title: course.title,
		shortDescription: course.shortDescription,
		description: course.description,
		whatYouWillLearn: course.whatYouWillLearn,
		language: course.language,
		level: course.level,
		price: course.price.toString(),
		isFree: course.isFree,
		isCertificate: course.isCertificate,
		categoryId: course.categoryId,
		subcategoryId: course.subcategoryId,
		thumbnailUrl: course.thumbnailUrl,
		promoVideoUrl: course.promoVideoUrl,
	};

	return (
		<div className="container">
			<div className="mx-auto max-w-3xl p-6">
				<h3 className="font-bold mb-4">Edit Course</h3>
				
				<CourseForm categories={categories} initialData={initialData} />
			</div>
		</div>
	);
}
