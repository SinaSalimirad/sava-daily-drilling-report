"use client";

import type { ReactTable, RowData, TableFeatures } from "@tanstack/react-table";
import { ScrollArea } from "@/components/ui/scroll-area";

type DataTableProps<TFeatures extends TableFeatures, TData extends RowData> = {
  table: ReactTable<TFeatures, TData>;
  // Fixed width of every column, in rem, keyed by column id. With `table-fixed` the
  // table no longer squeezes columns to fit: text that does not fit is cut with "…",
  // and the horizontal scrollbar appears as soon as the card is narrower than the sum.
  columnWidths: Record<string, number>;
  // Columns that are left-aligned; every other column is centered.
  leftAlignedColumnIds: ReadonlySet<string>;
  // The column whose cells are the row headers (`<th scope="row">`).
  rowHeaderColumnId: string;
};

// `px-3` is the gap between columns; the first and last column keep the card's own edge.
const cellClass = (columnId: string, leftAligned: ReadonlySet<string>) =>
  `truncate px-3 first:pl-0 last:pr-0 ${
    leftAligned.has(columnId) ? "text-left" : "text-center"
  }`;

const headerClass =
  "pb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase";

export function DataTable<
  TFeatures extends TableFeatures,
  TData extends RowData,
>({
  table,
  columnWidths,
  leftAlignedColumnIds,
  rowHeaderColumnId,
}: DataTableProps<TFeatures, TData>) {
  const tableMinWidth = Object.values(columnWidths).reduce((a, b) => a + b, 0);

  return (
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
                    className={`${cellClass(header.column.id, leftAlignedColumnIds)} ${headerClass}`}
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
                  cell.column.id === rowHeaderColumnId ? (
                    <th
                      key={cell.id}
                      scope="row"
                      className={`${cellClass(cell.column.id, leftAlignedColumnIds)} py-3 font-semibold`}
                    >
                      <table.FlexRender cell={cell} />
                    </th>
                  ) : (
                    <td
                      key={cell.id}
                      className={`${cellClass(cell.column.id, leftAlignedColumnIds)} py-3`}
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
  );
}
