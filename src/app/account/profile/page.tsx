"use client";

import { useEffect, useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-hot-toast";

function getErrorMessage(err: unknown): string {
	if (err instanceof Error) return err.message;
	try {
		return typeof err === "string" ? err : JSON.stringify(err);
	} catch {
		return String(err);
	}
}

type Profile = {
	name?: string;
	position?: string | null;
	experience?: number | null;
	languages?: string[] | null;
	description?: string | null;
	avatarUrl?: string | null;
	institute?: string | null;
	email?: string | null;
};

export default function ProfilePage() {
	const { status } = useSession();
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const [saving, setSaving] = useState(false);
	const [uploading, setUploading] = useState(false);
	const [profile, setProfile] = useState<Profile>({});
	const [languagesText, setLanguagesText] = useState("");

	useEffect(() => {
		if (status === "unauthenticated") {
			toast.error("Please log in to edit your profile");
			router.push("/login");
		}
	}, [status, router]);

	useEffect(() => {
		async function load() {
			try {
				const res = await fetch("/api/user/profile", {
					cache: "no-store",
				});
				if (!res.ok) throw new Error("Failed to load profile");
				const json = await res.json();
				const p: Profile = json?.data || {};
				setProfile(p);
				setLanguagesText(
					Array.isArray(p.languages) ? p.languages.join(", ") : ""
				);
			} catch (e: unknown) {
				toast.error(`Failed to load profile: ${getErrorMessage(e)}`);
			} finally {
				setLoading(false);
			}
		}
		if (status === "authenticated") load();
	}, [status]);

	const previewAvatar = useMemo(
		() => profile.avatarUrl || "/images/courses/user1.png",
		[profile.avatarUrl]
	);

	async function uploadAvatar(file: File) {
		try {
			setUploading(true);
			const sigRes = await fetch("/api/uploads/cloudinary-signature", {
				cache: "no-store",
			});
			if (!sigRes.ok) throw new Error("Failed to get upload signature");
			const { cloudName, apiKey, timestamp, signature, folder } =
				await sigRes.json();

			const form = new FormData();
			form.append("file", file);
			form.append("api_key", apiKey);
			form.append("timestamp", String(timestamp));
			form.append("signature", signature);
			form.append("folder", folder);

			const uploadRes = await fetch(
				`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
				{
					method: "POST",
					body: form,
				}
			);
			const json = await uploadRes.json();
			if (!uploadRes.ok)
				throw new Error(json?.error?.message || "Upload failed");
			setProfile((p) => ({
				...p,
				avatarUrl: json.secure_url || json.url,
			}));
			toast.success("Avatar uploaded");
		} catch (e: unknown) {
			toast.error(`Avatar upload failed: ${getErrorMessage(e)}`);
		} finally {
			setUploading(false);
		}
	}

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setSaving(true);
		try {
			const payload = {
				name: profile.name,
				position: profile.position,
				experience: profile.experience ?? undefined,
				languages: languagesText,
				description: profile.description,
				avatarUrl: profile.avatarUrl,
				institute: profile.institute,
			};
			const updatePromise = (async () => {
				const res = await fetch("/api/user/profile", {
					method: "PATCH",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(payload),
				});
				if (res.ok) return;
				let message = "Failed to update profile";
				try {
					const json = await res.json();
					const candidate =
						typeof json?.message === "string" && json.message.trim().length
							? json.message
							: typeof json?.error === "string" && json.error.trim().length
							? json.error
							: null;
					message = candidate ?? message;
				} catch (err) {
					console.error("Failed to parse profile update error", err);
				}
				throw new Error(message);
			})();
			await toast.promise(updatePromise, {
				loading: "Updating profile...",
				success: "Profile updated",
				error: (err) => `Failed to update profile: ${getErrorMessage(err)}`,
			});
		} catch (err) {
			console.error("Failed to update profile", err);
		} finally {
			setSaving(false);
		}
	}

	if (loading) {
		return (
			<div className="course-details-area ptb-140">
				<div className="container">
					<p>Loading...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="course-details-area">
			<div className="container">
				<h3 className="mb-4">Edit Profile</h3>

				<form onSubmit={onSubmit} className="row g-4">
					<div className="col-lg-3 col-md-4">
						<div>
							<Image
								src={previewAvatar}
								alt="avatar"
								width={180}
								height={180}
								style={{
									borderRadius: 8,
									objectFit: "cover",
									marginBottom: 15,
								}}
							/>
							<input
								type="url"
								placeholder="Avatar URL"
								className="form-control"
								value={profile.avatarUrl ?? ""}
								onChange={(e) =>
									setProfile((p) => ({
										...p,
										avatarUrl: e.target.value,
									}))
								}
								style={{ marginBottom: 15 }}
							/>
							<div>
								<label
									className="form-label"
									style={{ display: "block" }}
								>
									Upload Avatar
								</label>
								<input
									type="file"
									accept="image/*"
									onChange={(e) => {
										const f = e.target.files?.[0];
										if (f) uploadAvatar(f);
									}}
									disabled={uploading}
								/>
								{uploading && (
									<p style={{ marginTop: 8 }}>Uploading...</p>
								)}
							</div>
						</div>
					</div>

					<div className="col-lg-9 col-md-8">
						<div className="row g-3">
							<div className="col-md-6">
								<label className="form-label">Name</label>
								<input
									type="text"
									className="form-control"
									value={profile.name ?? ""}
									onChange={(e) =>
										setProfile((p) => ({
											...p,
											name: e.target.value,
										}))
									}
									required
								/>
							</div>
							<div className="col-md-6">
								<label className="form-label">Position</label>
								<input
									type="text"
									className="form-control"
									value={profile.position ?? ""}
									onChange={(e) =>
										setProfile((p) => ({
											...p,
											position: e.target.value,
										}))
									}
								/>
							</div>
							<div className="col-md-6">
								<label className="form-label">
									Experience (years)
								</label>
								<input
									type="number"
									min={0}
									className="form-control"
									value={profile.experience ?? 0}
									onChange={(e) =>
										setProfile((p) => ({
											...p,
											experience: Number(e.target.value),
										}))
									}
								/>
							</div>
							<div className="col-md-6">
								<label className="form-label">Institute</label>
								<input
									type="text"
									className="form-control"
									value={profile.institute ?? ""}
									onChange={(e) =>
										setProfile((p) => ({
											...p,
											institute: e.target.value,
										}))
									}
								/>
							</div>
							<div className="col-12">
								<label className="form-label">
									Languages (comma separated)
								</label>
								<input
									type="text"
									className="form-control"
									value={languagesText}
									onChange={(e) =>
										setLanguagesText(e.target.value)
									}
									placeholder="e.g. English, Spanish, French"
								/>
							</div>
							<div className="col-12">
								<label className="form-label">
									Description
								</label>
								<textarea
									className="form-control"
									rows={5}
									value={profile.description ?? ""}
									onChange={(e) =>
										setProfile((p) => ({
											...p,
											description: e.target.value,
										}))
									}
								/>
							</div>
							<div className="col-12">
								<button
									type="submit"
									className="default-btn border-0"
									disabled={saving}
								>
									{saving ? "Saving..." : "Save Changes"}
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
