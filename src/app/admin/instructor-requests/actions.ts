"use server";

import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { demoReadOnlyError } from "@/lib/demo";

export async function approveRequest(formData: FormData): Promise<void> {
	const admin = await requireUser();
	if (admin.role !== "ADMIN") return;

	const readOnlyError = demoReadOnlyError(admin);
	if (readOnlyError) {
		throw new Error(readOnlyError);
	}

	const id = Number(formData.get("id"));
	if (!Number.isFinite(id)) return;

	const app = await prisma.instructorApplication.findUnique({
		where: { id },
	});
	if (!app) return;

	await prisma.$transaction([
		prisma.instructorApplication.update({
			where: { id },
			data: {
				status: "APPROVED",
				decidedAt: new Date(),
				decidedBy: admin.id,
			},
		}),
		prisma.user.update({
			where: { id: app.userId },
			data: { role: "INSTRUCTOR" },
		}),
	]);

	revalidatePath("/admin/instructor-requests");
	// no return value
}

export async function rejectRequest(formData: FormData): Promise<void> {
	const admin = await requireUser();
	if (admin.role !== "ADMIN") return;

	const readOnlyError = demoReadOnlyError(admin);
	if (readOnlyError) {
		throw new Error(readOnlyError);
	}

	const id = Number(formData.get("id"));
	if (!Number.isFinite(id)) return;

	await prisma.instructorApplication.update({
		where: { id },
		data: {
			status: "REJECTED",
			decidedAt: new Date(),
			decidedBy: admin.id,
		},
	});

	revalidatePath("/admin/instructor-requests");
	// no return value
}
