import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function InstructorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session || !["ADMIN"].includes(session.user?.role)) {
    redirect("/"); // prevent access
  }

  return <div className="ptb-140 border-top">{children}</div>;
}
