import Banner from "@/components/Common/Banner";
import CTA from "@/components/Common/CTA";
import About from "@/components/Index/About";
import Feedback from "@/components/About/Feedback";
import FunFact from "@/components/About/FunFact";
import Partner from "@/components/About/Partner";
import Team from "@/components/About/Team";

export default async function Page() {
	return (
		<>
			<Banner
				title="Learn Anywhere. Grow Everywhere. Welcome to eStuda"
				crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
			/>
			<FunFact />
			<About classStyle="pt-140" />
			<Partner />
			<Feedback />
			<Team />
			<CTA />
		</>
	);
}
