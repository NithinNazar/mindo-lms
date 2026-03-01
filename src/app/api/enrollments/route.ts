// src/app/api/enrollments/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(req: NextRequest) {
	try {
		const session = await auth();
		if (!session || session.user?.role !== "ADMIN") {
			return NextResponse.json(
				{ error: "Unauthorized" },
				{ status: 401 }
			);
		}

		const { searchParams } = new URL(req.url);
		const studentId = searchParams.get("studentId");

		if (!studentId) {
			return NextResponse.json({ enrolledCourseIds: [] });
		}

		const enrollments = await prisma.enrollment.findMany({
			where: { studentId },
			select: { courseId: true },
		});

		const enrolledCourseIds = enrollments.map((e) => e.courseId);
		return NextResponse.json({ enrolledCourseIds });
	} catch (e: unknown) {
		const message = e instanceof Error ? e.message : String(e);
		console.error(e);
		return NextResponse.json({ error: message }, { status: 500 });
	}
}
