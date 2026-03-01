import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { feedbackPayloadSchema } from "@/lib/validation/feedback";
import { demoReadOnlyError } from "@/lib/demo";

function parseId(id: string) {
	const parsed = Number(id);
	if (!Number.isInteger(parsed) || parsed < 1) {
		return null;
	}
	return parsed;
}

export async function PUT(
	req: NextRequest,
	context: { params: Promise<{ id: string }> }
) {
	const { id: idParam } = await context.params;

	const session = await auth();
	if (!session || session.user?.role !== "ADMIN") {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) {
		return NextResponse.json({ error: readOnlyError }, { status: 403 });
	}

	const id = parseId(idParam);
	if (!id) {
		return NextResponse.json(
			{ error: "Invalid feedback ID" },
			{ status: 400 }
		);
	}

	const body = await req.json();
	const parsed = feedbackPayloadSchema.safeParse(body);
	if (!parsed.success) {
		return NextResponse.json(
			{ error: parsed.error.issues[0]?.message ?? "Invalid input" },
			{ status: 400 }
		);
	}

	const data = parsed.data;

	try {
		const updated = await prisma.feedback.update({
			where: { id },
			data: {
				name: data.name,
				role: data.role,
				message: data.message,
				rating: data.rating,
				imageUrl: data.imageUrl,
				isPublished: data.isPublished,
				displayOrder: data.displayOrder,
			},
			select: {
				id: true,
				name: true,
				role: true,
				message: true,
				rating: true,
				imageUrl: true,
				isPublished: true,
				displayOrder: true,
				createdAt: true,
				updatedAt: true,
			},
		});

		return NextResponse.json(updated);
	} catch (error) {
		if ((error as { code?: string }).code === "P2025") {
			return NextResponse.json(
				{ error: "Feedback not found" },
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
	const { id: idParam } = await context.params;

	const session = await auth();
	if (!session || session.user?.role !== "ADMIN") {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) {
		return NextResponse.json({ error: readOnlyError }, { status: 403 });
	}

	const id = parseId(idParam);
	if (!id) {
		return NextResponse.json(
			{ error: "Invalid feedback ID" },
			{ status: 400 }
		);
	}

	try {
		await prisma.feedback.delete({ where: { id } });
	} catch (error) {
		if ((error as { code?: string }).code === "P2025") {
			return NextResponse.json(
				{ error: "Feedback not found" },
				{ status: 404 }
			);
		}
		throw error;
	}

	return NextResponse.json({ success: true });
}
