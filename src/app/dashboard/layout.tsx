export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="ptb-140 border-top">{children}</div>;
}
