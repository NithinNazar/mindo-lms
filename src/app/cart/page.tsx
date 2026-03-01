import Banner from "@/components/Common/Banner";
import CartClient from "./CartClient";
import CTA from "@/components/Common/CTA";

export default async function Page() {
	return (
		<>
			<Banner
				title="Upgrade Your Learning with Handpicked Books & Resources"
				crumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]}
			/>
			<CartClient />
			<CTA />
		</>
	);
}
