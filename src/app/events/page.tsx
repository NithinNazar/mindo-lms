import Banner from "@/components/Common/Banner";
import CTA from "@/components/Common/CTA";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static"; // SSR-only

export default async function Page() {
  return (
    <>
      <Banner
        title="Learn Anywhere. Grow Everywhere. Welcome to Mindo Health"
        crumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
      />

      <div className="events-area bg-white ptb-140">
        <div className="container">
          <div
            className="section-title section-title-animation animation-style1"
            data-cues="slideInUp"
            data-duration="1000"
          >
            <span className="sub">Events</span>
            <h2 className="title-animation">
              Found More Than 1200+ Events Available
              <Image
                src="/images/title-line.png"
                alt="title underline"
                width={160}
                height={16}
              />
            </h2>
            <p>
              Explore high-quality, expert-led courses designed to help you grow
              your skills and advance your career.
            </p>
          </div>

          <div
            className="row justify-content-center g-4"
            data-cues="slideInUp"
            data-duration="1000"
          >
            {/* Card 1 */}
            <div className="col-xl-3 col-md-6">
              <div className="events-card">
                <div className="image">
                  <Link href="/event-details">
                    <Image
                      src="/images/event/event1.webp"
                      alt="London conference on IBLM education"
                      width={480}
                      height={320}
                    />
                  </Link>
                </div>
                <div className="content">
                  <div className="date">August 19, 2025</div>
                  <h3>
                    <Link href="/event-details">
                      London conference on IBLM education
                    </Link>
                  </h3>
                  <span>
                    <i className="ri-map-pin-line"></i> Place name UK
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-xl-3 col-md-6">
              <div className="events-card">
                <div className="image">
                  <Link href="/event-details">
                    <Image
                      src="/images/event/event2.webp"
                      alt="Digital Skills: Using information to build"
                      width={480}
                      height={320}
                    />
                  </Link>
                </div>
                <div className="content">
                  <div className="date">August 19, 2025</div>
                  <h3>
                    <Link href="/event-details">
                      Digital Skills: Using information to build
                    </Link>
                  </h3>
                  <span>
                    <i className="ri-map-pin-line"></i> Place name UK
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-xl-3 col-md-6">
              <div className="events-card">
                <div className="image">
                  <Link href="/event-details">
                    <Image
                      src="/images/event/event3.webp"
                      alt="Digital Arts and Reshaping the Future"
                      width={480}
                      height={320}
                    />
                  </Link>
                </div>
                <div className="content">
                  <div className="date">August 19, 2025</div>
                  <h3>
                    <Link href="/event-details">
                      Digital Arts and Reshaping the Future
                    </Link>
                  </h3>
                  <span>
                    <i className="ri-map-pin-line"></i> Place name UK
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-xl-3 col-md-6">
              <div className="events-card">
                <div className="image">
                  <Link href="/event-details">
                    <Image
                      src="/images/event/event4.webp"
                      alt="Learn Figma: User Interface Design"
                      width={480}
                      height={320}
                    />
                  </Link>
                </div>
                <div className="content">
                  <div className="date">August 19, 2025</div>
                  <h3>
                    <Link href="/event-details">
                      Learn Figma: User Interface Design
                    </Link>
                  </h3>
                  <span>
                    <i className="ri-map-pin-line"></i> Place name UK
                  </span>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-xl-3 col-md-6">
              <div className="events-card">
                <div className="image">
                  <Link href="/blog-details">
                    <Image
                      src="/images/event/event5.webp"
                      alt="Cubase Pro 10 Essential Training: Advanced"
                      width={480}
                      height={320}
                    />
                  </Link>
                </div>
                <div className="content">
                  <div className="date">August 19, 2025</div>
                  <h3>
                    <Link href="/blog-details">
                      Cubase Pro 10 Essential Training: Advanced
                    </Link>
                  </h3>
                  <span>
                    <i className="ri-map-pin-line"></i> Place name UK
                  </span>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-xl-3 col-md-6">
              <div className="events-card">
                <div className="image">
                  <Link href="/event-details">
                    <Image
                      src="/images/event/event6.webp"
                      alt="Undergraduate Open Events 2024-25"
                      width={480}
                      height={320}
                    />
                  </Link>
                </div>
                <div className="content">
                  <div className="date">August 19, 2025</div>
                  <h3>
                    <Link href="/event-details">
                      Undergraduate Open Events 2024-25
                    </Link>
                  </h3>
                  <span>
                    <i className="ri-map-pin-line"></i> Place name UK
                  </span>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="col-xl-3 col-md-6">
              <div className="events-card">
                <div className="image">
                  <Link href="/event-details">
                    <Image
                      src="/images/event/event7.webp"
                      alt="International Conference on Teacher Education"
                      width={480}
                      height={320}
                    />
                  </Link>
                </div>
                <div className="content">
                  <div className="date">August 19, 2025</div>
                  <h3>
                    <Link href="/event-details">
                      International Conference on Teacher Education
                    </Link>
                  </h3>
                  <span>
                    <i className="ri-map-pin-line"></i> Place name UK
                  </span>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="col-xl-3 col-md-6">
              <div className="events-card">
                <div className="image">
                  <Link href="/event-details">
                    <Image
                      src="/images/event/event8.webp"
                      alt="Research Conference Aims and Objectives"
                      width={480}
                      height={320}
                    />
                  </Link>
                </div>
                <div className="content">
                  <div className="date">August 19, 2025</div>
                  <h3>
                    <Link href="/event-details">
                      Research Conference Aims and Objectives
                    </Link>
                  </h3>
                  <span>
                    <i className="ri-map-pin-line"></i> Place name UK
                  </span>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <Link href="/events" aria-label="Previous page">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13 19L7 12L13 5"
                      stroke="#63667D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      opacity="0.5"
                      d="M17 19L11 12L17 5"
                      stroke="#63667D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link href="/events">1</Link>
                <Link href="/events" className="active">
                  2
                </Link>
                <Link href="/events">3</Link>
                <Link href="/events">4</Link>
                <Link href="/events">5</Link>
                <Link href="/events" aria-label="Next page">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11 19L17 12L11 5"
                      stroke="#63667D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      opacity="0.5"
                      d="M7 19L13 12L7 5"
                      stroke="#63667D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}
