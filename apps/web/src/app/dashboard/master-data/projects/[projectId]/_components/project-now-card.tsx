import type { ProjectDetail } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-detail-data";
import { StatusBadge } from "@/components/common/status-badge";
import { Button } from "@/components/ui/button";

const reportStateLabels: Record<"submitted" | "draft", string> = {
  submitted: "Submitted",
  draft: "Draft",
};

// What the project is doing right now: the active well's latest report. A
// completed or planned project has none, so the empty state is just as
// important as the filled one.
export function ProjectNowCard({ project }: { project: ProjectDetail }) {
  const { activeWell } = project;

  return (
    <section className="flex flex-col gap-4 rounded-2xl border bg-card p-5 shadow-xs">
      <h2 className="text-sm font-semibold">Now</h2>

      {activeWell ? (
        <>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground">Active well</span>
            <span className="text-2xl font-bold">{activeWell.wellName}</span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              Report #{activeWell.reportNumber} · {activeWell.reportDate}
              <StatusBadge
                tone={
                  activeWell.reportState === "submitted" ? "good" : "warning"
                }
              >
                {reportStateLabels[activeWell.reportState]}
              </StatusBadge>
            </span>
          </div>

          <Button className="w-full">
            Open report #{activeWell.reportNumber}
          </Button>
        </>
      ) : (
        <p className="text-sm text-muted-foreground">
          No active well right now.
        </p>
      )}
    </section>
  );
}
