import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
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

	const items = await prisma.subCategory.findMany({
		orderBy: { id: "desc" },
		include: { category: { select: { id: true, name: true } } },
	});

	return NextResponse.json(items);
}

export async function POST(req: Request) {
	const session = await auth();
	if (!session || session.user?.role !== "ADMIN") {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const { name, categoryId } = await req.json();

	if (!name || typeof name !== "string" || name.trim().length < 2) {
		return NextResponse.json(
			{ error: "Name is required (min 2 chars)." },
			{ status: 400 }
		);
	}
	if (!categoryId || typeof categoryId !== "number") {
		return NextResponse.json(
			{ error: "categoryId (number) is required." },
			{ status: 400 }
		);
	}

	// Ensure parent category exists
	const parent = await prisma.category.findUnique({
		where: { id: categoryId },
	});
	if (!parent) {
		return NextResponse.json(
			{ error: "Parent category not found." },
			{ status: 404 }
		);
	}

	const created = await prisma.subCategory.create({
		data: {
			name: name.trim(),
			categoryId,
		},
		include: { category: { select: { id: true, name: true } } },
	});

	return NextResponse.json(created, { status: 201 });
}
