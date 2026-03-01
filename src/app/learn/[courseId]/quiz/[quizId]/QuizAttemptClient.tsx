"use client";

import { useState } from "react";
import Link from "next/link";

type Question = {
  id: number;
  order: number;
  type: "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | "TRUE_FALSE" | "SHORT_TEXT" | "LONG_TEXT" | "NUMERIC";
  text: string;
  points: number;
  options?: { id: number; text: string }[];
};

export default function QuizAttemptClient({
  courseId,
  quiz,
  attemptId,
}: {
  courseId: number;
  attemptId: number;
  quiz: {
    id: number;
    title: string;
    timeLimitSec: number | null;
    totalPoints: number;
    questions: Question[];
  };
}) {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ score: number; total: number; percentage: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const form = new FormData(e.currentTarget);
      const answers: any[] = [];
      for (const q of quiz.questions) {
        if (q.type === "SINGLE_CHOICE" || q.type === "TRUE_FALSE") {
          const v = form.get(`q_${q.id}`);
          const id = v ? Number(v) : null;
          answers.push({ questionId: q.id, selectedOptionIds: id ? [id] : [] });
        } else if (q.type === "MULTIPLE_CHOICE") {
          const vals = form.getAll(`q_${q.id}`);
          const ids = vals.map((x) => Number(x)).filter((n) => Number.isFinite(n));
          answers.push({ questionId: q.id, selectedOptionIds: ids });
        } else if (q.type === "SHORT_TEXT" || q.type === "LONG_TEXT") {
          const v = String(form.get(`q_${q.id}`) || "");
          answers.push({ questionId: q.id, answerText: v });
        } else if (q.type === "NUMERIC") {
          const v = form.get(`q_${q.id}`);
          const num = v ? Number(v) : null;
          answers.push({ questionId: q.id, numericAnswer: Number.isFinite(num as any) ? num : null });
        }
      }

      const res = await fetch("/api/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attemptId, answers }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Submit failed");
      setResult({ score: data.score, total: data.totalPoints, percentage: data.percentage });
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  if (result) {
    return (
      <div className="container py-5">
        <h1 className="h4 mb-3">{quiz.title}</h1>
        <div className="alert alert-success">
          Score: {result.score} / {result.total} ({result.percentage}%)
        </div>
        <Link href={`/learn/${courseId}/quizzes`} className="btn btn-primary">Back to Quizzes</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h4 mb-0">{quiz.title}</h1>
        <Link href={`/learn/${courseId}/quizzes`} className="btn btn-link p-0">Back</Link>
      </div>

      {quiz.timeLimitSec ? (
        <div className="alert alert-warning py-2">Time limit: {quiz.timeLimitSec} seconds</div>
      ) : null}

      <form onSubmit={handleSubmit} className="vstack gap-4">
        {quiz.questions.map((q) => (
          <div key={q.id} className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div className="fw-semibold">Q{q.order}. {q.text}</div>
                <div className="badge bg-secondary">{q.points} pts</div>
              </div>

              {(q.type === "SINGLE_CHOICE" || q.type === "TRUE_FALSE") && q.options && (
                <div className="vstack gap-2">
                  {q.options.map((o) => (
                    <label key={o.id} className="d-flex align-items-center gap-2">
                      <input type="radio" name={`q_${q.id}`} value={o.id} /> {o.text}
                    </label>
                  ))}
                </div>
              )}

              {q.type === "MULTIPLE_CHOICE" && q.options && (
                <div className="vstack gap-2">
                  {q.options.map((o) => (
                    <label key={o.id} className="d-flex align-items-center gap-2">
                      <input type="checkbox" name={`q_${q.id}`} value={o.id} /> {o.text}
                    </label>
                  ))}
                </div>
              )}

              {q.type === "SHORT_TEXT" && (
                <input name={`q_${q.id}`} className="form-control" placeholder="Your answer" />
              )}
              {q.type === "LONG_TEXT" && (
                <textarea name={`q_${q.id}`} className="form-control" rows={4} placeholder="Your answer" />
              )}
              {q.type === "NUMERIC" && (
                <input name={`q_${q.id}`} type="number" className="form-control" placeholder="Enter a number" />
              )}
            </div>
          </div>
        ))}

        <div className="d-flex gap-3 align-items-center">
          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? "Submitting…" : "Submit Quiz"}
          </button>
          {error && <div className="text-danger small">{error}</div>}
        </div>
      </form>
    </div>
  );
}

