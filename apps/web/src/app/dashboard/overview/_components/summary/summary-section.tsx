import { ChecksCard } from "@/app/dashboard/overview/_components/summary/checks-card";
import { KpiRow } from "@/app/dashboard/overview/_components/summary/kpi-row";
import { VolumeAccountingCard } from "@/app/dashboard/overview/_components/summary/volume-accounting-card";

export function SummarySection() {
  return (
    <>
      <KpiRow />
      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <VolumeAccountingCard />
        <ChecksCard />
      </div>
    </>
  );
}
