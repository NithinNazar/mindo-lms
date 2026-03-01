import { Suspense } from "react";
import Banner from "@/components/Common/Banner";
import CTA from "@/components/Common/CTA";
import Feedback from "@/components/About/Feedback";

export default async function Page() {
  return (
    <>
      <Suspense fallback={<div />}>
        <Banner
          title="Learn Anywhere. Grow Everywhere. Welcome to Mindo Health"
          crumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
        />
      </Suspense>
      <div className="pt-140">
        <Suspense fallback={<div />}>
          <Feedback />
        </Suspense>
      </div>
      <Suspense fallback={<div />}>
        <CTA />
      </Suspense>
    </>
  );
}
