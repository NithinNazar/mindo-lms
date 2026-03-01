import Image from "next/image";
import Link from "next/link";

const CTA: React.FC = () => {
  return (
    <section className="education-cta-area">
      <div className="container" data-cues="slideInUp" data-duration="1000">
        <div className="education-cta-inner">
          <div className="content section-title-animation animation-style1">
            <h2>
              <span className="title-animation" suppressHydrationWarning>
                Your Future Starts with Great Teachers — Meet Them on
              </span>{" "}
              <span className="title-animation" suppressHydrationWarning>
                Mindo Health
              </span>{" "}
              <Image
                src="/images/title-line.png"
                alt="image"
                width={140}
                height={16}
              />
            </h2>
            <p>Learn from the minds who make online education meaningful.</p>
            <Link href="/contact-us" className="default-btn">
              Get Started Now
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
          </div>

          <div className="cta-shape1" data-speed="0.03" data-revert="true">
            <Image
              src="/images/cta-shape1.png"
              alt="image"
              width={359}
              height={381}
            />
          </div>
          <div className="cta-shape2" data-speed="0.03" data-revert="true">
            <Image
              src="/images/cta-shape2.png"
              alt="image"
              width={390}
              height={338}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
