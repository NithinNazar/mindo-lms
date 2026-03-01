import NextAuth, { type DefaultSession } from "next-auth";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import { compare } from "bcrypt";
import { z } from "zod";

declare module "next-auth" {
	interface Session extends DefaultSession {
		user: DefaultSession["user"] & {
			id: string;
			role: "ADMIN" | "INSTRUCTOR" | "STUDENT";
		};
	}
	interface User {
		role: "ADMIN" | "INSTRUCTOR" | "STUDENT";
	}
}

type TokenWithRole = {
	[key: string]: unknown;
	id?: string;
	role?: "ADMIN" | "INSTRUCTOR" | "STUDENT";
};

// Narrow unknown/union "user" values without using "any"
function isUserWithRole(
	u: unknown
): u is { id: string; role?: "ADMIN" | "INSTRUCTOR" | "STUDENT" } {
	return !!u && typeof (u as Record<string, unknown>).id === "string";
}

const CredentialsSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1),
});

export const authOptions: NextAuthConfig = {
	// Use JWT to avoid DB session issues while we debug
	session: { strategy: "jwt" },
    debug: process.env.NODE_ENV !== "production",
    trustHost: true,
    // Support both Auth.js v5 (AUTH_SECRET) and legacy NEXTAUTH_SECRET
    secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
	logger: {
		error(error) {
			console.error("[NextAuth error]", error);
		},
		warn(code) {
			console.warn("[NextAuth warn]", code);
		},
		debug(code, metadata) {
			if (process.env.NODE_ENV !== "production") {
				console.log("[NextAuth debug]", code, metadata);
			}
		},
	},
	providers: [
		Credentials({
			name: "Credentials",
			authorize: async (credentials) => {
				const parsed = CredentialsSchema.safeParse(credentials);
				if (!parsed.success) return null;

				const { email, password } = parsed.data;

				const user = await prisma.user.findUnique({ where: { email } });
				if (!user || !user.password) return null;

				const valid = await compare(password, user.password);
				if (!valid) return null;

				return {
					id: user.id,
					name: user.name ?? undefined,
					email: user.email ?? undefined,
					image: user.avatarUrl ?? undefined,
					role: user.role,
				};
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			const t = token as TokenWithRole;
			// When user logs in, persist id/role into the JWT
			if (user && isUserWithRole(user)) {
				t.id = user.id;
				t.role = user.role;
			}
			return t as unknown as typeof token;
		},
		async session({ session, token }) {
			const t = token as TokenWithRole;
			// Expose id/role from JWT to the client session
			if (session.user) {
				if (typeof t.id === "string") {
					session.user.id = t.id;
				}
				session.user.role = t.role ?? "STUDENT";
			}
			return session;
		},
	},
	cookies: {
    sessionToken: {
			// Keep a stable cookie name that works across envs
			name: "next-auth.session-token",
			options: {
				httpOnly: true,
				sameSite: "lax",
				path: "/",
            // Use secure cookies when running over HTTPS (derived from URL)
            secure: (() => {
              const url =
                process.env.NEXTAUTH_URL ||
                process.env.AUTH_URL ||
                process.env.APP_BASE_URL ||
                "";
              return url.startsWith("https://");
            })(),
          },
        },
      },
	pages: {
		signIn: "/login",
		error: "/login",
	},
};

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth(authOptions);

export async function requireUser() {
	const session = await auth();
	if (!session?.user?.id) {
		throw new Error("Unauthorized");
	}
	return {
		id: session.user.id,
		role: session.user.role,
		name: session.user.name,
		email: session.user.email,
	};
}
