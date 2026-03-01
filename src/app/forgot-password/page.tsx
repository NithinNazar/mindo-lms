import Link from "next/link";

export const dynamic = "force-static"; // SSR-only static render

export default async function Page() {
	return (
		<div className="profile-authentication-area ptb-140">
			<div className="container">
				<div className="forgot-container">
					<div className="content">
						<h3>Forgot Password</h3>
						<p>
							Enter your email address below and we’ll send you a
							link to reset your password.
						</p>
						<div className="info-text">
							<p>
								Make sure you enter the email address associated
								with your account. If you no longer have access
								to that email, please contact our{" "}
								<Link href="/contact-us">support team</Link> for
								help recovering your account.
							</p>
							<p>
								We take your security seriously. Your
								information is protected and will never be
								shared.
							</p>
						</div>
					</div>

					<form action="/api/forgot-password" method="post">
						<div className="form-group">
							<label htmlFor="email">Email Address</label>
							<input
								id="email"
								name="email"
								type="email"
								className="form-control"
								placeholder="Enter your email"
								required
								autoComplete="email"
							/>
						</div>
						<button type="submit" className="default-btn">
							Reset Password
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

					<Link href="/login" className="back-link">
						Back to Login
					</Link>
				</div>
			</div>
		</div>
	);
}
