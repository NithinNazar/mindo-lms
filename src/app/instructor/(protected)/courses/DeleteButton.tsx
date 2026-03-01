"use client";

import { useActionState } from "react";
import { deleteCourse, type ActionState } from "./actions";
import { useState } from "react";

export default function DeleteButton({ id }: { id: number }) {
	const [state, formAction] = (
		useActionState as unknown as <TState, TArgs extends unknown[]>(
			action: (...args: TArgs) => Promise<TState> | TState,
			initialState: TState
		) => [TState, (...args: TArgs) => void, boolean]
	)(deleteCourse as any, undefined as unknown as ActionState | undefined);
	const [showConfirm, setShowConfirm] = useState(false);

	return (
		<>
			{/* Trigger button */}
			<button
				type="button"
				className="btn btn-sm btn-danger"
				onClick={() => setShowConfirm(true)}
			>
				Delete
			</button>

			{/* Confirm dialog as Bootstrap modal */}
			{showConfirm && (
				<>
					<div
						className="modal-backdrop fade show"
						style={{ opacity: 0.5 }}
					></div>
					<div className="modal fade show d-block" tabIndex={-1}>
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content shadow">
								<div className="modal-header">
									<h5 className="modal-title">
										Confirm Deletion
									</h5>
									<button
										type="button"
										className="btn-close"
										onClick={() => setShowConfirm(false)}
									></button>
								</div>
								<div className="modal-body">
									<p>
										Are you sure you want to delete this
										course? <br />
										<strong>
											This action cannot be undone.
										</strong>
									</p>
									{state?.error && (
										<p className="text-danger small mt-2">
											{state.error}
										</p>
									)}
									{state?.success && (
										<p className="text-success small mt-2">
											{state.success}
										</p>
									)}
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										onClick={() => setShowConfirm(false)}
									>
										Cancel
									</button>
									<form action={formAction}>
										<input
											type="hidden"
											name="courseId"
											value={id}
										/>
										<button
											type="submit"
											className="btn btn-danger"
										>
											Confirm Delete
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}
