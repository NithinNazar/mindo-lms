import Banner from "@/components/Common/Banner";
import Image from "next/image";

export default async function Page() {
	return (
		<>
			<Banner
				title="Contact Us"
				crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
			/>

			{/* Start Contact Info Area */}
			<div className="contact-info-area ptb-140">
				<div className="container">
					<div
						className="row justify-content-center g-4"
						data-cues="slideInUp"
						data-duration="1000"
					>
						<div className="col-xl-3 col-sm-6">
							<div className="contact-info-card">
								<div className="icon">
									<Image
										src="/images/map-pin.svg"
										alt="map-pin"
										width={48}
										height={48}
									/>
								</div>
								<h3>Our Location</h3>
								<p>354 Oakridge, Camden NJ 08102 - USA</p>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6">
							<div className="contact-info-card">
								<div className="icon bg2">
									<Image
										src="/images/mail.svg"
										alt="mail"
										width={48}
										height={48}
									/>
								</div>
								<h3>Email Address</h3>
								<p>
									<a href="mailto:contactinfo@demo.com">
										contactinfo@demo.com
									</a>
									<a href="mailto:hello@eStuda.com">
										hello@eStuda.com
									</a>
								</p>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6">
							<div className="contact-info-card">
								<div className="icon bg3">
									<Image
										src="/images/phone-call.svg"
										alt="phone-call"
										width={48}
										height={48}
									/>
								</div>
								<h3>Urgent Call</h3>
								<p>
									<a href="tel:020350363880">
										+02 035 036 3880
									</a>
									<a href="tel:020350363880">
										+02 035 036 3880
									</a>
								</p>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6">
							<div className="contact-info-card">
								<div className="icon bg4">
									<Image
										src="/images/printer.svg"
										alt="printer"
										width={48}
										height={48}
									/>
								</div>
								<h3>Our Fax</h3>
								<p>
									<a href="tel:012345678998563214">
										+012 (345) 678 99 8563214
									</a>
									<a href="tel:01234567899856">
										+012 (345) 678 99 856
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* End Contact Info Area */}

			{/* Start Map Area */}
			<div className="map-area">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.363775650484!2d-75.11916642361537!3d39.95561878357462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c857aaaaaaab%3A0xebc346365e9fd279!2sSkillmate!5e0!3m2!1sen!2sbd!4v1745723843357!5m2!1sen!2sbd"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>
			{/* End Map Area */}

			{/* Start Contact Us Area */}
			<div className="contact-us-area ptb-140">
				<div className="container">
					<form className="contact-us-form">
						<h3>Got A Minute? Contact Us Now!</h3>
						<div className="row justify-content-center">
							<div className="col-lg-12 col-md-12">
								<div className="form-group">
									<label>Name</label>
									<input
										type="text"
										className="form-control"
										placeholder="Enter your name"
									/>
								</div>
							</div>
							<div className="col-lg-12 col-md-12">
								<div className="form-group">
									<label>Email</label>
									<input
										type="email"
										className="form-control"
										placeholder="Enter email address"
									/>
								</div>
							</div>
							<div className="col-lg-12 col-md-12">
								<div className="form-group">
									<label>Number</label>
									<input
										type="number"
										className="form-control"
										placeholder="Enter your number"
									/>
								</div>
							</div>
							<div className="col-lg-12 col-md-12">
								<div className="form-group">
									<label>Subject</label>
									<input
										type="text"
										className="form-control"
										placeholder="Enter your subject"
									/>
								</div>
							</div>
							<div className="col-lg-12 col-md-12">
								<div className="form-group">
									<label>Your Message</label>
									<textarea
										className="form-control"
										placeholder="Your message here"
									/>
								</div>
							</div>
							<div className="col-lg-12 col-md-12">
								<button type="submit" className="default-btn">
									Submit Message
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
							</div>
						</div>
					</form>
				</div>
			</div>
			{/* End Contact Us Area */}
		</>
	);
}
