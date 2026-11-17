import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function ArchivedProjectsHeader() {
  return (
    <div className="flex flex-wrap items-start gap-3">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Archived projects</h1>
        <p className="text-sm text-muted-foreground">
          Finished contracts. Hidden from Select Project; nothing in them is
          deleted.
        </p>
      </div>

      <Link
        href="/dashboard/master-data/projects"
        className={buttonVariants({
          variant: "outline",
          className: "ml-auto border-0 bg-card",
        })}
      >
        Back to projects
      </Link>
    </div>
  );
}
