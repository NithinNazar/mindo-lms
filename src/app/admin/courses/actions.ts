"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { demoReadOnlyError } from "@/lib/demo";

async function assertAdmin(): Promise<string | null> {
	const session = await auth();
	if (!session || session.user?.role !== "ADMIN") {
		throw new Error("Not authorized");
	}

	const readOnlyError = demoReadOnlyError(session.user);
	return readOnlyError ?? null;
}

export async function setCourseStatus(formData: FormData): Promise<void> {
	const readOnlyError = await assertAdmin();
	if (readOnlyError) {
		redirect(`/admin/courses?error=${encodeURIComponent(readOnlyError)}`);
	}
	const id = Number(formData.get("courseId"));
	const status = String(formData.get("status"));
	if (!id || !status) return;

	await prisma.course.update({
		where: { id },
		data: { status },
	});

	revalidatePath("/admin/courses");
}

export async function deleteCourse(formData: FormData): Promise<void> {
	const readOnlyError = await assertAdmin();
	if (readOnlyError) {
		redirect(`/admin/courses?error=${encodeURIComponent(readOnlyError)}`);
	}
	const id = Number(formData.get("courseId"));
	if (!id) return;

	// Clean up dependents to avoid FK errors
	await prisma.$transaction(async (tx) => {
		await tx.lesson.deleteMany({ where: { section: { courseId: id } } });
		await tx.section.deleteMany({ where: { courseId: id } });
		await tx.resource.deleteMany({ where: { courseId: id } });
		await tx.review.deleteMany({ where: { courseId: id } });
		await tx.enrollment.deleteMany({ where: { courseId: id } });
		await tx.course.delete({ where: { id } });
	});

	revalidatePath("/admin/courses");
}
