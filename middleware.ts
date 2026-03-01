import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const ADMIN_PATHS = ["/admin"];
const ADMIN_API_PATH = "/api/admin";

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;

	const hitsAdminPage = ADMIN_PATHS.some((p) => pathname.startsWith(p));
	const hitsAdminApi = pathname.startsWith(ADMIN_API_PATH);
	if (!hitsAdminPage && !hitsAdminApi) {
		return NextResponse.next();
	}

	// Support both Auth.js v5 (AUTH_SECRET) and legacy NEXTAUTH_SECRET
	const secret = process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET;

	// Try multiple cookie names to be robust across versions/configs
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
                    ? ({ req, secret, cookieName: name } as any)
                    : ({ req, secret } as any)
            );
            if (token) break;
        } catch {
            // continue to next
        }
    }
	if (!token || (token as any).role !== "ADMIN") {
		if (hitsAdminApi) {
			return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
				status: 401,
				headers: { "content-type": "application/json" },
			});
		}
		const url = req.nextUrl.clone();
		url.pathname = "/"; // or a /login page
		return NextResponse.redirect(url);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/admin/:path*", "/api/admin/:path*"],
};
