import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Initialize Stripe only if the key is available
const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-10-29.clover",
    })
  : null;

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  // Check if Stripe is configured
  if (!stripe) {
    return NextResponse.json(
      { ok: false, error: "Payment system not configured" },
      { status: 503 },
    );
  }

  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json(
      { ok: false, error: "Missing session_id" },
      { status: 400 },
    );
  }

  try {
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });

    const paid =
      checkoutSession.payment_status === "paid" ||
      checkoutSession.status === "complete";

    let enrolledCourses: number[] = [];
    let studentId: string | null = null;

    if (paid) {
      const metadata = checkoutSession.metadata || {};
      const rawCourseIds = metadata.courseIds;
      const metadataStudentId = metadata.studentId;

      if (rawCourseIds && metadataStudentId) {
        studentId = String(metadataStudentId);
        let parsedCourseIds: unknown;
        try {
          parsedCourseIds = JSON.parse(rawCourseIds);
        } catch {
          parsedCourseIds = rawCourseIds;
        }

        const uniqueCourseIds = Array.from(
          new Set(
            (Array.isArray(parsedCourseIds)
              ? parsedCourseIds
              : [parsedCourseIds]
            ).map((value) => {
              const num = Number(value);
              return Number.isFinite(num) ? num : null;
            }),
          ),
        ).filter((value): value is number => value !== null && value > 0);

        if (uniqueCourseIds.length > 0) {
          await Promise.all(
            uniqueCourseIds.map((courseId) =>
              prisma.enrollment.upsert({
                where: {
                  courseId_studentId: {
                    courseId,
                    studentId: studentId!,
                  },
                },
                update: {},
                create: {
                  courseId,
                  studentId: studentId!,
                },
              }),
            ),
          );
          enrolledCourses = uniqueCourseIds;
          revalidatePath("/dashboard");
          revalidatePath("/dashboard/enrollments");
        }
      }
    }

    return NextResponse.json({
      ok: true,
      paid,
      enrolled: enrolledCourses,
      studentId,
    });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : String(e);
    console.error("verify-session error:", e);
    return NextResponse.json(
      { ok: false, error: message ?? "Unknown error" },
      { status: 500 },
    );
  }
}
