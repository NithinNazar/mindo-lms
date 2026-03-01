import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import CoursesList from "./CoursesList";

export const dynamic = "force-dynamic";

export default async function InstructorCoursesPage() {
	const session = await auth();
	const userId = session?.user?.id;

	const courses = await prisma.course.findMany({
		where: { instructorId: userId ?? "__no_user__" },
		orderBy: { createdAt: "desc" },
		select: {
			id: true,
			slug: true,
			title: true,
			shortDescription: true,
			status: true,
			thumbnailUrl: true,
			category: { select: { name: true } },
			subcategory: { select: { name: true } },
		},
	});

	return <CoursesList courses={courses} />;
}
