import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function GET(req: Request) {
	try {
		const secret = process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET;
		// Try multiple cookie names to detect token
		const cookieNames = [
			undefined, // default detection
			"__Secure-authjs.session-token",
			"authjs.session-token",
			"__Secure-next-auth.session-token",
			"next-auth.session-token",
		] as const;

		let token: any = null;
		for (const name of cookieNames) {
			try {
				token = await getToken(
					name
						? ({ req: req as any, secret, cookieName: name } as any)
						: ({ req: req as any, secret } as any)
				);
				if (token) break;
			} catch {
				// keep trying
			}
		}

		// Only return minimal, non-sensitive fields
		const role = (token as any)?.role ?? null;
		const id = (token as any)?.id ?? null;

		return NextResponse.json({
			ok: true,
			authenticated: !!token,
			id,
			role,
		});
	} catch {
		return NextResponse.json(
			{ ok: false, error: "Failed to read token" },
			{ status: 500 }
		);
	}
}
