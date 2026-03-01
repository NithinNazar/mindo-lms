import React from "react";

type Review = {
	id: number;
	rating: number; // 1..5
	comment: string | null;
	createdAt: string | Date;
	student: { id: string; name: string; avatarUrl: string | null };
};

export default function Reviews({
	averageRating,
	reviewCount,
	reviews,
}: {
	averageRating: number;
	reviewCount: number;
	reviews: Review[];
}) {
	const renderStars = (rating: number) => {
		const full = Math.max(0, Math.min(5, Math.round(rating)));
		return (
			<ul className="list">
				{Array.from({ length: 5 }).map((_, i) => (
					<li key={i}>
						<i
							className={
								i < full ? "ri-star-fill" : "ri-star-line"
							}
						></i>
					</li>
				))}
			</ul>
		);
	};

	const formatDate = (d: string | Date) => {
		try {
			const dt = new Date(d);
			return dt.toLocaleDateString(undefined, {
				year: "numeric",
				month: "short",
				day: "numeric",
			});
		} catch {
			return "";
		}
	};

	return (
		<div className="reviews">
			<h2>
				Reviews{" "}
				<span>
					⭐ <b>{averageRating.toFixed(1)}</b> (
					{reviewCount.toLocaleString()} reviews)
				</span>
			</h2>
			<div className="row justify-content-center g-4">
				{reviews && reviews.length > 0 ? (
					reviews.map((r) => {
						const initial = (r.student?.name || "?")
							.trim()
							.charAt(0)
							.toUpperCase();
						return (
							<div className="col-lg-6 col-md-6" key={r.id}>
								<div className="review-card">
									<div className="title">
										<div className="left">
											{r.student?.avatarUrl ? (
												<h5
													style={{
														backgroundImage: `url(${r.student.avatarUrl})`,
														backgroundSize: "cover",
														color: "transparent",
													}}
												>
													{initial}
												</h5>
											) : (
												<h5>{initial}</h5>
											)}
										</div>
										<div className="right">
											<h3>
												{r.student?.name || "Anonymous"}
												<span
													style={{
														marginLeft: 8,
														fontSize: 12,
														opacity: 0.7,
													}}
												>
													{formatDate(r.createdAt)}
												</span>
											</h3>
											{renderStars(r.rating)}
										</div>
									</div>
									{r.comment ? <p>{r.comment}</p> : null}
								</div>
							</div>
						);
					})
				) : (
					<div className="col-12">
						<p>No reviews yet.</p>
					</div>
				)}
			</div>
		</div>
	);
}
