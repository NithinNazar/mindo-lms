"use client";

import { useFormState, useFormStatus } from "react-dom";
import type { ActionState } from "./actions";
import { deleteLesson } from "./actions";

const initialState: ActionState = {};

type Props = {
  courseId: number;
  lessonId: number;
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-sm btn-outline-danger"
      disabled={pending}
    >
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}

export default function DeleteLessonButton({ courseId, lessonId }: Props) {
  const [state, formAction] = useFormState(deleteLesson, initialState);

  return (
    <div className="text-end">
      <form action={formAction} className="d-inline">
        <input type="hidden" name="courseId" value={courseId} />
        <input type="hidden" name="lessonId" value={lessonId} />
        <SubmitButton />
      </form>
      {state?.error ? (
        <div className="small text-danger mt-1">{state.error}</div>
      ) : null}
      {state?.success ? (
        <div className="small text-success mt-1">{state.success}</div>
      ) : null}
    </div>
  );
}
