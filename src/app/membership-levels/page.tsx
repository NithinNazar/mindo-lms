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
        crumbs={[{ label: "Home", href: "/" }, { label: "Membership Levels" }]}
      />

      {/* Improving Area */}
      <div className="improving-area ptb-140">
        <div className="container">
          <div
            className="section-title section-title-animation animation-style1"
            data-cues="slideInUp"
            data-duration="1000"
          >
            <span className="sub">Transform Your Life</span>
            <h2 className="title-animation">
              Improving Lives Through Learning
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
            <div className="col-lg-4 col-sm-6">
              <div className="improving-card">
                <i className="ri-moon-clear-line"></i>
                <h3>Unlimited access</h3>
                <p>
                  Break into a new field like information technology or data
                  science. No prior experience necessary to get started.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="improving-card">
                <i className="ri-stack-line"></i>
                <h3>Learn anything together</h3>
                <p>
                  Break into a new field like information technology or data
                  science. No prior experience necessary to get started.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="improving-card">
                <i className="ri-star-line"></i>
                <h3>Learn with experts</h3>
                <p>
                  Break into a new field like information technology or data
                  science. No prior experience necessary to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Levels Area */}
      <div className="membership-levels-area pb-140">
        <div className="container" data-cues="slideInUp" data-duration="1000">
          <div className="membership-levels-table table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <span className="desc-1">$500</span>
                    <span className="desc-2">Silver Membership</span>
                    <span className="desc-3">You can view few features</span>
                  </th>
                  <th>
                    <span className="desc-1">$1,000</span>
                    <span className="desc-2">Gold Membership</span>
                    <span className="desc-3">You can view most features</span>
                  </th>
                  <th>
                    <span className="desc-1">$1,500</span>
                    <span className="desc-2">Diamond Membership</span>
                    <span className="desc-3">You can view all features</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Number of features</td>
                  <td>4</td>
                  <td>8</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      Investment Fundamentals &amp; Data Analytics
                    </Link>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      Hands-On Python &amp; R In Data Science
                    </Link>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      Complete Data Science Bootcamp
                    </Link>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      Programming Masterclass for Developers
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      Hands-On Artificial Neural Networks
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      PRINCE2® Practitioner Certification Training
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      PMI-RMP® Certification Training
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      PRINCE2® Foundation Certification Training
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">PMP® Plus</Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">PMP® Renewal Pack</Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">Digital Project Manager</Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      Agile Project Management; Agile Delivery
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      Vue JS 2 - The Complete Guide
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      Everything You Need to Program in Python
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      Mathematical Foundation For Machine Learning
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      Drawing Course - Beginner to Advanced
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      Deep Learning and Artificial Intelligence
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      Information About UI/UX Design Degree
                    </Link>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      Photography Photo modify and Beautiful
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/course-details">
                      Professional IT Expert Certificate Course
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <Link href="/login" className="default-btn">
                      Get it now
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
                    </Link>
                  </td>
                  <td>
                    <Link href="/login" className="default-btn">
                      Get it now
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
                    </Link>
                  </td>
                  <td>
                    <Link href="/login" className="default-btn">
                      Get it now
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
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Optional site-wide CTA to keep existing import */}
      <CTA />
    </>
  );
}
