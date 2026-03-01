"use client";

import { useFormState } from "react-dom";
import { createSection, type ActionState } from "./actions";
import toast from "react-hot-toast";

export default function SectionForm({ courseId }: { courseId: number }) {
	const [state, formAction] = useFormState(
		createSection,
		undefined as unknown as ActionState | undefined
	);

	if (state?.error) toast.error(state.error);
	if (state?.success) toast.success(state.success);

	return (
		<form action={formAction} className="d-flex flex-column gap-2">
			<input type="hidden" name="courseId" value={courseId} />
			<label className="form-label">Section title</label>
			<input
				name="title"
				className="form-control"
				placeholder="e.g. Introduction"
				required
				minLength={3}
				maxLength={120}
			/>
			<button className="btn btn-primary btn-sm mt-2" type="submit">
				Add Section
			</button>
		</form>
	);
}
