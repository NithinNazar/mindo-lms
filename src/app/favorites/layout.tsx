import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  // Allow any authenticated user (no role restriction)
  if (!session?.user?.id) {
    redirect("/login");
  }

  return <div className="ptb-140 border-top">{children}</div>;
}
