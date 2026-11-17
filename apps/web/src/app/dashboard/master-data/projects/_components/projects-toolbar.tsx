import { ArchiveIcon, PlusIcon } from "lucide-react";
import { CurrentPage } from "@/app/dashboard/_components/current-page";
import { Button } from "@/components/ui/button";

// Same layout as the Overview toolbar: the page title on the left, the actions on the right.
export function ProjectsToolbar() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <CurrentPage />

      <div className="ml-auto flex items-center gap-2">
        <Button variant="outline" className="border-0 bg-card">
          <ArchiveIcon data-icon="inline-start" />
          Archive projects
        </Button>
        <Button>
          <PlusIcon data-icon="inline-start" />
          New project
        </Button>
      </div>
    </div>
  );
}
