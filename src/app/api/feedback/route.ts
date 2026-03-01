import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
	const items = await prisma.feedback.findMany({
		where: { isPublished: true },
		orderBy: [{ displayOrder: "asc" }, { createdAt: "desc" }],
		select: {
			id: true,
			name: true,
			role: true,
			message: true,
			rating: true,
			imageUrl: true,
		},
	});

	return NextResponse.json(items);
}
