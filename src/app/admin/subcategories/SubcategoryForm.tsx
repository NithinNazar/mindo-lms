"use client";

import * as React from "react";
import { useFormState, useFormStatus } from "react-dom";
import type { ActionState } from "./actions";

type Category = { id: number; name: string };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-black text-white rounded px-4 py-2 w-fit"
      disabled={pending}
    >
      {pending ? "Creating..." : "Create"}
    </button>
  );
}

export default function SubcategoryForm({
  categories,
  action,
}: {
  categories: Category[];
  action: (
    state: ActionState | undefined,
    formData: FormData
  ) => Promise<ActionState>;
}) {
  const [state, formAction] = useFormState(action, undefined);
  const [name, setName] = React.useState("");
  const [categoryId, setCategoryId] = React.useState("");

  React.useEffect(() => {
    if (state?.success) {
      setName("");
      setCategoryId("");
    }
  }, [state?.success]);

  return (
    <form action={formAction} className="d-flex flex-wrap gap-2">
      <select
        className="border rounded p-2"
        name="categoryId"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        required
      >
        <option value="">Select parent category *</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <input
        className="border rounded p-2"
        placeholder="SubCategory name *"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        minLength={2}
        maxLength={80}
      />
      {state?.error && <p className="text-red-600 text-sm">{state.error}</p>}
      {state?.success && (
        <p className="text-green-600 text-sm">{state.success}</p>
      )}
      <SubmitButton />
    </form>
  );
}
