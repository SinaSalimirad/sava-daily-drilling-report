import type { ProjectDetail } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-detail-data";

export function ProjectRecordCard({ project }: { project: ProjectDetail }) {
  return (
    <section className="flex flex-col gap-4 rounded-2xl border bg-card p-5 shadow-xs">
      <h2 className="text-sm font-semibold">Record</h2>

      <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5 text-sm">
        <dt className="text-muted-foreground">Created</dt>
        <dd className="text-right font-medium">{project.createdAt}</dd>
        <dt className="text-muted-foreground">Last change</dt>
        <dd className="text-right font-medium">{project.lastChangeAt}</dd>
      </dl>

      <p className="border-t pt-3 text-xs text-muted-foreground">
        Who made each change is shown from v0.9 (auth).
      </p>
    </section>
  );
}
