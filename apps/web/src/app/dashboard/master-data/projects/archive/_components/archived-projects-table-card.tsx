"use client";

import { useTable } from "@tanstack/react-table";
import { SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";
import {
  archivedProjectsColumns,
  archivedProjectsTableFeatures,
} from "@/app/dashboard/master-data/projects/archive/_components/archived-projects-columns";
import {
  type ArchivedProject,
  archivedProjects,
} from "@/app/dashboard/master-data/projects/archive/_components/archived-projects-data";
import { DataTable } from "@/components/common/data-table";
import { OverviewCard } from "@/components/common/overview-card";
import { Input } from "@/components/ui/input";

const columnWidths: Record<string, number> = {
  name: 10,
  client: 12,
  field: 7,
  rig: 7,
  wells: 5,
  reports: 6,
  lastReport: 8,
  archivedOn: 8,
  actions: 11,
};

const leftAlignedColumnIds = new Set(["name", "client", "field", "rig"]);

// Searches in the browser while the list is short; the API should do it once it paginates.
function matchesQuery(project: ArchivedProject, query: string) {
  const text = `${project.name} ${project.client} ${project.field}`;
  return text.toLowerCase().includes(query.trim().toLowerCase());
}

function SearchBox({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative w-72 max-w-full">
      <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search name, client, field…"
        aria-label="Search archived projects"
        className="pl-8"
      />
    </div>
  );
}

export function ArchivedProjectsTableCard() {
  const [query, setQuery] = useState("");
  const rows = useMemo(
    () => archivedProjects.filter((project) => matchesQuery(project, query)),
    [query],
  );

  const table = useTable({
    features: archivedProjectsTableFeatures,
    columns: archivedProjectsColumns,
    data: rows,
  });

  return (
    <OverviewCard
      title="Archive"
      meta={`${archivedProjects.length} archived`}
      actions={<SearchBox value={query} onChange={setQuery} />}
    >
      <DataTable
        table={table}
        columnWidths={columnWidths}
        leftAlignedColumnIds={leftAlignedColumnIds}
        rowHeaderColumnId="name"
      />
      {rows.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">
          No archived project matches your search.
        </p>
      )}
    </OverviewCard>
  );
}
