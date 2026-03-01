import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { announcementPayloadSchema } from "@/lib/validation/announcement";
import { demoReadOnlyError } from "@/lib/demo";

function parseId(value: string) {
	const parsed = Number(value);
	if (!Number.isInteger(parsed) || parsed < 1) {
		return null;
	}
	return parsed;
}

export async function PUT(
	req: NextRequest,
	context: { params: Promise<{ id: string }> }
) {
	const params = await context.params;
	const session = await auth();
	if (!session || session.user?.role !== "ADMIN") {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) {
		return NextResponse.json({ error: readOnlyError }, { status: 403 });
	}

	const id = parseId(params.id);
	if (!id) {
		return NextResponse.json(
			{ error: "Invalid announcement ID" },
			{ status: 400 }
		);
	}

	const body = await req.json();
	const parsed = announcementPayloadSchema.safeParse(body);
	if (!parsed.success) {
		return NextResponse.json(
			{ error: parsed.error.issues[0]?.message ?? "Invalid input" },
			{ status: 400 }
		);
	}

	try {
		const updated = await prisma.announcement.update({
			where: { id },
			data: parsed.data,
		});

		return NextResponse.json(updated);
	} catch (error) {
		if ((error as { code?: string }).code === "P2025") {
			return NextResponse.json(
				{ error: "Announcement not found" },
				{ status: 404 }
			);
		}
		throw error;
	}
}

export async function DELETE(
	_req: NextRequest,
	context: { params: Promise<{ id: string }> }
) {
	const params = await context.params;
	const session = await auth();
	if (!session || session.user?.role !== "ADMIN") {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) {
		return NextResponse.json({ error: readOnlyError }, { status: 403 });
	}

	const id = parseId(params.id);
	if (!id) {
		return NextResponse.json(
			{ error: "Invalid announcement ID" },
			{ status: 400 }
		);
	}

	try {
		await prisma.announcement.delete({ where: { id } });
	} catch (error) {
		if ((error as { code?: string }).code === "P2025") {
			return NextResponse.json(
				{ error: "Announcement not found" },
				{ status: 404 }
			);
		}
		throw error;
	}

	return NextResponse.json({ success: true });
}
