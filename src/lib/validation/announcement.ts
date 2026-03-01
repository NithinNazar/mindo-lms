import { z } from "zod";

const booleanLikeSchema = z
	.union([z.boolean(), z.number(), z.string(), z.null(), z.undefined()])
	.transform((value) => {
		if (value === null || value === undefined) {
			return true;
		}

		if (typeof value === "boolean") {
			return value;
		}

		if (typeof value === "number") {
			return value !== 0;
		}

		const normalized = value.toString().trim().toLowerCase();
		if (["false", "0", "no", "off"].includes(normalized)) {
			return false;
		}
		if (["true", "1", "yes", "on"].includes(normalized)) {
			return true;
		}
		return Boolean(normalized);
	});

const optionalUrlSchema = z
	.union([z.string(), z.literal(""), z.null(), z.undefined()])
	.transform((value, ctx) => {
		if (value === null || value === undefined) {
			return null;
		}
		const str = value.toString().trim();
		if (!str.length) {
			return null;
		}
		if (!/^https?:\/\//.test(str) && !str.startsWith("/")) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Link must start with http(s):// or /",
			});
			return z.NEVER;
		}
		if (str.length > 2048) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Link must be 2048 characters or fewer",
			});
			return z.NEVER;
		}
		return str;
	});

export const announcementPayloadSchema = z.object({
	label: z
		.string()
		.trim()
		.min(3, "Label must be at least 3 characters")
		.max(160, "Label must be 160 characters or fewer"),
	highlight: z
		.union([z.string(), z.literal(""), z.null(), z.undefined()])
		.transform((value) => {
			if (value === null || value === undefined) {
				return null;
			}
			const str = value.toString().trim();
			return str.length ? str : null;
		})
		.refine((value) => !value || value.length <= 120, {
			message: "Highlight must be 120 characters or fewer",
		}),
	linkUrl: optionalUrlSchema,
	isPublished: booleanLikeSchema,
});

export const announcementUpdateSchema = announcementPayloadSchema.extend({
	id: z.coerce
		.number()
		.int("Invalid announcement ID")
		.min(1, "Invalid announcement ID"),
});

export type AnnouncementPayload = z.infer<typeof announcementPayloadSchema>;
export type AnnouncementUpdatePayload = z.infer<
	typeof announcementUpdateSchema
>;
