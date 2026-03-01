import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const courseIdParam = searchParams.get("courseId");

		if (!courseIdParam) {
			return NextResponse.json(
				{ error: "Missing courseId" },
				{ status: 400 }
			);
		}

		const courseId = Number(courseIdParam);

		if (!Number.isFinite(courseId)) {
			return NextResponse.json(
				{ error: "Invalid courseId" },
				{ status: 400 }
			);
		}

		const resources = await prisma.resource.findMany({
			where: {
				courseId,
			},
			orderBy: { createdAt: "desc" },
			select: {
				id: true,
				title: true,
				description: true,
				fileUrl: true,
				fileName: true,
				fileType: true,
				fileSize: true,
				lessonId: true,
			},
		});

		return NextResponse.json({ resources });
	} catch (e: unknown) {
		const message = e instanceof Error ? e.message : String(e);
		return NextResponse.json({ error: message }, { status: 500 });
	}
}
