import { ChevronRightIcon } from "lucide-react";
import type { ProjectDetail } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-detail-data";

// A count per equipment group and the price list. These are read-only rows for
// now: the master-data pages they would link to (Pits, Pumps, Solids control,
// Products) do not exist yet.
export function ProjectRigEquipmentCard({
  project,
}: {
  project: ProjectDetail;
}) {
  return (
    <section className="flex flex-col gap-1 rounded-2xl border bg-card p-5 shadow-xs">
      <h2 className="mb-3 text-sm font-semibold">Rig equipment & products</h2>

      {project.rigEquipment.map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between border-t py-3 first:border-t-0 first:pt-0"
        >
          <span className="text-sm">{row.label}</span>
          <span className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">{row.detail}</span>
            <span className="font-semibold tabular-nums">{row.count}</span>
            <ChevronRightIcon
              className="size-4 text-muted-foreground"
              aria-hidden
            />
          </span>
        </div>
      ))}
    </section>
  );
}
