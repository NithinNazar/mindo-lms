"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { demoReadOnlyError } from "@/lib/demo";

export type ActionState = { error?: string; success?: string };

export async function deleteCourse(
	_: ActionState | undefined,
	formData: FormData
): Promise<ActionState> {
	const session = await auth();
	if (!session || !session.user?.id) return { error: "Unauthorized" };

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) return { error: readOnlyError };

	const id = Number(formData.get("courseId"));
	if (!id || Number.isNaN(id)) return { error: "Invalid course id" };

	// ensure ownership
	const course = await prisma.course.findUnique({
		where: { id },
		select: { instructorId: true },
	});
	if (!course || course.instructorId !== session.user.id) {
		return { error: "You don't have permission to delete this course" };
	}

	await prisma.course.delete({ where: { id } });
	revalidatePath("/instructor/courses");
	return { success: "Course deleted" };
}
