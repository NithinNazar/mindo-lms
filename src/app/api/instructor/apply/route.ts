import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { demoReadOnlyError } from "@/lib/demo";

export async function POST(req: Request) {
	try {
		const user = await requireUser();
		const readOnlyError = demoReadOnlyError(user);
		if (readOnlyError)
			return NextResponse.json(
				{ error: readOnlyError },
				{ status: 403 }
			);
		// Instructors/Admins don't need to apply
		if (user.role === "INSTRUCTOR" || user.role === "ADMIN") {
			return NextResponse.json(
				{ error: "Already an instructor" },
				{ status: 400 }
			);
		}

		const body = (await req.json()) as {
			name?: string;
			email?: string;
			expertise?: string;
			topic?: string;
			summary?: string;
		};

		const name = (body.name || "").trim() || user.name || "";
		const email = (body.email || "").trim() || user.email || "";
		if (!name || !email) {
			return NextResponse.json(
				{ error: "Name and email are required" },
				{ status: 400 }
			);
		}

		// If a pending application exists, don't duplicate
		const existing = await prisma.instructorApplication.findFirst({
			where: { userId: user.id, status: "PENDING" },
			select: { id: true },
		});
		if (existing) {
			return NextResponse.json({
				ok: true,
				pending: true,
				id: existing.id,
			});
		}

		const app = await prisma.instructorApplication.create({
			data: {
				userId: user.id,
				name,
				email,
				expertise: body.expertise || null,
				topic: body.topic || null,
				summary: body.summary || null,
			},
			select: { id: true },
		});
		return NextResponse.json({ ok: true, id: app.id });
	} catch (e: any) {
		return NextResponse.json(
			{ error: e?.message ?? "Unexpected error" },
			{ status: 500 }
		);
	}
}
