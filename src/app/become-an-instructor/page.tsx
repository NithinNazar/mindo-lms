import Banner from "@/components/Common/Banner";
import InstructorClient from "./InstructorClient";

export default async function Page() {
	return (
		<>
			<Banner
				title="Learn Anywhere. Grow Everywhere. Welcome to Acadio"
				crumbs={[
					{ label: "Home", href: "/" },
					{ label: "Become An Instructor" },
				]}
			/>
			<InstructorClient />
		</>
	);
}
