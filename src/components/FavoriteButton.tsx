"use client";

import { useState, useTransition } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function FavoriteButton({
	courseId,
	initialFavorited = false,
}: {
	courseId: number | string;
	initialFavorited?: boolean;
}) {
	const [isPending, startTransition] = useTransition();
	const [favorited, setFavorited] = useState(initialFavorited);
	const { data: session } = useSession();
	const router = useRouter();

	async function toggleFavorite() {
		startTransition(async () => {
			try {
				const res = await fetch(`/api/courses/${courseId}/favorite`, {
					method: "POST",
				});
				const json = await res.json();
				if (!res.ok) {
					const message =
						typeof json?.error === "string"
							? json.error
							: "Unable to update favorite";
					toast.error(message, { position: "bottom-right" });
					return;
				}
				setFavorited(Boolean(json.favorited));
			} catch (e) {
				console.error("favorite toggle failed", e);
				toast.error("Unable to update favorite", {
					position: "bottom-right",
				});
			}
		});
	}

	return (
		<button
			onClick={(e) => {
				e.preventDefault();
				if (!session?.user?.id) {
					toast.error("Please log in to save favorites");
					router.push("/login");
					return;
				}
				if (!isPending) toggleFavorite();
			}}
			className={`wishlist-btn ${
				favorited ? "active bg-blue-500 text-red-500" : ""
			}`}
			aria-pressed={favorited}
			aria-busy={isPending}
			disabled={isPending}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="25"
				viewBox="0 0 24 25"
				fill="none"
			>
				<path
					d="M12 6.01706C7.5 1.34306 2 4.79206 2 9.65506C2 14.5181 6.02 17.1091 8.962 19.4291C10 20.2461 11 21.0171 12 21.0171"
					stroke={favorited ? "red" : "blue"}
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					opacity="0.5"
					d="M12 6.01706C16.5 1.34306 22 4.79206 22 9.65506C22 14.5181 17.98 17.1091 15.038 19.4291C14 20.2461 13 21.0171 12 21.0171"
					stroke={favorited ? "red" : "blue"}
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		</button>
	);
}
