"use client";

import { useEffect, useRef, useActionState } from "react";
import { createQuiz, type ActionState } from "./actions";
import toast from "react-hot-toast";

export default function NewQuizForm({
	courseId,
	onCreated,
}: {
	courseId: number;
	onCreated?: (s: ActionState) => void;
}) {
	const [state, formAction /*, isPending*/] = useActionState(
		createQuiz,
		undefined as ActionState | undefined
	);
	const formRef = useRef<HTMLFormElement | null>(null);

	useEffect(() => {
		if (!state) return;
		if (state.error) toast.error(state.error);
		if (state.success) toast.success(state.success);
		if (onCreated) onCreated(state);
		if (state.success && formRef.current) formRef.current.reset();
	}, [state, onCreated]);

	return (
		<form ref={formRef} action={formAction} className="row g-3">
			<input type="hidden" name="courseId" value={courseId} />

			<div className="col-md-6">
				<label className="form-label">Title</label>
				<input
					name="title"
					className="form-control"
					minLength={3}
					maxLength={140}
					required
					placeholder="e.g. Final Quiz"
				/>
			</div>

			<div className="col-md-6">
				<label className="form-label">Time Limit (sec)</label>
				<input
					name="timeLimitSec"
					type="number"
					min={1}
					className="form-control"
					placeholder="e.g. 900"
				/>
			</div>

			<div className="col-md-6">
				<label className="form-label">
					Max Attempts (0 = unlimited)
				</label>
				<input
					name="maxAttempts"
					type="number"
					min={0}
					defaultValue={0}
					className="form-control"
				/>
			</div>

			<div className="col-md-6">
				<label className="form-label">Passing Score (%)</label>
				<input
					name="passingScore"
					type="number"
					min={0}
					max={100}
					className="form-control"
					placeholder="e.g. 70"
				/>
			</div>

			<div className="col-12">
				<label className="form-label">Description</label>
				<textarea
					name="description"
					className="form-control"
					rows={3}
					placeholder="Optional description..."
				/>
			</div>

			<div className="col-12 d-flex gap-3 align-items-center">
				<button className="btn btn-primary" type="submit">
					Create Quiz
				</button>
			</div>
		</form>
	);
}
