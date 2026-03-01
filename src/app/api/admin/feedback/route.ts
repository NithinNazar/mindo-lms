import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { feedbackPayloadSchema } from "@/lib/validation/feedback";
import { demoReadOnlyError } from "@/lib/demo";

export async function GET() {
	const session = await auth();
	if (!session || session.user?.role !== "ADMIN") {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) {
		return NextResponse.json({ error: readOnlyError }, { status: 403 });
	}

	const items = await prisma.feedback.findMany({
		orderBy: [{ displayOrder: "asc" }, { createdAt: "desc" }],
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

	return NextResponse.json(items);
}

export async function POST(req: Request) {
	const session = await auth();
	if (!session || session.user?.role !== "ADMIN") {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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

	const created = await prisma.feedback.create({
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

	return NextResponse.json(created, { status: 201 });
}
