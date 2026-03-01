"use client";

import { useEffect, useRef, useActionState } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import type { AnnouncementActionResult } from "./actions";

function SubmitButton({ label }: { label: string }) {
	const { pending } = useFormStatus();
	return (
		<button type="submit" className="btn btn-dark" disabled={pending}>
			{pending ? `${label}...` : label}
		</button>
	);
}

export default function AnnouncementCreateForm({
	action,
}: {
	action: (
		state: AnnouncementActionResult | undefined,
		formData: FormData
	) => Promise<AnnouncementActionResult>;
}) {
	const [state, formAction] = useActionState<
		AnnouncementActionResult | undefined,
		FormData
	>(action, undefined);
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (state?.error) {
			toast.error(state.error);
		}
		if (state?.success) {
			toast.success(state.success);
			formRef.current?.reset();
		}
	}, [state?.error, state?.success]);

	return (
		<form
			ref={formRef}
			action={formAction}
			className="d-flex flex-column gap-3"
		>
			<div className="row g-3">
				<div className="col-12">
					<label className="form-label">Label *</label>
					<input
						className="form-control"
						name="label"
						placeholder="Limited-Time Offer: Get"
						minLength={3}
						maxLength={160}
						required
					/>
				</div>
				<div className="col-12">
					<label className="form-label">Highlighted Text</label>
					<input
						className="form-control"
						name="highlight"
						placeholder="50% Off"
						maxLength={120}
					/>
				</div>
				<div className="col-12">
					<label className="form-label">Link URL</label>
					<input
						className="form-control"
						name="linkUrl"
						placeholder="/courses"
						maxLength={2048}
					/>
					<small className="text-muted">
						Use a relative path like /courses or an absolute URL
						(https://...).
					</small>
				</div>
				<div className="col-12">
					<input type="hidden" name="isPublished" value="false" />
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							id="announcement-published"
							name="isPublished"
							value="true"
							defaultChecked
						/>
						<label
							className="form-check-label"
							htmlFor="announcement-published"
						>
							Published
						</label>
					</div>
				</div>
			</div>

			<div className="d-flex justify-content-end">
				<SubmitButton label="Create" />
			</div>
		</form>
	);
}
