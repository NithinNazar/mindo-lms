import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { announcementPayloadSchema } from "@/lib/validation/announcement";
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

	const items = await prisma.announcement.findMany({
		orderBy: { updatedAt: "desc" },
	});

	return NextResponse.json(items);
}

export async function POST(req: Request) {
	const session = await auth();
	if (!session || session.user?.role !== "ADMIN") {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const body = await req.json();
	const parsed = announcementPayloadSchema.safeParse(body);
	if (!parsed.success) {
		return NextResponse.json(
			{ error: parsed.error.issues[0]?.message ?? "Invalid input" },
			{ status: 400 }
		);
	}

	const created = await prisma.announcement.create({
		data: parsed.data,
	});

	return NextResponse.json(created, { status: 201 });
}
