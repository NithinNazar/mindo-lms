import Banner from "@/components/Common/Banner";
import PricingClient from "./PricingClient";
import CTA from "@/components/Common/CTA";

export default async function Page() {
  return (
    <>
      <Banner
        title="Learn Anywhere. Grow Everywhere. Welcome to Mindo Health"
        crumbs={[{ label: "Home", href: "/" }, { label: "Pricing Plan" }]}
      />
      <PricingClient />
      <CTA />
    </>
  );
}
