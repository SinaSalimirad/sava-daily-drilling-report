import {
  type RecentReport,
  recentReports,
} from "@/app/dashboard/overview/_components/details/details-data";
import { OverviewCard } from "@/components/common/overview-card";
import { StatusBadge } from "@/components/common/status-badge";

const headerClass =
  "pb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase";

function ReportStatus({ report }: { report: RecentReport }) {
  if (report.status === "draft") {
    return <StatusBadge tone="warning">Draft</StatusBadge>;
  }

  return (
    <StatusBadge tone="good">
      Submitted
      {report.edited && (
        <span className="font-normal text-muted-foreground">· edited</span>
      )}
    </StatusBadge>
  );
}

export function RecentReportsCard() {
  return (
    <OverviewCard title="Recent reports" meta="All reports of this well">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[56rem] text-sm">
          <thead>
            <tr className="text-right">
              <th scope="col" className={`${headerClass} text-left`}>
                #
              </th>
              <th scope="col" className={`${headerClass} text-left`}>
                Date
              </th>
              <th scope="col" className={`${headerClass} text-left`}>
                Section
              </th>
              <th scope="col" className={headerClass}>
                Total depth
              </th>
              <th scope="col" className={headerClass}>
                Drilled
              </th>
              <th scope="col" className={headerClass}>
                Mud weight
              </th>
              <th scope="col" className={headerClass}>
                Losses
              </th>
              <th scope="col" className={headerClass}>
                Cost
              </th>
              <th scope="col" className={headerClass}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {recentReports.map((report) => (
              <tr
                key={report.number}
                className="border-t text-right tabular-nums"
              >
                <th scope="row" className="py-3 text-left font-semibold">
                  {report.number}
                </th>
                <td className="py-3 text-left">{report.date}</td>
                <td className="py-3 text-left">{report.section}</td>
                <td className="py-3">{report.totalDepth}</td>
                <td className="py-3">{report.drilled ?? "—"}</td>
                <td className="py-3">{report.mudWeight}</td>
                <td className="py-3">{report.losses}</td>
                <td className="py-3">{report.cost}</td>
                <td className="py-3">
                  <ReportStatus report={report} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </OverviewCard>
  );
}
