"use client";

import * as React from "react";
import { useFormState, useFormStatus } from "react-dom";
import type { ActionState } from "./actions";
import toast from "react-hot-toast";

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

export default function CategoryForm({
	action,
}: {
	action: (
		state: ActionState | undefined,
		formData: FormData
	) => Promise<ActionState>;
}) {
	const [state, formAction] = useFormState(action, undefined);
	const [name, setName] = React.useState("");

	React.useEffect(() => {
		if (state?.error) {
			toast.error(state.error);
		}
		if (state?.success) {
			toast.success(state.success);
			setName("");
		}
	}, [state?.error, state?.success]);

	return (
		<form action={formAction} className="d-flex flex-wrap gap-2">
			<input
				className="border rounded p-2"
				placeholder="Category name *"
				name="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
				minLength={2}
				maxLength={80}
			/>
			<SubmitButton />
		</form>
	);
}
