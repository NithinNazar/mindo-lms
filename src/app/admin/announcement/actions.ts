"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { demoReadOnlyError } from "@/lib/demo";
import {
	announcementPayloadSchema,
	announcementUpdateSchema,
} from "@/lib/validation/announcement";

export type AnnouncementActionResult = { error?: string; success?: string };

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

function checkboxValue(formData: FormData, field: string) {
	const values = formData.getAll(field);
	if (!values.length) {
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
		label: toStringValue(formData.get("label")) ?? "",
		highlight: toStringValue(formData.get("highlight")),
		linkUrl: toStringValue(formData.get("linkUrl")),
		isPublished: checkboxValue(formData, "isPublished"),
	};

	return announcementPayloadSchema.safeParse(payload);
}

function normalizeUpdatePayload(formData: FormData) {
	const payload = {
		id: toStringValue(formData.get("id")) ?? "",
		label: toStringValue(formData.get("label")) ?? "",
		highlight: toStringValue(formData.get("highlight")),
		linkUrl: toStringValue(formData.get("linkUrl")),
		isPublished: checkboxValue(formData, "isPublished"),
	};

	return announcementUpdateSchema.safeParse(payload);
}

function revalidateAnnouncementPages() {
	revalidatePath("/admin/announcement");
	revalidatePath("/admin/announcements");
	revalidatePath("/");
}

export async function createAnnouncement(
	_prev: AnnouncementActionResult | undefined,
	formData: FormData
): Promise<AnnouncementActionResult> {
	try {
		await ensureAdmin();
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unauthorized";
		return { error: message };
	}

	const parsed = normalizeCreatePayload(formData);
	if (!parsed.success) {
		return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
	}

	try {
		await prisma.announcement.create({ data: parsed.data });
	} catch {
		return { error: "Failed to create announcement" };
	}

	revalidateAnnouncementPages();
	return { success: "Announcement created" };
}

export async function updateAnnouncement(
	_prev: AnnouncementActionResult | undefined,
	formData: FormData
): Promise<AnnouncementActionResult> {
	try {
		await ensureAdmin();
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unauthorized";
		return { error: message };
	}

	const parsed = normalizeUpdatePayload(formData);
	if (!parsed.success) {
		return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
	}

	try {
		await prisma.announcement.update({
			where: { id: parsed.data.id },
			data: {
				label: parsed.data.label,
				highlight: parsed.data.highlight,
				linkUrl: parsed.data.linkUrl,
				isPublished: parsed.data.isPublished,
			},
		});
	} catch (error) {
		if ((error as { code?: string }).code === "P2025") {
			return { error: "Announcement not found" };
		}
		return { error: "Failed to update announcement" };
	}

	revalidateAnnouncementPages();
	return { success: "Announcement updated" };
}

export async function deleteAnnouncement(
	_prev: AnnouncementActionResult | undefined,
	formData: FormData
): Promise<AnnouncementActionResult> {
	try {
		await ensureAdmin();
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unauthorized";
		return { error: message };
	}

	const idRaw = toStringValue(formData.get("id")) ?? "";
	const id = Number(idRaw);
	if (!Number.isInteger(id) || id < 1) {
		return { error: "Invalid announcement ID" };
	}

	try {
		await prisma.announcement.delete({ where: { id } });
	} catch (error) {
		if ((error as { code?: string }).code === "P2025") {
			return { error: "Announcement not found" };
		}
		return { error: "Failed to delete announcement" };
	}

	revalidateAnnouncementPages();
	return { success: "Announcement deleted" };
}
