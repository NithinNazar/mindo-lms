import Banner from "@/components/Common/Banner";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
	return (
		<>
			<Banner
				title="How to Stay Motivated While Learning Online"
				crumbs={[
					{ label: "Home", href: "/" },
					{ label: "Blog Details" },
				]}
			/>

			<div className="blog-details-area ptb-140">
				<div className="container">
					<div
						className="row justify-content-center g-4"
						data-cues="slideInUp"
						data-duration="1000"
					>
						<div className="col-xl-8 col-md-12">
							<div className="blog-details-desc">
								<Image
									src="/images/blog/blog17.jpg"
									width={1280}
									height={725}
									alt="image"
								/>
								<div className="content">
									<Link href="/blog" className="tag-btn">
										Learning Tips
									</Link>
									<h3>
										How to Stay Motivated While Learning
										Online
									</h3>
									<ul className="meta">
										<li className="user-btn">
											<Image
												src="/images/user1.jpg"
												width={100}
												height={100}
												alt="image"
											/>
											<Link href="/instructor-details">
												James Patel
											</Link>
										</li>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
											>
												<path
													d="M2 12C2 8.229 2 6.343 3.172 5.172C4.344 4.001 6.229 4 10 4H14C17.771 4 19.657 4 20.828 5.172C21.999 6.344 22 8.229 22 12V14C22 17.771 22 19.657 20.828 20.828C19.656 21.999 17.771 22 14 22H10C6.229 22 4.343 22 3.172 20.828C2.001 19.656 2 17.771 2 14V12Z"
													stroke="#1C43FE"
													stroke-width="1.5"
												/>
												<path
													opacity="0.5"
													d="M7 4V2.5M17 4V2.5M2.5 9H21.5"
													stroke="#1C43FE"
													stroke-width="1.5"
													stroke-linecap="round"
												/>
												<path
													d="M18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C16.7348 18 16.4804 17.8946 16.2929 17.7071C16.1054 17.5196 16 17.2652 16 17C16 16.7348 16.1054 16.4804 16.2929 16.2929C16.4804 16.1054 16.7348 16 17 16C17.2652 16 17.5196 16.1054 17.7071 16.2929C17.8946 16.4804 18 16.7348 18 17ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14C16.7348 14 16.4804 13.8946 16.2929 13.7071C16.1054 13.5196 16 13.2652 16 13C16 12.7348 16.1054 12.4804 16.2929 12.2929C16.4804 12.1054 16.7348 12 17 12C17.2652 12 17.5196 12.1054 17.7071 12.2929C17.8946 12.4804 18 12.7348 18 13ZM13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17ZM13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13ZM8 17C8 17.2652 7.89464 17.5196 7.70711 17.7071C7.51957 17.8946 7.26522 18 7 18C6.73478 18 6.48043 17.8946 6.29289 17.7071C6.10536 17.5196 6 17.2652 6 17C6 16.7348 6.10536 16.4804 6.29289 16.2929C6.48043 16.1054 6.73478 16 7 16C7.26522 16 7.51957 16.1054 7.70711 16.2929C7.89464 16.4804 8 16.7348 8 17ZM8 13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13C6 12.7348 6.10536 12.4804 6.29289 12.2929C6.48043 12.1054 6.73478 12 7 12C7.26522 12 7.51957 12.1054 7.70711 12.2929C7.89464 12.4804 8 12.7348 8 13Z"
													fill="#1C43FE"
												/>
											</svg>
											<span>June 10, 2025</span>
										</li>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
											>
												<path
													opacity="0.5"
													d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
													stroke="#1C43FE"
													stroke-width="1.5"
												/>
												<path
													d="M12 8V12L14.5 14.5"
													stroke="#1C43FE"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span>4 min read</span>
										</li>
									</ul>
								</div>
								<div className="items">
									<div className="item">
										<h3>Introduction</h3>
										<p>
											Online learning offers flexibility,
											access to world-className educators,
											and the ability to learn at your own
											pace — but staying motivated can be
											a real challenge. Whether you’re
											balancing a job, school, or
											parenting duties, it's easy to feel
											overwhelmed or distracted.
										</p>
										<p>
											Here are practical strategies to
											help you stay focused, consistent,
											and inspired as an online learner.
										</p>
									</div>
									<div className="item">
										<h3>1. Set Clear Goals</h3>
										<p>
											Break your long-term objective into
											small, manageable goals. Instead of
											saying “I want to learn Python,” aim
											for “I’ll complete Module 1 by
											Friday.” Clear goals help track
											progress and keep your learning
											purposeful.
										</p>
									</div>
									<div className="item">
										<h3>
											2. Create a Consistent Learning
											Schedule
										</h3>
										<p>
											Treat your course like a real
											classNameroom. Designate specific
											days and times to study and block
											distractions during that time. A
											routine builds discipline and builds
											momentum over time.
										</p>
									</div>
									<div className="item">
										<h3>3. Choose the Right Environment</h3>
										<p>
											Your study space should be quiet,
											clutter-free, and dedicated to
											learning. Whether it’s a cozy corner
											at home or a local library, the
											right environment makes it easier to
											focus.
										</p>
									</div>
									<div className="item">
										<h3>
											4. Engage with the Learning
											Community
										</h3>
										<p>
											Join discussion forums, attend live
											sessions, or comment on lessons.
											Interaction boosts accountability
											and makes learning feel more social
											— especially helpful if you're
											learning solo.
										</p>
									</div>
									<div className="item">
										<h3>5. Celebrate Small Wins</h3>
										<p>
											Finished a module? Solved a tricky
											problem? Celebrate it! Rewarding
											yourself after hitting a milestone
											reinforces motivation and encourages
											consistency.
										</p>
									</div>
									<div className="item">
										<div className="row justify-content-center g-4">
											<div className="col-lg-6 col-md-6">
												<Image
													src="/images/blog/blog20.jpg"
													width={832}
													height={832}
													alt="image"
												/>
											</div>
											<div className="col-lg-6 col-md-6">
												<Image
													src="/images/blog/blog21.jpg"
													width={832}
													height={832}
													alt="image"
												/>
											</div>
										</div>
									</div>
									<div className="item">
										<h3>6. Use the Tools Available</h3>
										<p>
											eStuda provides progress tracking,
											reminders, notes, and community
											features. Leverage these tools to
											stay organized and feel a sense of
											achievement as you move forward.
										</p>
									</div>
									<div className="item">
										<h3>7. Don't Forget Self-Care</h3>
										<p>
											Burnout kills motivation. Take
											breaks, stay hydrated, and get
											enough sleep. A healthy mind learns
											better and faster.
										</p>
									</div>
									<div className="item">
										<h3>Final Thoughts</h3>
										<p>
											Staying motivated in an online
											learning environment isn’t always
											easy, but with the right mindset and
											structure, it’s completely
											achievable. Keep your goals in
											sight, engage with others, and
											remember — progress beats
											perfection.
										</p>
									</div>
								</div>
								<form className="reply-form">
									<div className="reply-content">
										<h3>Leave a Reply</h3>
										<p>
											Your email address will not be
											published. Required fields are
											marked *
										</p>
									</div>
									<div className="row justify-content-center g-4">
										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<label>Your Comment *</label>
												<textarea
													className="form-control"
													placeholder="Write comment"
												></textarea>
											</div>
										</div>
										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<label>Your Name *</label>
												<input
													type="text"
													className="form-control"
													placeholder="Your name"
												/>
											</div>
										</div>
										<div className="col-lg-6 col-md-12">
											<div className="form-group">
												<label>Email *</label>
												<input
													type="text"
													className="form-control"
													placeholder="Your email"
												/>
											</div>
										</div>
										<div className="col-lg-6 col-md-12">
											<div className="form-group">
												<label>Website</label>
												<input
													type="text"
													className="form-control"
													placeholder="Your website"
												/>
											</div>
										</div>
										<div className="col-lg-12 col-md-12">
											<div className="options">
												<label>
													<input type="checkbox" />
													Save my name, email, and
													website in this browser for
													the next time I comment.
												</label>
											</div>
										</div>
										<div className="col-lg-12 col-md-12">
											<button
												type="submit"
												className="default-btn"
											>
												Post A Comment
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
														stroke-width="1.5"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-xl-4 col-md-12">
							<div className="widget-area">
								<div className="widget widget_search">
									<h3 className="widget-title">Search</h3>
									<form className="search-form">
										<input
											type="text"
											className="form-control"
											placeholder="Search your keyword"
										/>
										<button type="submit">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
											>
												<mask
													id="mask0_8085_12410"
													style={{
														maskType: "luminance",
													}}
													maskUnits="userSpaceOnUse"
													x="1"
													y="1"
													width="22"
													height="22"
												>
													<path
														d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
														stroke="white"
														stroke-width="1.5"
													/>
													<path
														opacity="0.5"
														d="M20 20L22 22"
														stroke="white"
														stroke-width="1.5"
														stroke-linecap="round"
													/>
												</mask>
												<g mask="url(#mask0_8085_12410)">
													<path
														d="M0 0H24V24H0V0Z"
														fill="#131F34"
													/>
												</g>
											</svg>
										</button>
									</form>
								</div>
								<div className="widget widget_posts_thumb">
									<h3 className="widget-title">
										Popular Posts
									</h3>
									<article className="item">
										<Link
											href="/blog-details"
											className="thumb"
										>
											<Image
												src="/images/blog/blog1.jpg"
												width={610}
												height={610}
												alt="image"
											/>
										</Link>
										<div className="info">
											<h4 className="title usmall">
												<Link href="/blog-details">
													A Beginner's Guide to
													Learning Python
												</Link>
											</h4>
											<span>
												<i className="ri-calendar-line"></i>
												4 June, 2025
											</span>
										</div>
									</article>
									<article className="item">
										<Link
											href="/blog-details"
											className="thumb"
										>
											<Image
												src="/images/blog/blog2.jpg"
												width={610}
												height={610}
												alt="image"
											/>
										</Link>
										<div className="info">
											<h4 className="title usmall">
												<Link href="/blog-details">
													How to Beat Online Learning
													Burnout and Stay Inspired
												</Link>
											</h4>
											<span>
												<i className="ri-calendar-line"></i>
												5 June, 2025
											</span>
										</div>
									</article>
									<article className="item">
										<Link
											href="/blog-details"
											className="thumb"
										>
											<Image
												src="/images/blog/blog3.jpg"
												width={610}
												height={610}
												alt="image"
											/>
										</Link>
										<div className="info">
											<h4 className="title usmall">
												<Link href="/blog-details">
													7 Study Habits of Highly
													Successful Online Learners
												</Link>
											</h4>
											<span>
												<i className="ri-calendar-line"></i>
												7 June, 2025
											</span>
										</div>
									</article>
								</div>
								<div className="widget widget_categories">
									<h3 className="widget-title">Categories</h3>
									<ul className="list">
										<li>
											<Link href="/blog">
												Learning Tips
											</Link>
											<span>(05)</span>
										</li>
										<li>
											<Link href="/blog">
												Career Development
											</Link>
											<span>(10)</span>
										</li>
										<li>
											<Link href="/blog">
												Technology & Tools
											</Link>
											<span>(07)</span>
										</li>
										<li>
											<Link href="/blog">
												Instructor Insights
											</Link>
											<span>(16)</span>
										</li>
									</ul>
								</div>
								<div className="widget widget_tag_cloud">
									<h3 className="widget-title">Tags</h3>
									<div className="tag-cloud">
										<Link href="/blog">
											Online Learning
										</Link>
										<Link href="/blog">Career Tips</Link>
										<Link href="/blog">Remote Work</Link>
										<Link href="/blog">Study Hacks</Link>
										<Link href="/blog">Certifications</Link>
										<Link href="/blog">
											Live classNamees
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
