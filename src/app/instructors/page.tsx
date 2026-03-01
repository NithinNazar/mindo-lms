import Banner from "@/components/Common/Banner";
import CTA from "@/components/Common/CTA";
import Education from "@/components/DistanceLearning/Education";

export default async function Page() {
	return (
		<>
			<Banner
				title="Meet the Experts Behind Your Learning Journey"
				crumbs={[
					{ label: "Home", href: "/" },
					{ label: "Instructors" },
				]}
			/>

			<Education />

			<CTA />
		</>
	);
}
