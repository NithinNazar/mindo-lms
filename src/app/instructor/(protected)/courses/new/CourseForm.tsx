"use client";

import * as React from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { createCourse } from "./actions";
import toast from "react-hot-toast";
import { updateCourse } from "@/app/instructor/(protected)/courses/[id]/edit/actions";
import SimpleRichTextEditor from "@/components/Common/SimpleRichTextEditor";

type Sub = { id: number; name: string };
export type CategoryWithSubs = { id: number; name: string; SubCategory: Sub[] };

type ActionState = {
	success?: string;
	error?: string;
};

export type InitialCourse = {
	id: number;
	title: string;
	shortDescription: string;
	description: string;
	whatYouWillLearn: string;
	language: string;
	level: string;
	price: string | number; // Prisma Decimal-safe
	isFree: boolean;
	isCertificate: boolean;
	categoryId: number;
	subcategoryId: number;
	thumbnailUrl: string | null;
	promoVideoUrl: string | null;
};

function SubmitButton({
	label,
	pendingLabel,
	className,
}: {
	label: string;
	pendingLabel?: string;
	className?: string;
}) {
	const { pending } = useFormStatus();
	return (
		<button
			className={`default-btn border-0 ${className ?? ""}`.trim()}
			disabled={pending}
		>
			{pending ? pendingLabel ?? "Saving..." : label}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				style={{ marginLeft: 8 }}
			>
				<path
					opacity="0.5"
					d="M5.488 14.114c.349 0 .684.139.931.386.247.247.386.582.386.931s-.139.684-.386.931c-.247.247-.582.386-.931.386-.35 0-.684-.139-.931-.386a1.315 1.315 0 0 1-.386-.931c0-.35.139-.684.386-.931.247-.247.582-.386.931-.386Zm7.902 0c.349 0 .684.139.931.386.247.247.386.582.386.931s-.139.684-.386.931c-.247.247-.582.386-.931.386-.349 0-.684-.139-.931-.386a1.315 1.315 0 0 1-.386-.931c0-.35.139-.684.386-.931.247-.247.582-.386.931-.386Z"
					stroke="white"
					strokeWidth="1.5"
				/>
				<path
					d="M0.878 0.323a.75.75 0 0 0-.838.447.75.75 0 0 0 .436 0l.402-1.147ZM17.04 6.988l.645.133.001-.003-.646-.13Zm-13.126-.108V4.49H2.598v2.39h1.317ZM1.107.404l-.23-.081-.437 1.243.23.081L1.107.404ZM8.506 12.579h4.655v-1.317H8.506v1.317ZM3.256 4.343h10.65V3.026H3.257L3.256 4.343Zm13.139 2.512-.439 2.129 1.291.265.438-2.129-1.29-.265Zm-2.488-2.512c.751 0 1.413.001 1.936.059.258.03.454.069.59.117.141.051.163.088.152.073l1.043-.803a1.01 1.01 0 0 0-.76-.514 8.58 8.58 0 0 0-.88-.184c-.61-.068-1.356-.068-2.085-.068v1.32Zm3.778 2.775c.149-.744.275-1.37.306-1.87.033-.515-.026-1.022-.361-1.458l-1.044.803c.054.071.113.198.091.575-.024.39-.126.911-.282 1.693l1.29.257Z"
					fill="white"
				/>
			</svg>
		</button>
	);
}

