import Image from "next/image";
import Link from "next/link";
import RegisterClient from "./RegisterClient";

export const dynamic = "force-static"; // SSR-only static page

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
                src="/images/register.png"
                alt="Register illustration"
                width={1228}
                height={1110}
                priority
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="profile-authentication-inner">
              <div className="content">
                <h3>Get Started with Mindo Health - It&apos;s Free</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>

              <RegisterClient />

              <div className="bottom-text mt-3">
                <span>
                  Already have an account?{" "}
                  <Link href="/login">Log in here.</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
