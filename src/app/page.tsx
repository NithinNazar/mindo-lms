import About from "@/components/Index/About";
import Banner from "@/components/Index/Banner";
import Categories from "@/components/Index/Categories";
import EducationFun from "@/components/Index/FunFact";
import EducationCourses from "@/components/Index/EducationCourses";
import EducationPartner from "@/components/Index/EducationPartner";
import EducationWorks from "@/components/Index/EducationWorks";
import EducationOverview from "@/components/Index/EducationOverview";
import EducationTeam from "@/components/Index/EducationTeam";
import CTA from "@/components/Index/CTA";
import Blog from "@/components/Index/Blog";
import { Suspense } from "react";

export default function Home() {
	return (
		<>
			<Suspense fallback={<div />}>
				<Banner />
			</Suspense>
			<Suspense fallback={<div />}>
				<EducationFun />
			</Suspense>
			<Suspense fallback={<div />}>
				<Categories />
			</Suspense>
			<Suspense fallback={<div />}>
				<About classStyle="pb-140" />
			</Suspense>
			<Suspense fallback={<div />}>
				<EducationCourses />
			</Suspense>
			<Suspense fallback={<div />}>
				<EducationPartner />
			</Suspense>
			<Suspense fallback={<div />}>
				<EducationWorks />
			</Suspense>
			<Suspense fallback={<div />}>
				<EducationOverview />
			</Suspense>
			<Suspense fallback={<div />}>
				<EducationTeam />
			</Suspense>
			<Suspense fallback={<div />}>
				<CTA />
			</Suspense>
			<Suspense fallback={<div />}>
				<Blog />
			</Suspense>
		</>
	);
}
