import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { hash } from "bcrypt";

const RegisterBody = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	password: z.string().min(8),
	institute: z.string().optional(),
	avatarUrl: z.string().url().optional(),
	role: z.enum(["ADMIN", "INSTRUCTOR", "STUDENT"]).optional(),
});

export async function POST(req: Request) {
	try {
		const json = await req.json();
		const data = RegisterBody.parse(json);

		const exists = await prisma.user.findUnique({
			where: { email: data.email },
			select: { id: true },
		});
		if (exists) {
			return NextResponse.json(
				{ message: "Email is already registered" },
				{ status: 400 }
			);
		}

		const passwordHash = await hash(data.password, 10);

		await prisma.user.create({
			data: {
				name: data.name,
				email: data.email,
				password: passwordHash,
				institute: data.institute,
				avatarUrl: data.avatarUrl,
				role: data.role ?? "STUDENT",
			},
		});

		return NextResponse.json({ ok: true });
	} catch (err: unknown) {
		const message =
			err instanceof Error ? err.message : "Registration failed";
		return NextResponse.json({ message }, { status: 400 });
	}
}
