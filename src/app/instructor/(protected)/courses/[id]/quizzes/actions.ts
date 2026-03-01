"use server";

import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { z } from "zod";
import { demoReadOnlyError } from "@/lib/demo";

export type ActionState = {
  success?: string;
  error?: string;
  quiz?: { id: number; title: string; status: string; totalPoints: number };
  question?: {
    id: number;
    order: number;
    type:
      | "SINGLE_CHOICE"
      | "MULTIPLE_CHOICE"
      | "TRUE_FALSE"
      | "SHORT_TEXT"
      | "LONG_TEXT"
      | "NUMERIC";
    text: string;
    points: number;
    options?: { id: number; order: number; text: string; isCorrect?: boolean }[];
  };
  totalPoints?: number;
};

const CreateQuizSchema = z.object({
  courseId: z.coerce.number().int().positive(),
  title: z.string().min(3).max(140),
  description: z.string().max(5000).optional().nullable(),
  maxAttempts: z.coerce.number().int().min(0).default(0),
  passingScore: z.coerce.number().int().min(0).max(100).optional().nullable(),
  timeLimitSec: z.coerce.number().int().min(1).optional().nullable(),
});

export async function createQuiz(_: ActionState | undefined, formData: FormData) {
  try {
    const user = await requireUser();
    const readOnlyError = demoReadOnlyError(user);
    if (readOnlyError) {
      return { error: readOnlyError } as ActionState;
    }

    const parsed = CreateQuizSchema.parse({
      courseId: formData.get("courseId"),
      title: formData.get("title"),
      description: formData.get("description") || undefined,
      maxAttempts: formData.get("maxAttempts") ?? 0,
      passingScore: formData.get("passingScore") || undefined,
      timeLimitSec: formData.get("timeLimitSec") || undefined,
    });

    const course = await prisma.course.findUnique({
      where: { id: parsed.courseId },
      select: { instructorId: true },
    });
    if (!course || course.instructorId !== user.id) {
      return { error: "Not allowed" } as ActionState;
    }

    const quiz = await prisma.quiz.create({
      data: {
        courseId: parsed.courseId,
        title: parsed.title,
        description: parsed.description || null,
        maxAttempts: parsed.maxAttempts,
        passingScore: parsed.passingScore ?? null,
        timeLimitSec: parsed.timeLimitSec ?? null,
        status: "DRAFT",
      },
      select: { id: true, title: true, status: true, totalPoints: true },
    });
    return { success: `Created quiz #${quiz.id}`, quiz } as ActionState;
  } catch (e: any) {
    return { error: e?.message ?? "Failed to create quiz" } as ActionState;
  }
}

const AddQuestionSchema = z.object({
  quizId: z.coerce.number().int().positive(),
  order: z.coerce.number().int().min(1).default(1),
  type: z.enum([
    "SINGLE_CHOICE",
    "MULTIPLE_CHOICE",
    "TRUE_FALSE",
    "SHORT_TEXT",
    "LONG_TEXT",
    "NUMERIC",
  ]),
  text: z.string().min(1),
  points: z.coerce.number().int().min(1).default(1),
  // options json string for choice questions: [{text: string, isCorrect?: boolean}]
  options: z.string().optional().nullable(),
});

export async function addQuestion(_: ActionState | undefined, formData: FormData) {
  try {
    const user = await requireUser();
    const readOnlyError = demoReadOnlyError(user);
    if (readOnlyError) {
      return { error: readOnlyError } as ActionState;
    }

    const parsed = AddQuestionSchema.parse({
      quizId: formData.get("quizId"),
      order: formData.get("order") ?? 1,
      type: formData.get("type"),
      text: formData.get("text"),
      points: formData.get("points") ?? 1,
      options: formData.get("options") || undefined,
    });

    const quiz = await prisma.quiz.findUnique({
      where: { id: parsed.quizId },
      select: { course: { select: { instructorId: true } } },
    });
    if (!quiz || quiz.course.instructorId !== user.id) {
      return { error: "Not allowed" } as ActionState;
    }

    const q = await prisma.quizQuestion.create({
      data: {
        quizId: parsed.quizId,
        order: parsed.order,
        type: parsed.type,
        text: parsed.text,
        points: parsed.points,
      },
      select: { id: true },
    });

    if (
      (parsed.type === "SINGLE_CHOICE" ||
        parsed.type === "MULTIPLE_CHOICE" ||
        parsed.type === "TRUE_FALSE") &&
      parsed.options
    ) {
      try {
        const list = JSON.parse(parsed.options) as Array<{
          text: string;
          isCorrect?: boolean;
        }>;
        if (Array.isArray(list)) {
          for (let i = 0; i < list.length; i++) {
            const opt = list[i];
            if (!opt || typeof opt.text !== "string") continue;
            await prisma.quizOption.create({
              data: {
                questionId: q.id,
                order: i + 1,
                text: opt.text,
                isCorrect: !!opt.isCorrect,
              },
            });
          }
        }
      } catch {}
    }

    // Update quiz totalPoints snapshot
    const agg = await prisma.quizQuestion.aggregate({
      where: { quizId: parsed.quizId },
      _sum: { points: true },
    });
    await prisma.quiz.update({
      where: { id: parsed.quizId },
      data: { totalPoints: agg._sum.points ?? 0 },
    });
    // Fetch the created question with options
    const saved = await prisma.quizQuestion.findUnique({
      where: { id: q.id },
      include: { options: { orderBy: { order: "asc" } } },
    });

    return {
      success: `Added question #${q.id}`,
      question: saved
        ? {
            id: saved.id,
            order: saved.order,
            type: saved.type as any,
            text: saved.text,
            points: saved.points,
            options: saved.options.map((o) => ({ id: o.id, order: o.order, text: o.text, isCorrect: o.isCorrect })),
          }
        : undefined,
      totalPoints: agg._sum.points ?? 0,
    } as ActionState;
  } catch (e: any) {
    return { error: e?.message ?? "Failed to add question" } as ActionState;
  }
}

export async function publishQuiz(_: ActionState | undefined, formData: FormData) {
  try {
    const user = await requireUser();
    const readOnlyError = demoReadOnlyError(user);
    if (readOnlyError) {
      return { error: readOnlyError } as ActionState;
    }

    const quizId = Number(formData.get("quizId"));
    if (!Number.isFinite(quizId)) return { error: "Invalid quiz" };

    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      select: { course: { select: { instructorId: true } } },
    });
    if (!quiz || quiz.course.instructorId !== user.id) {
      return { error: "Not allowed" } as ActionState;
    }

    await prisma.quiz.update({ where: { id: quizId }, data: { status: "PUBLISHED" } });
    return { success: "Quiz published" } as ActionState;
  } catch (e: any) {
    return { error: e?.message ?? "Failed to publish" } as ActionState;
  }
}
