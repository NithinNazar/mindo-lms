import Image from "next/image";
import React from "react";
import InstApply from "./InstApply";
import EducationOverview from "@/components/Index/EducationOverview";
import CTA from "@/components/Common/CTA";

const InstructorClient = () => {
	return (
		<>
			<div className="become-an-instructor-area ptb-140">
				<div
					className="container"
					data-cues="slideInUp"
					data-duration="1000"
				>
					<div
						className="section-title section-title-animation animation-style2"
						data-cues="slideInUp"
						data-duration="1000"
					>
						<h2 className="title-animation">
							Become an Instructor
							<Image
								src="/images/title-line.png"
								alt="image"
								width={155}
								height={12}
							/>
						</h2>
						<p>
							Share your knowledge with learners worldwide and
							earn income on your own schedule.
						</p>
					</div>
					<div className="become-an-instructor-features">
						<div
							className="row justify-content-center g-4"
							data-cues="slideInUp"
							data-duration="1000"
						>
							<div className="col-lg-3 col-sm-6">
								<div className="feature">
									<h3>Global Audience</h3>
									<p>
										Teach students from around the world and
										grow your online presence.
									</p>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className="feature wrap2">
									<h3>Flexible Schedule</h3>
									<p>
										Create and teach your course content
										whenever it suits you best.
									</p>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className="feature wrap3">
									<h3>Earn Income</h3>
									<p>
										Monetize your knowledge and expertise
										through course sales and royalties.
									</p>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className="feature wrap4">
									<h3>Support & Tools</h3>
									<p>
										Get access to resources, training, and
										technical tools to create quality
										courses.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="become-an-instructor-steps section-title-animation animation-style2">
						<h2 className="title-animation">How to Get Started</h2>
						<ul className="step-list">
							<li>
								<strong>1.</strong> Sign up and complete your
								instructor profile.
							</li>
							<li>
								<strong>2.</strong> Create engaging course
								content using our tools.
							</li>
							<li>
								<strong>3.</strong> Publish your course and
								start earning income.
							</li>
							<li>
								<strong>4.</strong> Connect with learners and
								build your personal brand.
							</li>
							<li>
								<strong>5.</strong> Learn anytime, anywhere—on
								your schedule.
							</li>
						</ul>
					</div>
					<div className="become-an-instructor-benefits section-title-animation animation-style2">
						<h2 className="title-animation">
							Why Choose Our Platform?
						</h2>
						<ul className="benefits-list">
							<li>
								Access to a global student base of millions of
								learners
							</li>
							<li>
								Marketing and promotional support for your
								courses
							</li>
							<li>
								Comprehensive analytics and insights to improve
								your teaching
							</li>
							<li>Dedicated instructor support and community</li>
							<li>
								No upfront costs or hidden fees - it's free to
								get started
							</li>
						</ul>
					</div>
					<div className="become-an-instructor-testimonials section-title-animation animation-style2">
						<h2 className="title-animation">
							What Our Instructors Say
						</h2>
						<div className="testimonial">
							<p>
								"Becoming an instructor has changed my life. I
								now earn doing what I love, from anywhere in the
								world."
							</p>
							<span>- Ayesha K., Programming Instructor</span>
						</div>
						<div className="testimonial">
							<p>
								"The tools and community are top-notch. I felt
								supported every step of the way."
							</p>
							<span>- Carlos M., Design Instructor</span>
						</div>
					</div>
				</div>
			</div>

			<InstApply />
			<EducationOverview />
			<CTA />
		</>
	);
};

export default InstructorClient;
