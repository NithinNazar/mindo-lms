import Link from "next/link";
import ClearCartOnSuccess from "@/components/Cart/ClearCartOnSuccess";

export default async function SuccessPage({
	searchParams,
}: {
	searchParams: Promise<{ session_id?: string }>;
}) {
	const { session_id } = await searchParams;
	const sessionId = session_id ?? null;

	return (
		<div className="ptb-140 border-top">
			<div className="container text-center">
				{/* This silently clears the cart after verification */}
				<ClearCartOnSuccess sessionId={sessionId} />

				<h1>Payment Successful 🎉</h1>
				<p>
					Your courses have been unlocked. You can find them in your
					dashboard.
				</p>
				<div className="mt-3">
					<Link href="/dashboard/enrollments" className="default-btn">
						Go to My Courses
					</Link>
				</div>
			</div>
		</div>
	);
}
