"use client";

import Link from "next/link";
import { useState } from "react";
import NewQuizForm from "./QuizNewForm";
import type { ActionState } from "./actions";
import toast from "react-hot-toast";

type QuizRow = { id: number; title: string; status: string; totalPoints: number };

export default function CourseQuizzesManager({
  courseId,
  initialQuizzes,
}: {
  courseId: number;
  initialQuizzes: QuizRow[];
}) {
  const [quizzes, setQuizzes] = useState<QuizRow[]>(initialQuizzes);

  function handleCreated(state: ActionState) {
    if (state.error) {
      toast.error(state.error);
      return;
    }
    if (state.success) toast.success(state.success);
    if (state.quiz) {
      setQuizzes((prev) => [state.quiz as QuizRow, ...prev]);
    }
  }

  return (
    <>
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-light fw-semibold">Create New Quiz</div>
        <div className="card-body">
          <NewQuizForm courseId={courseId} onCreated={handleCreated} />
        </div>
      </div>

      <div className="alert alert-info d-flex justify-content-between align-items-center">
        <div>
          Student access link: <code>/learn/{courseId}/quizzes</code>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-light fw-semibold">Existing Quizzes</div>
        <div className="card-body p-0">
          {quizzes.length === 0 ? (
            <div className="p-3 text-muted">No quizzes yet.</div>
          ) : (
            <ul className="list-group list-group-flush">
              {quizzes.map((q) => (
                <li key={q.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <div className="fw-semibold">{q.title}</div>
                    <div className="small text-muted">Status: {q.status} • Points: {q.totalPoints}</div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link href={`/instructor/courses/${courseId}/quizzes/${q.id}`} className="btn btn-outline-primary btn-sm">
                      Manage
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
