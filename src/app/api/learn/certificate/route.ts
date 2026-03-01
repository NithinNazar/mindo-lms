import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { demoReadOnlyError } from "@/lib/demo";

function randomDigits(n: number) {
	let s = "";
	for (let i = 0; i < n; i++) s += Math.floor(Math.random() * 10);
	return s;
}

function genCertificateNo(): string {
	const y = new Date().getFullYear();
	return `ACAD-${y}-${randomDigits(6)}`;
}

function genVerificationCode(): string {
	const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // avoid confusing chars
	let code = "";
	for (let i = 0; i < 10; i++)
		code += alphabet[Math.floor(Math.random() * alphabet.length)];
	return code;
}

export async function POST(req: Request) {
	try {
		const user = await requireUser();
		const readOnlyError = demoReadOnlyError(user);
		if (readOnlyError)
			return NextResponse.json(
				{ error: readOnlyError },
				{ status: 403 }
			);
		const { courseId } = (await req.json()) as { courseId?: number };
		const cId = Number(courseId);
		if (!Number.isFinite(cId)) {
			return NextResponse.json(
				{ error: "Invalid courseId" },
				{ status: 400 }
			);
		}

		const enrollment = await prisma.enrollment.findUnique({
			where: {
				courseId_studentId: { courseId: cId, studentId: user.id },
			},
			include: {
				Certificate: true,
				course: { select: { id: true, title: true } },
				lessonProgress: { select: { watchedSeconds: true } },
			},
		});
		if (!enrollment) {
			return NextResponse.json(
				{ error: "Not enrolled" },
				{ status: 403 }
			);
		}
		const completed = (enrollment.progress ?? 0) >= 100;
		if (!completed) {
			return NextResponse.json(
				{ error: "Course not completed" },
				{ status: 400 }
			);
		}

		// Return existing certificate if any
		if (enrollment.Certificate) {
			return NextResponse.json({
				ok: true,
				certificate: enrollment.Certificate,
			});
		}

		// Compute learning hours from watchedSeconds (rounded down to int hours)
		const totalSeconds = enrollment.lessonProgress.reduce(
			(sum, p) => sum + (p.watchedSeconds || 0),
			0
		);
		const hours = Math.floor(totalSeconds / 3600);

		// Upsert by unique constraint userId+courseId
		// We need to generate unique certificateNo and verificationCode; retry on conflict a few times
		let attempt = 0;
		while (attempt < 5) {
			attempt++;
			const certificateNo = genCertificateNo();
			const verificationCode = genVerificationCode();
			try {
				const cert = await prisma.certificate.upsert({
					where: {
						userId_courseId: { userId: user.id, courseId: cId },
					},
					update: {},
					create: {
						userId: user.id,
						courseId: cId,
						enrollmentId: enrollment.id,
						certificateNo,
						verificationCode,
						grade: "Pass",
						hours: hours > 0 ? hours : null,
						status: "ISSUED",
					},
				});
				return NextResponse.json({ ok: true, certificate: cert });
			} catch (e: any) {
				// Likely unique conflict on generated codes, retry
				if (attempt >= 5) throw e;
			}
		}

		return NextResponse.json(
			{ error: "Failed to issue certificate" },
			{ status: 500 }
		);
	} catch (err: any) {
		return NextResponse.json(
			{ error: err?.message ?? "Unexpected error" },
			{ status: 500 }
		);
	}
}
