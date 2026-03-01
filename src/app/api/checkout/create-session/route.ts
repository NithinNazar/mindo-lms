// src/app/api/checkout/create-session/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { auth } from "@/lib/auth";
import { demoReadOnlyError } from "@/lib/demo";

// Incoming cart item payload shape (avoid `any`)
type IncomingItem = {
	id: string | number;
	title: string;
	price: number | string;
	image?: string;
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: "2025-10-29.clover",
});

export async function POST(req: NextRequest) {
	const userSession = await auth();
	if (!userSession) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const readOnlyError = demoReadOnlyError(userSession.user);
	if (readOnlyError) {
		return NextResponse.json({ error: readOnlyError }, { status: 403 });
	}

	try {
		// If you don’t have auth yet, temporarily accept a studentId from body
		const { items, studentId } = (await req.json()) as {
			items: IncomingItem[];
			studentId?: string | number;
		};

		const effectiveStudentId = studentId ?? userSession.user?.id ?? null;
		if (!effectiveStudentId) {
			return NextResponse.json(
				{ error: "Missing student identifier" },
				{ status: 400 }
			);
		}

		if (!Array.isArray(items) || items.length === 0) {
			return NextResponse.json({ error: "No items." }, { status: 400 });
		}

		// IMPORTANT: Never trust client pricing in production.
		// Ideally, fetch each Course by ID and read price from DB.
		// For now we’ll coerce received price.
		const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] =
			items.map((it: IncomingItem) => ({
				quantity: 1,
				price_data: {
					currency: "usd",
					unit_amount: Math.round(Number(it.price) * 100), // cents
					product_data: {
						name: it.title,
						images: it.image ? [it.image] : undefined,
						metadata: { courseId: String(it.id) }, // keep a copy
					},
				},
			}));

		// Metadata to recover on webhook
		const metaCourseIds = items.map((it: IncomingItem) => String(it.id));
		const metadata: Record<string, string> = {
			courseIds: JSON.stringify(metaCourseIds),
		};

		metadata.studentId = String(effectiveStudentId);

		const checkoutSession = await stripe.checkout.sessions.create({
			mode: "payment",
			payment_method_types: ["card"],
			line_items,
			success_url: `${process.env.APP_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${process.env.APP_BASE_URL}/cart`,
			metadata,
		});

		return NextResponse.json({
			sessionId: checkoutSession.id,
			url: checkoutSession.url,
		});
	} catch (err: unknown) {
		const message = err instanceof Error ? err.message : String(err);
		console.error("Create session error:", err);
		return NextResponse.json(
			{ error: message ?? "Unknown error" },
			{ status: 500 }
		);
	}
}
