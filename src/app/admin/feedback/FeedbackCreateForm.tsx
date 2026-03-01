"use client";

import {
	useEffect,
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

function SubmitButton({ label }: { label: string }) {
	const { pending } = useFormStatus();
	return (
		<button type="submit" className="btn btn-dark" disabled={pending}>
			{pending ? `${label}...` : label}
		</button>
	);
}

export default function FeedbackCreateForm({
	action,
}: {
	action: (
		state: ActionResult | undefined,
		formData: FormData
	) => Promise<ActionResult>;
}) {
	const [state, formAction] = useActionState<
		ActionResult | undefined,
		FormData
	>(action, undefined);
	const formRef = useRef<HTMLFormElement>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const imageInputRef = useRef<HTMLInputElement>(null);
	const [uploading, setUploading] = useState(false);
	const [previewUrl, setPreviewUrl] = useState<string>("");

	useEffect(() => {
		if (state?.error) {
			toast.error(state.error);
		}
		if (state?.success) {
			toast.success(state.success);
			formRef.current?.reset();
			if (imageInputRef.current) {
				imageInputRef.current.value = "";
			}
			if (fileInputRef.current) {
				fileInputRef.current.value = "";
			}
			setPreviewUrl("");
		}
	}, [state?.error, state?.success]);

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

	return (
		<form
			ref={formRef}
			action={formAction}
			className="d-flex flex-column gap-3"
		>
			<div className="row g-3">
				<div className="col-md-6">
					<label className="form-label">Name *</label>
					<input
						className="form-control"
						name="name"
						placeholder="Jane Doe"
						minLength={2}
						maxLength={120}
						required
					/>
				</div>
				<div className="col-md-6">
					<label className="form-label">Role *</label>
					<input
						className="form-control"
						name="role"
						placeholder="Product Designer"
						minLength={2}
						maxLength={120}
						required
					/>
				</div>
				<div className="col-12">
					<label className="form-label">Feedback Message *</label>
					<textarea
						className="form-control"
						name="message"
						rows={4}
						placeholder="Share the testimonial text"
						minLength={10}
						maxLength={2000}
						required
					/>
				</div>
				<div className="col-md-4">
					<label className="form-label">Rating (1-5) *</label>
					<input
						className="form-control"
						name="rating"
						type="number"
						min={1}
						max={5}
						defaultValue={5}
						required
					/>
				</div>
				<div className="col-md-4">
					<label className="form-label">Image URL</label>
					<input
						className="form-control"
						name="imageUrl"
						placeholder="/images/feedback/sample.jpg"
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
					<label className="form-label">Display Order</label>
					<input
						className="form-control"
						name="displayOrder"
						type="number"
						min={0}
						placeholder="0"
					/>
				</div>
				<div className="col-12">
					<input type="hidden" name="isPublished" value="false" />
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							id="create-feedback-published"
							name="isPublished"
							value="true"
							defaultChecked
						/>
						<label
							className="form-check-label"
							htmlFor="create-feedback-published"
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

			<div className="d-flex justify-content-end">
				<SubmitButton label="Create" />
			</div>
		</form>
	);
}
