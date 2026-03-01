// app/api/me/favorites/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET() {
	try {
		const session = await auth();
		if (!session?.user?.id) {
			return NextResponse.json(
				{ error: "Unauthorized" },
				{ status: 401 }
			);
		}

		const favorites = await prisma.favorite.findMany({
			where: { userId: session.user.id },
			select: {
				courseId: true,
				course: {
					select: {
						id: true,
						slug: true,
						title: true,
						thumbnailUrl: true,
						price: true,
					},
				},
			},
			orderBy: { createdAt: "desc" },
		});

		return NextResponse.json({
			data: favorites.map((f) => ({
				id: f.course.id,
				slug: f.course.slug,
				title: f.course.title,
				thumbnailUrl: f.course.thumbnailUrl,
				price: f.course.price,
			})),
		});
	} catch (e) {
		console.error("[favorites.list] error", e);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
