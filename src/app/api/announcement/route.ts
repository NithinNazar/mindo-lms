import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
	const announcement = await prisma.announcement.findFirst({
		where: { isPublished: true },
		orderBy: { updatedAt: "desc" },
		select: {
			id: true,
			label: true,
			highlight: true,
			linkUrl: true,
		},
	});

	return NextResponse.json(announcement ?? null);
}
