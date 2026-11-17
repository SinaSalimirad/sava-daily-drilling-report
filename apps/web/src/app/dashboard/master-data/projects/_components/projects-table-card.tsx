"use client";

import { useTable } from "@tanstack/react-table";
import {
  projectsColumns,
  projectsTableFeatures,
} from "@/app/dashboard/master-data/projects/_components/projects-columns";
import { projects } from "@/app/dashboard/master-data/projects/_components/projects-data";
import { OverviewCard } from "@/components/common/overview-card";
import { ScrollArea } from "@/components/ui/scroll-area";

// Fixed width of every column, in rem. With `table-fixed` the table no longer squeezes
// columns to fit: text that does not fit is cut with "…", and the horizontal scrollbar
// appears as soon as the card is narrower than the sum of the widths.
const columnWidths: Record<string, number> = {
  name: 10,
  client: 11,
  field: 7,
  wells: 5,
  activeWell: 7,
  lastReport: 8,
  status: 7,
  actions: 6,
};
const tableMinWidth = Object.values(columnWidths).reduce((a, b) => a + b, 0);

// Columns that are left-aligned; every other column is centered.
const leftAlignedColumnIds = new Set(["name", "client", "actions"]);

// `px-3` is the gap between columns; the first and last column keep the card's own edge.
const cellClass = (columnId: string) =>
  `truncate px-3 first:pl-0 last:pr-0 ${
    leftAlignedColumnIds.has(columnId) ? "text-left" : "text-center"
  }`;
const headerClass = (columnId: string) =>
  `${cellClass(columnId)} pb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase`;

// The project name is the row header; every other column is a normal cell.
const ROW_HEADER_COLUMN_ID = "name";

export function ProjectsTableCard() {
  const table = useTable({
    features: projectsTableFeatures,
    columns: projectsColumns,
    data: projects,
  });

  return (
    <OverviewCard title="All projects" meta={`${projects.length} projects`}>
      <ScrollArea>
        {/* The bottom padding is the space between the table and the scrollbar. */}
        <div className="pb-5">
          <table
            className="w-full table-fixed text-sm"
            style={{ minWidth: `${tableMinWidth}rem` }}
          >
            <colgroup>
              {table.getAllColumns().map((column) => (
                <col
                  key={column.id}
                  style={{ width: `${columnWidths[column.id]}rem` }}
                />
              ))}
            </colgroup>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="text-left">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      scope="col"
                      className={headerClass(header.column.id)}
                    >
                      {header.isPlaceholder ? null : (
                        <table.FlexRender header={header} />
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-t text-left">
                  {row.getAllCells().map((cell) =>
                    cell.column.id === ROW_HEADER_COLUMN_ID ? (
                      <th
                        key={cell.id}
                        scope="row"
                        className={`${cellClass(cell.column.id)} py-3 font-semibold`}
                      >
                        <table.FlexRender cell={cell} />
                      </th>
                    ) : (
                      <td
                        key={cell.id}
                        className={`${cellClass(cell.column.id)} py-3`}
                      >
                        <table.FlexRender cell={cell} />
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollArea>
    </OverviewCard>
  );
}
