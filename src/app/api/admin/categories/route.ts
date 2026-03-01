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

	const items = await prisma.category.findMany({
		orderBy: { id: "desc" },
		select: { id: true, name: true, parentId: true },
	});

	return NextResponse.json(items);
}

export async function POST(req: Request) {
	const session = await auth();
	if (!session || session.user?.role !== "ADMIN") {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const { name, parentId } = await req.json();

	if (!name || typeof name !== "string" || name.trim().length < 2) {
		return NextResponse.json(
			{ error: "Name is required (min 2 chars)." },
			{ status: 400 }
		);
	}

	// If you are using a separate SubCategory model, categories with parentId can act as hierarchical.
	// But your schema has SubCategory table already. So for Category creation we keep parentId optional for top-level only.
	const created = await prisma.category.create({
		data: {
			name: name.trim(),
			parentId: parentId ?? null, // allow top-level
		},
		select: { id: true, name: true, parentId: true },
	});

	return NextResponse.json(created, { status: 201 });
}
