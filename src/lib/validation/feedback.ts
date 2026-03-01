import { z } from "zod";

const imageUrlSchema = z
	.union([z.string(), z.literal(""), z.null(), z.undefined()])
	.transform((value) => {
		if (value === null || value === undefined) {
			return null;
		}

		const str = value.toString().trim();
		return str.length ? str : null;
	})
	.superRefine((value, ctx) => {
		if (value && value.length > 2048) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Image URL must be 2048 characters or fewer",
			});
		}
	});

const isPublishedSchema = z
	.union([z.boolean(), z.number(), z.string(), z.null(), z.undefined()])
	.transform((value) => {
		if (value === null || value === undefined) {
			return true; // default published
		}

		if (typeof value === "boolean") {
			return value;
		}

		if (typeof value === "number") {
			return value !== 0;
		}

		const normalized = value.toString().trim().toLowerCase();
		if (["true", "1", "yes", "on"].includes(normalized)) {
			return true;
		}
		if (["false", "0", "no", "off"].includes(normalized)) {
			return false;
		}
		return Boolean(normalized);
	});

const displayOrderSchema = z
	.union([z.string(), z.number(), z.null(), z.undefined()])
	.transform((value, ctx) => {
		if (value === null || value === undefined) {
			return null;
		}

		if (typeof value === "number") {
			if (!Number.isInteger(value) || value < 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Display order must be a non-negative integer",
				});
				return z.NEVER;
			}
			return value;
		}

		const str = value.toString().trim();
		if (!str) {
			return null;
		}

		const num = Number(str);
		if (!Number.isInteger(num) || num < 0) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Display order must be a non-negative integer",
			});
			return z.NEVER;
		}

		return num;
	});

export const feedbackPayloadSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, "Name must be at least 2 characters")
		.max(120, "Name must be 120 characters or fewer"),
	role: z
		.string()
		.trim()
		.min(2, "Role must be at least 2 characters")
		.max(120, "Role must be 120 characters or fewer"),
	message: z
		.string()
		.trim()
		.min(10, "Message must be at least 10 characters")
		.max(2000, "Message must be 2000 characters or fewer"),
	rating: z.coerce
		.number()
		.int("Rating must be an integer")
		.min(1, "Rating must be between 1 and 5")
		.max(5, "Rating must be between 1 and 5"),
	imageUrl: imageUrlSchema,
	isPublished: isPublishedSchema,
	displayOrder: displayOrderSchema,
});

export const feedbackUpdateSchema = feedbackPayloadSchema.extend({
	id: z.coerce
		.number()
		.int("Invalid feedback ID")
		.min(1, "Invalid feedback ID"),
});

export type FeedbackPayload = z.infer<typeof feedbackPayloadSchema>;
export type FeedbackUpdatePayload = z.infer<typeof feedbackUpdateSchema>;
