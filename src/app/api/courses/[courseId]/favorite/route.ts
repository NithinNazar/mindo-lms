// app/api/courses/[courseId]/favorite/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth";
import { demoReadOnlyError } from "@/lib/demo";

const prisma = new PrismaClient();

export async function POST(
	_req: Request,
	ctx: { params: Promise<{ courseId: string }> }
) {
	const { courseId: courseIdParam } = await ctx.params;
	try {
		const session = await auth();
		if (!session?.user?.id) {
			return NextResponse.json(
				{ error: "Unauthorized" },
				{ status: 401 }
			);
		}

		const readOnlyError = demoReadOnlyError(session.user);
		if (readOnlyError) {
			return NextResponse.json({ error: readOnlyError }, { status: 403 });
		}

		const courseId = Number(courseIdParam || 0);
		if (!courseId || Number.isNaN(courseId)) {
			return NextResponse.json(
				{ error: "Invalid course id" },
				{ status: 400 }
			);
		}

		// Toggle: if exists -> delete, else create
		const existing = await prisma.favorite.findUnique({
			where: {
				userId_courseId: {
					userId: session.user.id,
					courseId,
				},
			},
		});

		if (existing) {
			await prisma.favorite.delete({
				where: { id: existing.id },
			});
		} else {
			await prisma.favorite.create({
				data: {
					userId: session.user.id,
					courseId,
				},
			});
		}

		const count = await prisma.favorite.count({ where: { courseId } });
		return NextResponse.json({ favorited: !existing, count });
	} catch (e) {
		console.error("[favorite.toggle] error", e);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
