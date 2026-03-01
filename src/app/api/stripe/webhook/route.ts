// src/app/api/stripe/webhook/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs"; // ensure edge isn't used

export async function POST(req: NextRequest) {
	const sig = req.headers.get("stripe-signature");
	const rawBody = await req.text();

	let event: Stripe.Event;

	try {
		event = new Stripe(process.env.STRIPE_SECRET_KEY!, {
			apiVersion: "2025-10-29.clover",
		}).webhooks.constructEvent(
			rawBody,
			sig!,
			process.env.STRIPE_WEBHOOK_SECRET!
		);
	} catch (err: unknown) {
		const message = err instanceof Error ? err.message : String(err);
		console.error("Webhook signature verification failed:", message);
		return new NextResponse(`Webhook Error: ${message}`, {
			status: 400,
		});
	}

	try {
		if (event.type === "checkout.session.completed") {
			const session = event.data.object as Stripe.Checkout.Session;

			const metadata = session.metadata || {};
			const courseIds: string[] = metadata.courseIds
				? JSON.parse(metadata.courseIds)
				: [];
			// Resolve studentId:
			// 1) If you attached it in metadata:
			let studentId = metadata.studentId || undefined;

			// 2) Or you can get it from customer email (if you require login, prefer metadata)
			// const customerEmail = (session.customer_details?.email ?? "").toLowerCase();

			if (!studentId) {
				// If you rely on email mapping:
				const email = session.customer_details?.email;
				if (email) {
					const user = await prisma.user.findUnique({
						where: { email: email.toLowerCase() },
						select: { id: true },
					});
					if (user) studentId = user.id;
				}
			}

			if (!studentId) {
				console.warn("No studentId resolved, skipping enrollments.");
				return NextResponse.json({ received: true });
			}

			// Create enrollments (ignore duplicates via unique constraint)
			const courseIdNums = courseIds
				.map((id) => Number(id))
				.filter((n) => Number.isFinite(n));

			// Bulk protect against duplicates
			await Promise.all(
				courseIdNums.map(async (courseId) => {
					try {
						await prisma.enrollment.upsert({
							where: {
								courseId_studentId: {
									courseId,
									studentId: String(studentId),
								},
							},
							update: {
								// Do nothing on update (or set lastActivityAt)
								lastActivityAt: new Date(),
							},
							create: {
								courseId,
								studentId: String(studentId),
								progress: 0,
								completionStatus: "NOT_STARTED",
							},
						});
					} catch (e) {
						console.error("Enrollment upsert error:", e);
					}
				})
			);
		}

		return NextResponse.json({ received: true }, { status: 200 });
	} catch (err) {
		console.error("Webhook handler error:", err);
		return new NextResponse("Webhook Handler Error", { status: 500 });
	}
}

export const config = {
	api: {
		bodyParser: false,
	},
};
