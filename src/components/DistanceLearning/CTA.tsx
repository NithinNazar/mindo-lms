"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";
import { motion, useSpring } from "framer-motion";

interface CTAProps {
  title?: string;
  highlight?: string; // the highlighted brand text inside <span>
  titleLineSrc?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
  shape1Src?: string;
  shape2Src?: string;
  className?: string;
}

export default function CTA({
  title = "Your Future Starts with Great Teachers — Meet Them on",
  highlight = "Mindo Health",
  titleLineSrc = "/images/title-line.png",
  description = "Learn from the minds who make online education meaningful.",
  ctaHref = "/contact-us",
  ctaLabel = "Get Started Now",
  shape1Src = "/images/cta-shape3.png",
  shape2Src = "/images/cta-shape4.png",
  className = "",
}: CTAProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Springs for smooth follow
  const x1 = useSpring(0, { stiffness: 120, damping: 20, mass: 0.4 });
  const y1 = useSpring(0, { stiffness: 120, damping: 20, mass: 0.4 });
  const x2 = useSpring(0, { stiffness: 120, damping: 20, mass: 0.4 });
  const y2 = useSpring(0, { stiffness: 120, damping: 20, mass: 0.4 });

  // Match original jQuery logic: newx/newy relative to viewport center of the area
  const SPEED = 0.03; // same as data-speed

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left; // within area
      const y = e.clientY - rect.top;
      const newx = x - rect.width / 2;
      const newy = y - rect.height / 2;

      // Shape1 and Shape2 both had data-revert in your HTML -> multiply by -1
      // TweenMax.to($(el), 1, { x: (1 - newx*speed), y: (1 - newy*speed) })
      // We drop the constant offset of 1px and keep proportional movement.
      x1.set(-(newx * SPEED));
      y1.set(-(newy * SPEED));

      x2.set(-(newx * SPEED));
      y2.set(-(newy * SPEED));
    },
    [x1, y1, x2, y2],
  );

  const onMouseLeave = useCallback(() => {
    x1.set(0);
    y1.set(0);
    x2.set(0);
    y2.set(0);
  }, [x1, y1, x2, y2]);

  return (
    <div className={`education-cta-area ${className}`}>
      <div className="container" data-cues="slideInUp" data-duration="1000">
        <div
          ref={containerRef}
          className="education-cta-inner wrap-style2"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <div className="content section-title-animation animation-style2">
            <h2 className="title-animation">
              {title}{" "}
              <span>
                {highlight}{" "}
                <Image
                  src={titleLineSrc}
                  alt=""
                  width={155}
                  height={12}
                  style={{ verticalAlign: "middle" }}
                />
              </span>
            </h2>
            <p>{description}</p>
            <Link href={ctaHref} className="default-btn">
              {ctaLabel}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                aria-hidden
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

          {/* Decorative shapes with subtle parallax */}
          <motion.div className="cta-shape1" style={{ x: x1, y: y1 }}>
            <Image src={shape1Src} alt="" width={359} height={381} />
          </motion.div>
          <motion.div className="cta-shape2" style={{ x: x2, y: y2 }}>
            <Image src={shape2Src} alt="" width={390} height={338} />
          </motion.div>
          <style jsx>{`
            .education-cta-area :global(.default-btn) {
              transition:
                transform 0.25s ease,
                box-shadow 0.25s ease;
              will-change: transform;
              display: inline-flex;
              align-items: center;
              gap: 8px;
            }
            .education-cta-area :global(.default-btn:hover) {
              transform: translateX(3px);
              box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
            }
            .education-cta-inner {
              position: relative;
              overflow: hidden;
            }
            .cta-shape1,
            .cta-shape2 {
              position: absolute;
              pointer-events: none;
            }
            .cta-shape1 {
              left: 8px;
              bottom: 8px;
            }
            .cta-shape2 {
              right: 8px;
              top: 8px;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
