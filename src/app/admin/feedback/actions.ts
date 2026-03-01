"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { demoReadOnlyError } from "@/lib/demo";
import {
	feedbackPayloadSchema,
	feedbackUpdateSchema,
} from "@/lib/validation/feedback";

export type ActionResult = { error?: string; success?: string };

type EntryValue = FormDataEntryValue | null | undefined;

function toStringValue(value: EntryValue) {
	if (value == null) {
		return undefined;
	}
	if (typeof value === "string") {
		return value;
	}
	return value.name;
}

function checkboxValue(formData: FormData, field: string): string | undefined {
	const values = formData.getAll(field);
	if (values.length === 0) {
		return undefined;
	}
	const last = values[values.length - 1];
	return typeof last === "string" ? last : last?.name;
}

async function ensureAdmin() {
	const session = await auth();
	if (!session || session.user?.role !== "ADMIN") {
		throw new Error("Unauthorized");
	}

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) {
		throw new Error(readOnlyError);
	}
}

function normalizeCreatePayload(formData: FormData) {
	const payload = {
		name: toStringValue(formData.get("name")) ?? "",
		role: toStringValue(formData.get("role")) ?? "",
		message: toStringValue(formData.get("message")) ?? "",
		rating: toStringValue(formData.get("rating")) ?? "",
		imageUrl: toStringValue(formData.get("imageUrl")),
		isPublished: checkboxValue(formData, "isPublished"),
		displayOrder: toStringValue(formData.get("displayOrder")),
	};

	return feedbackPayloadSchema.safeParse(payload);
}

function normalizeUpdatePayload(formData: FormData) {
	const payload = {
		id: toStringValue(formData.get("id")) ?? "",
		name: toStringValue(formData.get("name")) ?? "",
		role: toStringValue(formData.get("role")) ?? "",
		message: toStringValue(formData.get("message")) ?? "",
		rating: toStringValue(formData.get("rating")) ?? "",
		imageUrl: toStringValue(formData.get("imageUrl")),
		isPublished: checkboxValue(formData, "isPublished"),
		displayOrder: toStringValue(formData.get("displayOrder")),
	};

	return feedbackUpdateSchema.safeParse(payload);
}

function revalidateFeedbackPages() {
	revalidatePath("/admin/feedback");
	revalidatePath("/");
	revalidatePath("/testimonials");
}

export async function createFeedback(
	_prevState: ActionResult | undefined,
	formData: FormData
): Promise<ActionResult> {
	try {
		await ensureAdmin();
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Unauthorized";
		return { error: message };
	}

	const parsed = normalizeCreatePayload(formData);
	if (!parsed.success) {
		return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
	}

	const data = parsed.data;

	try {
		await prisma.feedback.create({
			data: {
				name: data.name,
				role: data.role,
				message: data.message,
				rating: data.rating,
				imageUrl: data.imageUrl,
				isPublished: data.isPublished,
				displayOrder: data.displayOrder,
			},
		});
	} catch {
		return { error: "Failed to create feedback" };
	}

	revalidateFeedbackPages();
	return { success: "Feedback created" };
}

export async function updateFeedback(
	_prevState: ActionResult | undefined,
	formData: FormData
): Promise<ActionResult> {
	try {
		await ensureAdmin();
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Unauthorized";
		return { error: message };
	}

	const parsed = normalizeUpdatePayload(formData);
	if (!parsed.success) {
		return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
	}

	const data = parsed.data;

	try {
		await prisma.feedback.update({
			where: { id: data.id },
			data: {
				name: data.name,
				role: data.role,
				message: data.message,
				rating: data.rating,
				imageUrl: data.imageUrl,
				isPublished: data.isPublished,
				displayOrder: data.displayOrder,
			},
		});
	} catch (error) {
		if ((error as { code?: string }).code === "P2025") {
			return { error: "Feedback not found" };
		}
		return { error: "Failed to update feedback" };
	}

	revalidateFeedbackPages();
	return { success: "Feedback updated" };
}

export async function deleteFeedback(
	_prevState: ActionResult | undefined,
	formData: FormData
): Promise<ActionResult> {
	try {
		await ensureAdmin();
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Unauthorized";
		return { error: message };
	}

	const idRaw = toStringValue(formData.get("id")) ?? "";
	const id = Number(idRaw);
	if (!Number.isInteger(id) || id < 1) {
		return { error: "Invalid feedback ID" };
	}

	try {
		await prisma.feedback.delete({ where: { id } });
	} catch (error) {
		if ((error as { code?: string }).code === "P2025") {
			return { error: "Feedback not found" };
		}
		return { error: "Failed to delete feedback" };
	}

	revalidateFeedbackPages();
	return { success: "Feedback deleted" };
}
