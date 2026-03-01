const rawEmails = process.env.DEMO_READONLY_EMAILS ?? "";

const readOnlyEmails = new Set(
	rawEmails
		.split(",")
		.map((value) => value.trim().toLowerCase())
		.filter((value) => value.length > 0)
);

export const demoReadOnlyMessage =
	process.env.DEMO_READONLY_MESSAGE?.trim() ||
	"Demo account has read-only access.";

export const hasDemoReadOnlyAccounts = readOnlyEmails.size > 0;

type DemoGuardTarget =
	| null
	| undefined
	| {
			email?: unknown;
			user?: { email?: unknown } | null | undefined;
	  };

function toEmail(value: unknown): string | null {
	if (typeof value !== "string") return null;
	const normalized = value.trim().toLowerCase();
	return normalized.length ? normalized : null;
}

function extractEmail(target: DemoGuardTarget): string | null {
	if (!target || typeof target !== "object") return null;
	const direct = toEmail((target as { email?: unknown }).email);
	if (direct) return direct;

	const nestedUser = (
		target as { user?: { email?: unknown } | null | undefined }
	).user;
	if (nestedUser && typeof nestedUser === "object") {
		return toEmail((nestedUser as { email?: unknown }).email);
	}
	return null;
}

export function isDemoReadOnly(target: DemoGuardTarget): boolean {
	if (!hasDemoReadOnlyAccounts) return false;
	const email = extractEmail(target);
	return !!email && readOnlyEmails.has(email);
}

export function demoReadOnlyError(target: DemoGuardTarget): string | null {
	return isDemoReadOnly(target) ? demoReadOnlyMessage : null;
}
