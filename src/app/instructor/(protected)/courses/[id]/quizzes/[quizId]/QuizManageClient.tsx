"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { addQuestion, publishQuiz, type ActionState } from "../actions";
import toast from "react-hot-toast";

type Option = { id?: number; order: number; text: string; isCorrect?: boolean };
type Question = {
  id: number;
  order: number;
  type: "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | "TRUE_FALSE" | "SHORT_TEXT" | "LONG_TEXT" | "NUMERIC";
  text: string;
  points: number;
  options?: Option[];
};

export default function ManageQuizClient({
  quiz,
}: {
  quiz: {
    id: number;
    title: string;
    status: string;
    totalPoints: number;
    questions: Question[];
  };
}) {
  const [qState, addQuestionAction] = useFormState(addQuestion, undefined as unknown as ActionState | undefined);
  const [pState, publishAction] = useFormState(publishQuiz, undefined as unknown as ActionState | undefined);
  const [localQuiz, setLocalQuiz] = useState(quiz);

  useEffect(() => {
    if (!qState) return;
    if (qState.error) toast.error(qState.error);
    if (qState.success) toast.success(qState.success);
    if (qState.question) {
      setLocalQuiz((prev) => ({
        ...prev,
        totalPoints: typeof qState.totalPoints === "number" ? qState.totalPoints : prev.totalPoints,
        questions: [...prev.questions, qState.question as any],
      }));
    }
  }, [qState]);

  useEffect(() => {
    if (!pState) return;
    if (pState.error) toast.error(pState.error);
    if (pState.success) {
      toast.success(pState.success);
      setLocalQuiz((prev) => ({ ...prev, status: "PUBLISHED" }));
    }
  }, [pState]);

  return (
    <div className="row g-4">
      <div className="col-lg-6">
        <div className="card shadow-sm h-100">
          <div className="card-header bg-light fw-semibold">Add Question</div>
          <div className="card-body">
            <form action={addQuestionAction} className="row g-2">
              <input type="hidden" name="quizId" value={localQuiz.id} />
              <div className="col-4">
                <label className="form-label">Order</label>
                <input name="order" type="number" min={1} className="form-control" defaultValue={localQuiz.questions.length + 1} />
              </div>
              <div className="col-8">
                <label className="form-label">Points</label>
                <input name="points" type="number" min={1} className="form-control" defaultValue={1} />
              </div>
              <div className="col-12">
                <label className="form-label">Type</label>
                <select name="type" className="form-select" defaultValue="SINGLE_CHOICE">
                  <option value="SINGLE_CHOICE">Single Choice</option>
                  <option value="MULTIPLE_CHOICE">Multiple Choice</option>
                  <option value="TRUE_FALSE">True/False</option>
                  <option value="SHORT_TEXT">Short Text</option>
                  <option value="LONG_TEXT">Long Text</option>
                  <option value="NUMERIC">Numeric</option>
                </select>
              </div>
              <div className="col-12">
                <label className="form-label">Question Text</label>
                <textarea name="text" className="form-control" rows={2} required />
              </div>
              <div className="col-12">
                <label className="form-label">Options (JSON)</label>
                <textarea
                  name="options"
                  className="form-control"
                  rows={4}
                  placeholder='[{"text":"A","isCorrect":true},{"text":"B"}]'
                />
                <div className="form-text">Only used for choice/true-false questions.</div>
              </div>

              <div className="col-12 d-flex gap-3 align-items-center">
                <button className="btn btn-outline-primary btn-sm" type="submit">Add</button>
                {qState?.error && <div className="text-danger small">{qState.error}</div>}
                {qState?.success && <div className="text-success small">{qState.success}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="card shadow-sm h-100">
          <div className="card-header d-flex justify-content-between align-items-center bg-light">
            <span className="fw-semibold">Questions</span>
            <form action={publishAction}>
              <input type="hidden" name="quizId" value={localQuiz.id} />
              <button className="btn btn-success btn-sm" type="submit" disabled={localQuiz.status === "PUBLISHED"}>
                {localQuiz.status === "PUBLISHED" ? "Published" : "Publish Quiz"}
              </button>
            </form>
          </div>
          <div className="card-body">
            {localQuiz.questions.length === 0 ? (
              <div className="text-muted">No questions yet.</div>
            ) : (
              <ol className="mb-0 ps-3">
                {localQuiz.questions.map((q) => (
                  <li key={q.id} className="mb-2">
                    <div className="fw-semibold">{q.text} <span className="text-muted">({q.points} pts)</span></div>
                    {q.options && q.options.length > 0 && (
                      <ul className="small mb-0">
                        {q.options.map((o) => (
                          <li key={o.id ?? o.order}>
                            {o.text} {o.isCorrect ? <span className="badge bg-success ms-1">correct</span> : null}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
