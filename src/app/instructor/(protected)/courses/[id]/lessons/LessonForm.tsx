"use client";

import * as React from "react";
import { useFormState } from "react-dom";
import { createLesson, type ActionState } from "./actions";
import toast from "react-hot-toast";

export default function LessonForm({
	courseId,
	sectionId,
}: {
	courseId: number;
	sectionId: number;
}) {
	const [state, formAction] = useFormState(
		createLesson,
		undefined as unknown as ActionState | undefined
	);
	const [uploading, setUploading] = React.useState(false);
	const [videoUrl, setVideoUrl] = React.useState("");

	React.useEffect(() => {
		if (state?.error) toast.error(state.error);
		if (state?.success) toast.success(state.success);
	}, [state?.error, state?.success]);

	async function handleVideoUpload(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		if (!file) return;

		const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
		const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
		if (!cloudName || !preset) {
			toast.error("Cloudinary env vars missing");
			return;
		}

		const tId = toast.loading("Uploading lesson video...");
		try {
			setUploading(true);
			const form = new FormData();
			form.append("file", file);
			form.append("upload_preset", preset);
			const res = await fetch(
				`https://api.cloudinary.com/v1_1/${cloudName}/video/upload`,
				{
					method: "POST",
					body: form,
				}
			);
			const json = (await res.json()) as { secure_url?: string };
			if (!res.ok || !json.secure_url) {
				toast.error("Video upload failed");
				return;
			}
			setVideoUrl(json.secure_url);
			toast.success("Video uploaded");
		} catch {
			toast.error("Upload crashed");
		} finally {
			toast.dismiss(tId);
			setUploading(false);
			e.currentTarget.value = "";
		}
	}

	return (
		<form action={formAction} className="row g-2 align-items-end">
			<input type="hidden" name="courseId" value={courseId} />
			<input type="hidden" name="sectionId" value={sectionId} />

			<div className="col-md-4">
				<label className="form-label">Title</label>
				<input
					name="title"
					className="form-control"
					placeholder="e.g. Course Overview"
					required
					minLength={3}
					maxLength={140}
				/>
			</div>

			<div className="col-md-2">
				<label className="form-label">Type</label>
				<select
					name="type"
					className="form-select"
					defaultValue="video"
				>
					<option value="video">Video</option>
					<option value="text">Text</option>
				</select>
			</div>

			<div className="col-md-3">
				<label className="form-label">Duration (sec)</label>
				<input
					name="duration"
					type="number"
					min="1"
					className="form-control"
					placeholder="e.g. 180"
				/>
			</div>

			<div className="col-md-3">
				<div className="form-check mb-2">
					<input
						id={`preview-${sectionId}`}
						name="isPreview"
						type="checkbox"
						className="form-check-input"
					/>
					<label
						htmlFor={`preview-${sectionId}`}
						className="form-check-label"
					>
						Preview
					</label>
				</div>
			</div>

			<div className="col-12">
				{videoUrl ? (
					<div className="d-flex align-items-center gap-2">
						<a
							href={videoUrl}
							target="__blank"
							rel="noreferrer"
							className="link-primary"
						>
							Preview uploaded video
						</a>
						<button
							type="button"
							className="btn btn-link p-0"
							onClick={() => setVideoUrl("")}
						>
							Change
						</button>
					</div>
				) : (
					<div className="d-flex align-items-center gap-2">
						<input
							type="file"
							accept="video/*"
							onChange={handleVideoUpload}
							disabled={uploading}
							className="form-control"
						/>
						{uploading && (
							<div
								className="spinner-border"
								role="status"
								aria-hidden="true"
							></div>
						)}
					</div>
				)}
				<input type="hidden" name="videoUrl" value={videoUrl} />
			</div>

			<div className="col-12">
				<button
					className="btn btn-outline-primary btn-sm"
					type="submit"
				>
					Add Lesson
				</button>
			</div>
		</form>
	);
}