export default function CourseForm({
	categories,
	initialData,
}: {
	categories: CategoryWithSubs[];
	initialData?: InitialCourse;
}) {
	const [state, formAction] = (
		useActionState as unknown as <TState, TArgs extends unknown[]>(
			action: (...args: TArgs) => Promise<TState> | TState,
			initialState: TState
		) => [TState, (...args: TArgs) => void, boolean]
	)(
		(initialData ? updateCourse : createCourse) as any,
		undefined as unknown as ActionState | undefined
	);

	const [categoryId, setCategoryId] = React.useState<number | "">(
		initialData?.categoryId ?? ""
	);
	const [subcategoryId, setSubcategoryId] = React.useState<number | "">(
		initialData?.subcategoryId ?? ""
	);
	const [isFree, setIsFree] = React.useState(initialData?.isFree ?? false);
	const [thumbnailUrl, setThumbnailUrl] = React.useState(
		initialData?.thumbnailUrl ?? ""
	);
	const [promoVideoUrl, setPromoVideoUrl] = React.useState(
		initialData?.promoVideoUrl ?? ""
	);
	const [imgUploading, setImgUploading] = React.useState(false);
	const [vidUploading, setVidUploading] = React.useState(false);

	React.useEffect(() => {
		if (state?.error) toast.error(state.error);
		if (state?.success) toast.success(state.success);
	}, [state?.error, state?.success]);

	const subs = React.useMemo(() => {
		if (categoryId === "") return [] as Sub[];
		const cat = categories.find((c) => c.id === Number(categoryId));
		return cat ? cat.SubCategory : [];
	}, [categoryId, categories]);

	// When category changes (by user), pick the first subcategory of that category.
	// Do not override the initial subcategory on first mount.
	const didMountRef = React.useRef(false);
	React.useEffect(() => {
		if (!didMountRef.current) {
			didMountRef.current = true;
			return; // preserve initial subcategory on mount
		}
		if (categoryId === "") {
			setSubcategoryId("");
			return;
		}
		const cat = categories.find((c) => c.id === Number(categoryId));
		const firstSub = cat?.SubCategory?.[0]?.id ?? "";
		setSubcategoryId(firstSub);
	}, [categoryId, categories]);

	async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		if (!file) return;

		const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
		const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
		if (!cloudName || !preset) {
			toast.error("Cloudinary env vars missing");
			return;
		}

		try {
			setImgUploading(true);
			const form = new FormData();
			form.append("file", file);
			form.append("upload_preset", preset);

			const res = await fetch(
				`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
				{
					method: "POST",
					body: form,
				}
			);
			const json = (await res.json()) as {
				secure_url?: string;
				error?: unknown;
			};
			if (!res.ok || !json.secure_url) {
				toast.error("Image upload failed");
				return;
			}
			setThumbnailUrl(json.secure_url);
		} catch {
			toast.error("Image upload crashed. Please try again.");
		} finally {
			setImgUploading(false);
			e.currentTarget.value = "";
		}
	}

	async function handleVideoUpload(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		if (!file) return;

		const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
		const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
		if (!cloudName || !preset) {
			toast.error("Cloudinary env vars missing");
			return;
		}

		try {
			setVidUploading(true);
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
			const json = (await res.json()) as {
				secure_url?: string;
				error?: unknown;
			};
			if (!res.ok || !json.secure_url) {
				toast.error("Video upload failed");
				return;
			}
			setPromoVideoUrl(json.secure_url);
		} catch {
			toast.error("Video upload crashed. Please try again.");
		} finally {
			setVidUploading(false);
			e.currentTarget.value = "";
		}
	}

	return (
		<>
			{/* Fallback alerts ... */}
			{state?.error && (
				<div className="alert alert-danger">{state.error}</div>
			)}
			{state?.success && (
				<div className="alert alert-success">{state.success}</div>
			)}
			<form action={formAction} className="d-flex flex-column gap-4">
				{initialData && (
					<input type="hidden" name="id" value={initialData.id} />
				)}
				{/* Basic Info */}
				<div className="card shadow-sm p-4">
					<h5 className="mb-3">Basic Information</h5>
					<div className="row g-3">
						<div className="col-md-6 col-lg-4">
							<label className="form-label">Course title *</label>
							<input
								className="form-control"
								defaultValue={initialData?.title}
								name="title"
								placeholder="e.g. Python for Beginners"
								required
								minLength={3}
								maxLength={120}
							/>
						</div>
						<div className="col-md-6 col-lg-8">
							<label className="form-label">
								Short description *
							</label>
							<input
								defaultValue={initialData?.shortDescription}
								className="form-control"
								name="shortDescription"
								placeholder="A concise marketing subtitle"
								required
								minLength={10}
								maxLength={180}
							/>
							<small className="text-muted">
								Shown on listings and search results (max 180
								chars)
							</small>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className="card shadow-sm p-4">
					<h5 className="mb-3">Course Content</h5>
					<SimpleRichTextEditor
						label="Course description"
						name="description"
						required
						minRows={8}
						placeholder="Describe the course in detail"
						defaultValue={initialData?.description}
					/>

					<SimpleRichTextEditor
						label="What will students learn?"
						name="whatYouWillLearn"
						required
						minRows={6}
						placeholder="List key outcomes (use • List/1. List buttons for visual formatting)"
						defaultValue={initialData?.whatYouWillLearn}
					/>
				</div>

				{/* Meta */}
				<div className="card shadow-sm p-4">
					<h5 className="mb-3">Meta</h5>
					<div className="row g-3">
						<div className="col-md-4">
							<label className="form-label">Language *</label>
							<select
								className="form-select"
								name="language"
								required
								defaultValue={initialData?.language}
							>
								<option value="" disabled>
									Select language
								</option>
								<option value="en">English</option>
								<option value="bn">Bangla</option>
								<option value="es">Spanish</option>
								<option value="de">German</option>
							</select>
						</div>
						<div className="col-md-4">
							<label className="form-label">Level *</label>
							<select
								className="form-select"
								name="level"
								required
								defaultValue={initialData?.level}
							>
								<option value="" disabled>
									Select level
								</option>
								<option value="BEGINNER">Beginner</option>
								<option value="INTERMEDIATE">
									Intermediate
								</option>
								<option value="EXPERT">Expert</option>
								<option value="ALL_LEVELS">All Levels</option>
							</select>
						</div>
						<div className="col-md-4 d-flex align-items-center">
							<div className="form-check mt-4">
								<input
									id="isFree"
									className="form-check-input"
									type="checkbox"
									name="isFree"
									checked={isFree}
									onChange={(e) =>
										setIsFree(e.target.checked)
									}
								/>
								<label
									htmlFor="isFree"
									className="form-check-label ms-2"
								>
									Free course
								</label>
							</div>
						</div>
					</div>
				</div>

				{/* Pricing & Certificate */}
				<div className="card shadow-sm p-4">
					<h5 className="mb-3">Pricing & Certification</h5>
					<div className="row g-3">
						<div className="col-md-6">
							<label className="form-label">
								Price (required if not free)
							</label>
							<input
								defaultValue={
									initialData && !initialData.isFree
										? String(initialData.price)
										: undefined
								}
								className="form-control"
								name="price"
								type="number"
								step="0.01"
								min="0"
								placeholder="0.00"
								disabled={isFree}
							/>
						</div>
						<div className="col-md-6 d-flex align-items-center">
							<div className="form-check mt-4">
								<input
									className="form-check-input"
									type="checkbox"
									name="isCertificate"
									id="isCertificate"
									defaultChecked={
										initialData?.isCertificate ?? false
									}
								/>
								<label
									htmlFor="isCertificate"
									className="form-check-label ms-2"
								>
									Certificate included
								</label>
							</div>
						</div>
					</div>
				</div>

				{/* Taxonomy */}
				<div className="card shadow-sm p-4">
					<h5 className="mb-3">Category</h5>
					<div className="row g-3">
						<div className="col-md-6">
							<label className="form-label">Category *</label>
							<select
								className="form-select"
								name="categoryId"
								required
								value={categoryId}
								onChange={(e) =>
									setCategoryId(
										e.target.value === ""
											? ""
											: Number(e.target.value)
									)
								}
							>
								<option value="">Select category</option>
								{categories.map((c) => (
									<option key={c.id} value={c.id}>
										{c.name}
									</option>
								))}
							</select>
						</div>
						<div className="col-md-6">
							<label className="form-label">Subcategory *</label>
							<select
								className="form-select"
								name="subcategoryId"
								required
								value={subcategoryId}
								onChange={(e) =>
									setSubcategoryId(
										e.target.value === ""
											? ""
											: Number(e.target.value)
									)
								}
							>
								<option value="">Select subcategory</option>
								{subs.map((s) => (
									<option key={s.id} value={s.id}>
										{s.name}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				{/* Media */}
				<div className="card shadow-sm p-4">
					<h5 className="mb-3">Media</h5>
					<div className="row g-3">
						<div className="col-md-6">
							<label className="form-label">
								Course thumbnail *
							</label>
							{thumbnailUrl ? (
								<div className="d-flex align-items-center gap-3">
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src={thumbnailUrl}
										alt="thumbnail"
										className="rounded border"
										style={{
											height: 80,
											width: 80,
											objectFit: "cover",
										}}
									/>
									<button
										type="button"
										className="btn btn-link p-0"
										onClick={() => setThumbnailUrl("")}
									>
										Change
									</button>
								</div>
							) : (
								<div className="d-flex align-items-center gap-3">
									<input
										type="file"
										accept="image/*"
										onChange={handleImageUpload}
										required
										disabled={imgUploading}
										className="form-control"
									/>
									<small className="text-muted">
										JPG/PNG, up to 2MB
									</small>
									{imgUploading && (
										<div
											className="spinner-border"
											role="status"
											aria-hidden="true"
										></div>
									)}
								</div>
							)}
							<input
								type="hidden"
								name="thumbnailUrl"
								value={thumbnailUrl}
							/>
						</div>

						<div className="col-md-6">
							<label className="form-label">
								Promo video (Cloudinary) *
							</label>
							{promoVideoUrl ? (
								<div className="d-flex align-items-center gap-3">
									<a
										href={promoVideoUrl}
										target="_blank"
										rel="noreferrer"
										className="link-primary text-truncate"
										style={{ maxWidth: 260 }}
									>
										Preview video
									</a>
									<button
										type="button"
										className="btn btn-link p-0"
										onClick={() => setPromoVideoUrl("")}
									>
										Change
									</button>
								</div>
							) : (
								<div className="d-flex align-items-center gap-3">
									<input
										type="file"
										accept="video/*"
										onChange={handleVideoUpload}
										required
										disabled={vidUploading}
										className="form-control"
									/>
									<small className="text-muted">
										MP4/WebM recommended
									</small>
									{vidUploading && (
										<div
											className="spinner-border"
											role="status"
											aria-hidden="true"
										></div>
									)}
								</div>
							)}
							<input
								type="hidden"
								name="promoVideoUrl"
								value={promoVideoUrl}
							/>
						</div>
					</div>
				</div>

				<div className="d-flex justify-content-end">
					<SubmitButton
						label={initialData ? "Save Changes" : "Create Course"}
						pendingLabel={initialData ? "Saving..." : "Creating..."}
					/>
				</div>
			</form>
		</>
	);
}
