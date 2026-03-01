import Image from "next/image";
import Link from "next/link";
import LoginClient from "./LoginClient";
export const dynamic = "force-static"; // SSR-only (no client interactivity needed)

export default async function Page() {
	return (
		<div className="profile-authentication-area ptb-140">
			<div className="container">
				<div
					className="row justify-content-center align-items-center g-5"
					data-cues="slideInUp"
					data-duration="1000"
				>
					<div className="col-lg-6 col-md-12">
						<div className="profile-authentication-image">
							<Image
								src="/images/login.png"
								alt="Login illustration"
								width={1118}
								height={1118}
								priority
							/>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="profile-authentication-inner">
							<div className="content">
								<h3>Welcome back!</h3>
								<p>
									Your email address will not be published.
									Required fields are marked *
								</p>
							</div>

							<LoginClient />

							<div className="bottom-text mt-3">
								<span>
									Don&apos;t have an account?{" "}
									<Link href="/register">Create one.</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
