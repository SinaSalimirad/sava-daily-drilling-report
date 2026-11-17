import { ArchiveIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { CurrentPage } from "@/app/dashboard/_components/current-page";
import { archivedProjects } from "@/app/dashboard/master-data/projects/archive/_components/archived-projects-data";
import { Button } from "@/components/ui/button";

// Same layout as the Overview toolbar: the page title on the left, the actions on the right.
export function ProjectsToolbar() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <CurrentPage />

      <div className="ml-auto flex items-center gap-2">
        <Button
          variant="outline"
          className="border-0 bg-card"
          nativeButton={false}
          render={<Link href="/dashboard/master-data/projects/archive" />}
        >
          <ArchiveIcon data-icon="inline-start" strokeWidth={1.5} />
          Archive projects
          <span className="ml-1.5 inline-flex items-center justify-center rounded-md bg-muted px-[7px] py-px text-[11.5px] font-medium text-muted-foreground tabular-nums">
            {archivedProjects.length}
          </span>
        </Button>
        <Button
          nativeButton={false}
          render={<Link href="/dashboard/master-data/projects/new" />}
        >
          <PlusIcon data-icon="inline-start" />
          New project
        </Button>
      </div>
    </div>
  );
}
