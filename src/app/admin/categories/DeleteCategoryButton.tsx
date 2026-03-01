"use client";

import { useFormState, useFormStatus } from "react-dom";
import type { ActionState } from "./actions";
import { deleteCategory } from "./actions";

const initialState: ActionState = {};

type Props = {
  categoryId: number;
  disabled?: boolean;
  reason?: string | null;
};

function SubmitButton({ disabled }: { disabled?: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-outline-danger btn-sm"
      disabled={disabled || pending}
    >
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}

export default function DeleteCategoryButton({
  categoryId,
  disabled,
  reason,
}: Props) {
  const [state, formAction] = useFormState(deleteCategory, initialState);

  return (
    <div>
      <form action={formAction} className="d-inline">
        <input type="hidden" name="categoryId" value={categoryId} />
        <SubmitButton disabled={disabled} />
      </form>
      {disabled && reason ? (
        <div className="small text-muted mt-1">{reason}</div>
      ) : null}
      {state?.error ? (
        <div className="small text-danger mt-1">{state.error}</div>
      ) : null}
      {state?.success && !disabled ? (
        <div className="small text-success mt-1">{state.success}</div>
      ) : null}
    </div>
  );
}
