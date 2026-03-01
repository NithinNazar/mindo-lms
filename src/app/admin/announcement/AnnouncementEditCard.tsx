"use client";

import { useEffect, useId, useActionState } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import type { AnnouncementActionResult } from "./actions";

type AnnouncementRecord = {
	id: number;
	label: string;
	highlight: string | null;
	linkUrl: string | null;
	isPublished: boolean;
	createdAt: string;
	updatedAt: string;
};

function SubmitButton({ label }: { label: string }) {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="btn btn-dark btn-sm"
			disabled={pending}
		>
			{pending ? `${label}...` : label}
		</button>
	);
}

function DeleteButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="btn btn-outline-danger btn-sm"
			disabled={pending}
		>
			{pending ? "Removing..." : "Delete"}
		</button>
	);
}

export default function AnnouncementEditCard({
	announcement,
	updateAction,
	deleteAction,
}: {
	announcement: AnnouncementRecord;
	updateAction: (
		state: AnnouncementActionResult | undefined,
		formData: FormData
	) => Promise<AnnouncementActionResult>;
	deleteAction: (
		state: AnnouncementActionResult | undefined,
		formData: FormData
	) => Promise<AnnouncementActionResult>;
}) {
	const formId = useId().replace(/[:]/g, "");
	const [updateState, updateFormAction] = useActionState<
		AnnouncementActionResult | undefined,
		FormData
	>(updateAction, undefined);
	const [deleteState, deleteFormAction] = useActionState<
		AnnouncementActionResult | undefined,
		FormData
	>(deleteAction, undefined);

	useEffect(() => {
		if (updateState?.error) {
			toast.error(updateState.error);
		}
		if (updateState?.success) {
			toast.success(updateState.success);
		}
	}, [updateState?.error, updateState?.success]);

	useEffect(() => {
		if (deleteState?.error) {
			toast.error(deleteState.error);
		}
		if (deleteState?.success) {
			toast.success(deleteState.success);
		}
	}, [deleteState?.error, deleteState?.success]);

	const createdLabel = new Date(announcement.createdAt).toLocaleString();
	const updatedLabel = new Date(announcement.updatedAt).toLocaleString();

	return (
		<div className="border rounded p-3 d-flex flex-column gap-3">
			<div className="d-flex justify-content-between align-items-start gap-2 flex-wrap">
				<div>
					<h6 className="mb-1">#{announcement.id} · Banner</h6>
					<div className="text-muted small">
						Created {createdLabel}
					</div>
				</div>
				<span
					className={`badge ${
						announcement.isPublished ? "bg-success" : "bg-secondary"
					}`}
				>
					{announcement.isPublished ? "Published" : "Hidden"}
				</span>
			</div>

			<form
				action={updateFormAction}
				className="d-flex flex-column gap-3"
				id={`announcement-form-${formId}`}
			>
				<input type="hidden" name="id" value={announcement.id} />
				<div className="row g-3">
					<div className="col-12">
						<label
							className="form-label"
							htmlFor={`label-${formId}`}
						>
							Label
						</label>
						<input
							id={`label-${formId}`}
							className="form-control"
							name="label"
							defaultValue={announcement.label}
							minLength={3}
							maxLength={160}
							required
						/>
					</div>
					<div className="col-12">
						<label
							className="form-label"
							htmlFor={`highlight-${formId}`}
						>
							Highlighted Text
						</label>
						<input
							id={`highlight-${formId}`}
							className="form-control"
							name="highlight"
							defaultValue={announcement.highlight ?? ""}
							maxLength={120}
						/>
					</div>
					<div className="col-12">
						<label
							className="form-label"
							htmlFor={`link-${formId}`}
						>
							Link URL
						</label>
						<input
							id={`link-${formId}`}
							className="form-control"
							name="linkUrl"
							defaultValue={announcement.linkUrl ?? ""}
							maxLength={2048}
							placeholder="/courses"
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
								id={`published-${formId}`}
								name="isPublished"
								value="true"
								defaultChecked={announcement.isPublished}
							/>
							<label
								className="form-check-label"
								htmlFor={`published-${formId}`}
							>
								Published
							</label>
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
					<div className="text-muted small">
						Updated {updatedLabel}
					</div>
					<SubmitButton label="Save" />
				</div>
			</form>

			<div className="d-flex justify-content-end">
				<form action={deleteFormAction} className="m-0">
					<input type="hidden" name="id" value={announcement.id} />
					<DeleteButton />
				</form>
			</div>
		</div>
	);
}
