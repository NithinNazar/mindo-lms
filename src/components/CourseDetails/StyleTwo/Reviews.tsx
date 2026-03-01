import React from "react";

const Reviews = () => {
	return (
		<>
			<h2>
				Reviews{" "}
				<span>
					⭐ <b>4.9</b> (5,200+ student reviews)
				</span>
			</h2>
			<div className="row justify-content-center g-4">
				<div className="col-lg-6 col-md-6">
					<div className="review-card">
						<div className="title">
							<div className="left">
								<h5>E</h5>
							</div>
							<div className="right">
								<h3>Emily S.</h3>
								<ul className="list">
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
								</ul>
							</div>
						</div>
						<p>
							This course was the perfect starting point for my
							data science journey. Everything was broken down so
							clearly, and I loved the hands-on exercises. Python
							finally makes sense to me, and I feel confident
							tackling real datasets.
						</p>
					</div>
				</div>
				<div className="col-lg-6 col-md-6">
					<div className="review-card">
						<div className="title">
							<div className="left">
								<h5>L</h5>
							</div>
							<div className="right">
								<h3>Lucas M.</h3>
								<ul className="list">
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
								</ul>
							</div>
						</div>
						<p>
							A fantastic course for anyone new to Python. The
							instructor explains concepts in plain English and
							gives practical examples. I especially appreciated
							the mini-project at the end — it helped me apply
							everything I learned in a meaningful way.
						</p>
					</div>
				</div>
				<div className="col-lg-6 col-md-6">
					<div className="review-card">
						<div className="title">
							<div className="left">
								<h5>C</h5>
							</div>
							<div className="right">
								<h3>Chloe M.</h3>
								<ul className="list">
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
								</ul>
							</div>
						</div>
						<p>
							I’ve tried other Python courses before, but this one
							really clicked. The pace was just right, and the
							focus on real-world data science applications made
							all the difference. Highly recommended if you’re
							serious about starting in data.
						</p>
					</div>
				</div>
				<div className="col-lg-6 col-md-6">
					<div className="review-card">
						<div className="title">
							<div className="left">
								<h5>L</h5>
							</div>
							<div className="right">
								<h3>James L.</h3>
								<ul className="list">
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
								</ul>
							</div>
						</div>
						<p>
							This course strikes a great balance between theory
							and practice. From loops and functions to working
							with CSV files and visualizations, it covers
							everything a beginner needs. I’m now using Python in
							my job thanks to this course!
						</p>
					</div>
				</div>
			</div>
			<div className="review-form">
				<h3>Leave a Review</h3>
				<form>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Your name"
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							placeholder="Your email"
						/>
					</div>
					<div className="form-group">
						<select className="form-control form-select">
							<option value="">Select rating</option>
							<option value="5">★★★★★ - Excellent</option>
							<option value="4">★★★★☆ - Very Good</option>
							<option value="3">★★★☆☆ - Good</option>
							<option value="2">★★☆☆☆ - Fair</option>
							<option value="1">★☆☆☆☆ - Poor</option>
						</select>
					</div>
					<div className="form-group">
						<textarea
							className="form-control"
							placeholder="Write your review..."
						></textarea>
					</div>
					<button type="submit" className="default-btn">
						Submit Review
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="14"
							viewBox="0 0 18 14"
							fill="none"
						>
							<path
								opacity="0.5"
								d="M16.25 6.75V7.25H1.25V6.75H16.25Z"
								fill="white"
								stroke="white"
							/>
							<path
								d="M10.75 1L16.75 7L10.75 13"
								stroke="white"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</form>
			</div>
		</>
	);
};

export default Reviews;
