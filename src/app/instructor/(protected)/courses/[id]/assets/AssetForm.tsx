"use client";

import * as React from "react";
import { useFormState } from "react-dom";
import { createResource, type ActionState } from "./actions";
import toast from "react-hot-toast";

export default function AssetForm({ courseId }: { courseId: number }) {
	const [state, formAction] = useFormState(
		createResource,
		undefined as unknown as ActionState | undefined
	);
	const [uploading, setUploading] = React.useState(false);
	const [fileInfo, setFileInfo] = React.useState<{
		url: string;
		name: string;
		size?: number;
		type?: string;
	} | null>(null);

	React.useEffect(() => {
		if (state?.error) toast.error(state.error);
		if (state?.success) toast.success(state.success);
	}, [state?.error, state?.success]);

	async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		if (!file) return;

		const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
		const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
		if (!cloudName || !preset) {
			toast.error("Cloudinary env vars missing");
			return;
		}

		const tId = toast.loading("Uploading file...");
		try {
			setUploading(true);
			const form = new FormData();
			form.append("file", file);
			form.append("upload_preset", preset);
			// Use raw upload for any file type
			const res = await fetch(
				`https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`,
				{
					method: "POST",
					body: form,
				}
			);
			const json = (await res.json()) as {
				secure_url?: string;
				original_filename?: string;
				bytes?: number;
				resource_type?: string;
				format?: string;
			};
			if (!res.ok || !json.secure_url) {
				toast.error("Upload failed");
				return;
			}
			setFileInfo({
				url: json.secure_url,
				name: file.name || json.original_filename || "file",
				size: file.size ?? json.bytes,
				type: file.type || json.resource_type || json.format,
			});
			toast.success("File uploaded");
		} catch {
			toast.error("Upload crashed");
		} finally {
			toast.dismiss(tId);
			setUploading(false);
			e.currentTarget.value = "";
		}
	}

	return (
		<form action={formAction} className="d-flex flex-column gap-3">
			<input type="hidden" name="courseId" value={courseId} />
			<input type="hidden" name="fileUrl" value={fileInfo?.url ?? ""} />
			<input type="hidden" name="fileName" value={fileInfo?.name ?? ""} />
			<input
				type="hidden"
				name="fileSize"
				value={fileInfo?.size?.toString() ?? ""}
			/>
			<input type="hidden" name="fileType" value={fileInfo?.type ?? ""} />

			<div>
				<label className="form-label">Title</label>
				<input
					name="title"
					className="form-control"
					placeholder="e.g. Demo Project ZIP"
					required
					minLength={3}
					maxLength={140}
				/>
			</div>

			<div>
				<label className="form-label">Description (optional)</label>
				<textarea
					name="description"
					className="form-control"
					rows={3}
					placeholder="Short description for students..."
				/>
			</div>

			<div>
				<label className="form-label">Upload file</label>
				{fileInfo ? (
					<div className="d-flex align-items-center gap-2">
						<span className="small">{fileInfo.name}</span>
						<button
							type="button"
							className="btn btn-link p-0"
							onClick={() => setFileInfo(null)}
						>
							Change
						</button>
					</div>
				) : (
					<div className="d-flex align-items-center gap-2">
						<input
							type="file"
							onChange={handleUpload}
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
				<div className="form-text">
					Any file type: ZIP, PDF, images, code, etc.
				</div>
			</div>

			<button
				className="btn btn-primary"
				type="submit"
				disabled={!fileInfo}
			>
				Save Asset
			</button>
		</form>
	);
}
