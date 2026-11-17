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
          <ArchiveIcon data-icon="inline-start" />
          Archive projects
          <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground tabular-nums">
            {archivedProjects.length}
          </span>
        </Button>
        <Button>
          <PlusIcon data-icon="inline-start" />
          New project
        </Button>
      </div>
    </div>
  );
}
