import Banner from "@/components/Common/Banner";
import CTA from "@/components/Common/CTA";
import FeaturedCourses from "@/components/SuccessStory/FeaturedCourses";
import Image from "next/image";

export const dynamic = "force-static"; // SSR-only

export default async function Page() {
  return (
    <>
      <Banner
        title="Learn Anywhere. Grow Everywhere. Welcome to Mindo Health"
        crumbs={[{ label: "Home", href: "/" }, { label: "Success Story" }]}
      />

      {/* Success Story Area */}
      <div className="success-story-area ptb-140">
        <div className="container" data-cues="slideInUp" data-duration="1000">
          <div className="section-title section-title-animation animation-style1">
            <h2 className="title-animation">
              A World Class Education For Anyone, Anywhere. Wonderful Choice
              <Image
                src="/images/title-line.png"
                alt="title underline"
                width={155}
                height={12}
              />
            </h2>
            <p>
              Explore high-quality, expert-led courses designed to help you grow
              your skills and advance your career.
            </p>
          </div>

          <div className="success-story-play">
            <Image
              src="/images/success-story.webp"
              alt="success story"
              width={1170}
              height={658}
            />
            {/* External video link; fslightbox attribute kept if you load it elsewhere */}
            <a
              data-fslightbox="video"
              className="video-btn"
              href="https://youtu.be/PWvPbGWVRrU?si=_4kQId3sf7QOjmWc"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-play-mini-fill"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Straight Quotes Area */}
      <div className="straight-quotes-area ptb-140">
        <div className="container" data-cues="slideInUp" data-duration="1000">
          <div className="straight-quotes-content text-center">
            <div className="quotes-image">
              <Image
                src="/images/quote/quote.jpg"
                alt="quote"
                width={220}
                height={135}
              />
              <div className="icon">
                <Image
                  src="/images/quote/straight-quotes.svg"
                  alt="quotes icon"
                  width={70}
                  height={70}
                />
              </div>
            </div>
            <div className="quotes-content">
              <p>
                From high school students, tertiary pupils, graduates or
                post-graduate learners, learners of any levels can easily find a
                suitable online program for themselves. It’s now convenient than
                the past to take an online course for improving the degree,
                becoming working professionals.
              </p>
              <div className="info">
                <h3>Thomson Martin</h3>
                <span>Designer of MTX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Overview Area */}
      <div className="success-overview-area pt-140">
        <div className="container" data-cues="slideInUp" data-duration="1000">
          <div className="success-overview-content">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-lg-4 col-md-12">
                <div className="heading-content">
                  <h3>
                    Inspirational Stories Are Less About Success{" "}
                    <i className="ri-arrow-right-long-fill"></i>
                  </h3>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="paragraph-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Natoque interdum venenatis, volutpat in at volutpat, ut
                    enim. Nisl mauris massa adipiscing ac mauris, habitant
                    ullamcorper. Tempus quis tortor lectus consectetur at
                    suspendisse.
                  </p>
                  <p>
                    Consectetur adipiscing elit. Natoque interdum venenatis,
                    volutpat in at volutpat, ut enim. Nisl mauris massa
                    adipiscing ac mauris.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="success-overview-content">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-lg-4 col-md-12">
                <div className="heading-content">
                  <h3>
                    Opportunities are opened for learners to choose{" "}
                    <i className="ri-arrow-right-long-fill"></i>
                  </h3>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="paragraph-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Natoque interdum venenatis, volutpat in at volutpat, ut
                    enim. Nisl mauris massa adipiscing ac mauris, habitant
                    ullamcorper. Tempus quis tortor lectus consectetur at
                    suspendisse.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="success-overview-content">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-lg-4 col-md-12">
                <div className="heading-content">
                  <h3>
                    Academic Excellence and Cultural Diversity{" "}
                    <i className="ri-arrow-right-long-fill"></i>
                  </h3>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="paragraph-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Natoque interdum venenatis, volutpat in at volutpat, ut
                    enim. Nisl mauris massa adipiscing ac mauris, habitant
                    ullamcorper. Tempus quis tortor lectus consectetur at
                    suspendisse.
                  </p>
                  <p>
                    Consectetur adipiscing elit. Natoque interdum venenatis,
                    volutpat in at volutpat, ut enim. Nisl mauris massa
                    adipiscing ac mauris.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap-bg-style">
        <FeaturedCourses />
      </div>

      {/* Optional site-wide CTA */}
      <CTA />
    </>
  );
}
