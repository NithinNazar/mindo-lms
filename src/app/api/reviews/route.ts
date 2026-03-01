import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { demoReadOnlyError } from "@/lib/demo";

// NEW: fetch the current user's review for a course
export async function GET(req: NextRequest) {
	try {
			const user = await requireUser();
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

		const review = await prisma.review.findFirst({
			where: { courseId, studentId: user.id },
			select: { id: true, rating: true, comment: true, createdAt: true },
		});

		return NextResponse.json({ review });
	} catch (e: unknown) {
		const message = e instanceof Error ? e.message : String(e);
		return NextResponse.json({ error: message }, { status: 500 });
	}
}

// (keep your existing POST here unchanged)

export async function POST(req: NextRequest) {
	try {
			const user = await requireUser();
			const readOnlyError = demoReadOnlyError(user);
			if (readOnlyError)
				return NextResponse.json(
					{ error: readOnlyError },
					{ status: 403 }
				);
		const { courseId, rating, comment } = (await req.json()) as {
			courseId: number | string;
			rating: number | string;
			comment?: string;
		};

		const cId = Number(courseId);
		const rate = Number(rating);

		if (!Number.isFinite(cId)) {
			return NextResponse.json(
				{ error: "Invalid courseId" },
				{ status: 400 }
			);
		}
		if (!Number.isFinite(rate) || rate < 1 || rate > 5) {
			return NextResponse.json(
				{ error: "Rating must be an integer between 1 and 5" },
				{ status: 400 }
			);
		}

		// Ensure the user is enrolled in the course
		const enrolled = await prisma.enrollment.findUnique({
			where: {
				courseId_studentId: { courseId: cId, studentId: user.id },
			},
			select: { id: true },
		});
		if (!enrolled) {
			return NextResponse.json(
				{ error: "You must be enrolled to leave a review" },
				{ status: 403 }
			);
		}

		// Update existing review or create a new one
		const existing = await prisma.review.findFirst({
			where: { courseId: cId, studentId: user.id },
			select: { id: true },
		});

		let review;
		if (existing) {
			review = await prisma.review.update({
				where: { id: existing.id },
				data: { rating: rate, comment: comment ?? null },
				select: {
					id: true,
					rating: true,
					comment: true,
					createdAt: true,
				},
			});
		} else {
			review = await prisma.review.create({
				data: {
					courseId: cId,
					studentId: user.id,
					rating: rate,
					comment: comment ?? null,
				},
				select: {
					id: true,
					rating: true,
					comment: true,
					createdAt: true,
				},
			});
		}

		return NextResponse.json({ ok: true, review });
	} catch (e: unknown) {
		const message = e instanceof Error ? e.message : String(e);
		return NextResponse.json({ error: message }, { status: 500 });
	}
}
