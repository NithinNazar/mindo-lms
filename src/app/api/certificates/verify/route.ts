import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Body = {
	identifier?: string;
};

export async function POST(req: Request) {
	try {
		const body = (await req.json()) as Body;
		const rawIdentifier = body?.identifier?.trim();

		if (!rawIdentifier) {
			return NextResponse.json(
				{
					error: "Certificate number or verification code is required.",
				},
				{ status: 400 }
			);
		}

		const identifier = rawIdentifier.toUpperCase();

		const certificate = await prisma.certificate.findFirst({
			where: {
				OR: [
					{ certificateNo: identifier },
					{ verificationCode: identifier },
				],
			},
			select: {
				id: true,
				certificateNo: true,
				verificationCode: true,
				issuedAt: true,
				hours: true,
				grade: true,
				status: true,
				course: { select: { title: true } },
				user: { select: { name: true } },
			},
		});

		if (!certificate) {
			return NextResponse.json(
				{ error: "Certificate not found." },
				{ status: 404 }
			);
		}

		return NextResponse.json({
			ok: true,
			certificate: {
				id: certificate.id,
				certificateNo: certificate.certificateNo,
				verificationCode: certificate.verificationCode,
				issuedAt: certificate.issuedAt,
				hours: certificate.hours,
				grade: certificate.grade,
				status: certificate.status,
				courseTitle: certificate.course.title,
				recipientName: certificate.user.name,
			},
		});
	} catch (err: any) {
		return NextResponse.json(
			{ error: err?.message ?? "Unexpected error" },
			{ status: 500 }
		);
	}
}
