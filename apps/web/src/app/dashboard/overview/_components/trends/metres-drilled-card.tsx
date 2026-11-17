import { OverviewCard } from "@/components/common/overview-card";
import { MetresBarChart } from "@/app/dashboard/overview/_components/trends/metres-bar-chart";
import { metresDrilled } from "@/app/dashboard/overview/_components/trends/trends-data";

const { axisMax, ticks, average, reports } = metresDrilled;

const firstReport = reports[0]?.number;
const lastReport = reports[reports.length - 1]?.number;

export function MetresDrilledCard() {
  return (
    <OverviewCard
      title="Metres drilled per report"
      subtitle={`reports #${firstReport}–#${lastReport}`}
    >
      <div>
        <MetresBarChart
          reports={reports}
          average={average}
          axisMax={axisMax}
          ticks={ticks}
        />
        <p className="mt-1 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span>report number</span>
          <span className="flex items-center gap-1.5">
            <span
              aria-hidden
              className="w-4 border-t border-dashed border-muted-foreground"
            />
            avg {average} m
          </span>
        </p>
      </div>

      {/* Table twin of the chart, for screen readers. */}
      <table className="sr-only" aria-label="Metres drilled per report">
        <thead>
          <tr>
            <th>Report</th>
            <th>Metres</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(({ number, metres }) => (
            <tr key={number}>
              <td>#{number}</td>
              <td>{metres}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </OverviewCard>
  );
}
