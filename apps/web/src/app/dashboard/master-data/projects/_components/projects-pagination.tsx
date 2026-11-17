import type { ReactTable } from "@tanstack/react-table";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import {
  PROJECTS_PAGE_SIZES,
  type projectsTableFeatures,
} from "@/app/dashboard/master-data/projects/_components/projects-columns";
import type { Project } from "@/app/dashboard/master-data/projects/_components/projects-data";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ProjectsPaginationProps = {
  table: ReactTable<typeof projectsTableFeatures, Project>;
};

// "1–5 of 12 projects": the range of rows that the current page shows.
function getRangeLabel(table: ProjectsPaginationProps["table"]) {
  const { pageIndex, pageSize } = table.state.pagination;
  const total = table.getRowCount();
  const first = total === 0 ? 0 : pageIndex * pageSize + 1;
  const last = Math.min((pageIndex + 1) * pageSize, total);

  return `${first}–${last} of ${total} projects`;
}

export function ProjectsPagination({ table }: ProjectsPaginationProps) {
  const { pageIndex, pageSize } = table.state.pagination;

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t pt-4">
      <p className="hidden text-sm text-muted-foreground lg:block">
        {getRangeLabel(table)}
      </p>

      <div className="flex w-full flex-wrap items-center gap-x-8 gap-y-3 lg:w-fit">
        <div className="hidden items-center gap-2 lg:flex">
          <span id="rows-per-page-label" className="text-sm font-medium">
            Rows per page
          </span>
          <Select
            value={pageSize}
            onValueChange={(size) => {
              if (size !== null) table.setPageSize(size);
            }}
          >
            <SelectTrigger
              size="sm"
              className="w-20"
              aria-labelledby="rows-per-page-label"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent side="top">
              {PROJECTS_PAGE_SIZES.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <p className="text-sm font-medium">
          Page {pageIndex + 1} of {Math.max(table.getPageCount(), 1)}
        </p>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Button
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeftIcon />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
