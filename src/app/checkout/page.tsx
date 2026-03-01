import Banner from "@/components/Common/Banner";
import CTA from "@/components/Common/CTA";
import CheckoutClient from "./CheckoutClient";

export default async function Page() {
	return (
		<>
			<Banner
				title="Upgrade Your Learning with Handpicked Books & Resources"
				crumbs={[
					{ label: "Home", href: "/" },
					{ label: "Pricing Plan" },
				]}
			/>
			<CheckoutClient />
			<CTA />
		</>
	);
}
