"use client";

import {
	useEffect,
	useId,
	useRef,
	useState,
	useActionState,
	type ChangeEvent,
} from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import type { ActionResult } from "./actions";
import { uploadUnsignedImage } from "@/lib/cloudinary/upload";
import Image from "next/image";

type FeedbackRecord = {
	id: number;
	name: string;
	role: string;
	message: string;
	rating: number;
	imageUrl: string | null;
	isPublished: boolean;
	displayOrder: number | null;
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

export default function FeedbackEditCard({
	feedback,
	updateAction,
	deleteAction,
}: {
	feedback: FeedbackRecord;
	updateAction: (
		state: ActionResult | undefined,
		formData: FormData
	) => Promise<ActionResult>;
	deleteAction: (
		state: ActionResult | undefined,
		formData: FormData
	) => Promise<ActionResult>;
}) {
	const formId = useId().replace(/[:]/g, "");
	const [updateState, updateFormAction] = useActionState<
		ActionResult | undefined,
		FormData
	>(updateAction, undefined);
	const [deleteState, deleteFormAction] = useActionState<
		ActionResult | undefined,
		FormData
	>(deleteAction, undefined);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const imageInputRef = useRef<HTMLInputElement>(null);
	const [uploading, setUploading] = useState(false);
	const [previewUrl, setPreviewUrl] = useState(feedback.imageUrl ?? "");

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

	useEffect(() => {
		const nextUrl = feedback.imageUrl ?? "";
		setPreviewUrl(nextUrl);
		if (imageInputRef.current) {
			imageInputRef.current.value = nextUrl;
		}
	}, [feedback.imageUrl]);

	async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];
		if (!file) {
			return;
		}

		setUploading(true);
		try {
			const url = await uploadUnsignedImage(file, {
				folder: process.env.NEXT_PUBLIC_CLOUDINARY_FEEDBACK_FOLDER,
			});
			if (imageInputRef.current) {
				imageInputRef.current.value = url;
			}
			setPreviewUrl(url);
			toast.success("Image uploaded");
		} catch (error) {
			const message =
				error instanceof Error
					? error.message
					: "Failed to upload image";
			toast.error(message);
		} finally {
			setUploading(false);
			event.target.value = "";
		}
	}

	function handleManualImageChange(event: ChangeEvent<HTMLInputElement>) {
		setPreviewUrl(event.target.value);
	}

	function handleUploadClick() {
		fileInputRef.current?.click();
	}

	const createdLabel = new Date(feedback.createdAt).toLocaleString();
	const updatedLabel = new Date(feedback.updatedAt).toLocaleString();

	return (
		<div className="border rounded p-3 d-flex flex-column gap-3">
			<div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
				<div>
					<h6 className="mb-1">
						#{feedback.id} · {feedback.name}
					</h6>
					<div className="text-muted small">{feedback.role}</div>
				</div>
				<span
					className={`badge ${
						feedback.isPublished ? "bg-success" : "bg-secondary"
					}`}
				>
					{feedback.isPublished ? "Published" : "Hidden"}
				</span>
			</div>

			<form
				action={updateFormAction}
				className="d-flex flex-column gap-3"
				id={`update-feedback-${formId}`}
			>
				<input type="hidden" name="id" value={feedback.id} />
				<div className="row g-3">
					<div className="col-md-6">
						<label
							className="form-label"
							htmlFor={`name-${formId}`}
						>
							Name
						</label>
						<input
							id={`name-${formId}`}
							className="form-control"
							name="name"
							defaultValue={feedback.name}
							minLength={2}
							maxLength={120}
							required
						/>
					</div>
					<div className="col-md-6">
						<label
							className="form-label"
							htmlFor={`role-${formId}`}
						>
							Role
						</label>
						<input
							id={`role-${formId}`}
							className="form-control"
							name="role"
							defaultValue={feedback.role}
							minLength={2}
							maxLength={120}
							required
						/>
					</div>
					<div className="col-12">
						<label
							className="form-label"
							htmlFor={`message-${formId}`}
						>
							Message
						</label>
						<textarea
							id={`message-${formId}`}
							className="form-control"
							name="message"
							rows={3}
							defaultValue={feedback.message}
							minLength={10}
							maxLength={2000}
							required
						/>
					</div>
					<div className="col-md-4">
						<label
							className="form-label"
							htmlFor={`rating-${formId}`}
						>
							Rating (1-5)
						</label>
						<input
							id={`rating-${formId}`}
							className="form-control"
							name="rating"
							type="number"
							min={1}
							max={5}
							defaultValue={feedback.rating}
							required
						/>
					</div>
					<div className="col-md-4">
						<label
							className="form-label"
							htmlFor={`image-${formId}`}
						>
							Image URL
						</label>
						<input
							id={`image-${formId}`}
							className="form-control"
							name="imageUrl"
							defaultValue={feedback.imageUrl ?? ""}
							maxLength={2048}
							ref={imageInputRef}
							onChange={handleManualImageChange}
						/>
						<div className="d-flex align-items-center gap-2 mt-2">
							<button
								type="button"
								className="btn btn-outline-secondary btn-sm"
								onClick={handleUploadClick}
								disabled={uploading}
							>
								{uploading ? "Uploading..." : "Upload image"}
							</button>
							{previewUrl ? (
								<a
									href={previewUrl}
									target="_blank"
									rel="noreferrer"
									className="small"
								>
									View
								</a>
							) : null}
						</div>
						{previewUrl ? (
							<Image
								src={previewUrl}
								alt="Feedback preview"
								width={600}
								height={400}
								sizes="(max-width: 768px) 100vw, 600px"
								className="mt-2 rounded border w-100 h-auto"
								unoptimized
							/>
						) : null}
					</div>
					<div className="col-md-4">
						<label
							className="form-label"
							htmlFor={`order-${formId}`}
						>
							Display Order
						</label>
						<input
							id={`order-${formId}`}
							className="form-control"
							name="displayOrder"
							type="number"
							min={0}
							defaultValue={feedback.displayOrder ?? ""}
						/>
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
								defaultChecked={feedback.isPublished}
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
				<input
					ref={fileInputRef}
					type="file"
					accept="image/*"
					className="d-none"
					onChange={handleFileChange}
				/>
				<div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
					<div className="text-muted small">
						<div>Updated: {updatedLabel}</div>
						<div>Created: {createdLabel}</div>
					</div>
					<SubmitButton label="Save" />
				</div>
			</form>
			<div className="d-flex justify-content-end">
				<form action={deleteFormAction} className="m-0">
					<input type="hidden" name="id" value={feedback.id} />
					<DeleteButton />
				</form>
			</div>
		</div>
	);
}
