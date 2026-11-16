import type { Metadata } from "next";
import { DashboardHeader } from "@/app/dashboard/_components/dashboard-header";
import { MainNav } from "@/app/dashboard/_components/main-nav";

// Keep the dashboard out of search results. Do not also block it in robots.txt:
// crawlers must be able to fetch the page to see this tag.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-card">
        <DashboardHeader />
        <MainNav />
      </div>
      {children}
    </>
  );
}
