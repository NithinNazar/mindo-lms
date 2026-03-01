import Banner from "@/components/Common/Banner";
import CTA from "@/components/Common/CTA";
import CoursesContent from "@/components/Courses/CoursesContent";

export const dynamic = "force-dynamic";

export default async function Page() {
	return (
		<>
			<Banner
				title="Explore Online Courses That Move You Forward"
				crumbs={[{ label: "Home", href: "/" }, { label: "Courses" }]}
			/>
			<CoursesContent />
			<CTA />
		</>
	);
}
