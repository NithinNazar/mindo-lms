import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { demoReadOnlyError } from "@/lib/demo";

const ProfileSchema = z.object({
	name: z.string().min(1).max(120).optional(),
	position: z.string().max(120).optional().nullable(),
	experience: z
		.union([z.string(), z.number()])
		.transform((v) => (typeof v === "string" ? Number(v) : v))
		.refine((v) => v === undefined || Number.isFinite(v as number), {
			message: "experience must be a number",
		})
		.optional(),
	languages: z
		.union([z.array(z.string()), z.string()])
		.transform((v) =>
			Array.isArray(v)
				? v
				: v
						.split(",")
						.map((s) => s.trim())
						.filter(Boolean)
		)
		.optional(),
	description: z.string().max(2000).optional().nullable(),
	avatarUrl: z.string().url().optional().nullable(),
	institute: z.string().max(200).optional().nullable(),
});

export async function GET() {
	const session = await auth();
	if (!session?.user?.id) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const user = await prisma.user.findUnique({
		where: { id: session.user.id },
		select: {
			id: true,
			name: true,
			position: true,
			experience: true,
			languages: true,
			description: true,
			avatarUrl: true,
			institute: true,
			email: true,
		},
	});
	return NextResponse.json({ data: user });
}

export async function PATCH(req: Request) {
	const session = await auth();
	if (!session?.user?.id) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const readOnlyError = demoReadOnlyError(session.user);
	if (readOnlyError) {
		return NextResponse.json({ error: readOnlyError }, { status: 403 });
	}
	const body = await req.json().catch(() => ({}));
	const parsed = ProfileSchema.safeParse(body);
	if (!parsed.success) {
		return NextResponse.json(
			{ error: parsed.error.flatten() },
			{ status: 400 }
		);
	}
	const { languages, ...rest } = parsed.data;
	const data: Record<string, any> = { ...rest };
	if (languages !== undefined) data.languages = languages;
	try {
		const user = await prisma.user.update({
			where: { id: session.user.id },
			data,
			select: {
				id: true,
				name: true,
				position: true,
				experience: true,
				languages: true,
				description: true,
				avatarUrl: true,
				institute: true,
				email: true,
			},
		});
		return NextResponse.json({ data: user });
	} catch (e) {
		console.error("/api/user/profile PATCH error", e);
		return NextResponse.json(
			{ error: "Failed to update profile" },
			{ status: 500 }
		);
	}
}
