// Placeholder report: replace it with data from the API.
// Related fields are next to each other: well, field/rig, operator/contractor, reps.
const report = {
  fields: [
    { label: "Well", value: "PYW-24ST1" },
    { label: "Well designation", value: "Directional" },
    { label: "Field", value: "Pazanan" },
    { label: "Rig", value: "GPTK-G2" },
    { label: "Operator", value: "KKC" },
    { label: "Contractor", value: "GPTK" },
    { label: "Operator Rep.", value: "A. Rahimi, M. Karimi" },
    { label: "Contractor Rep.", value: "R. Sadeghi, H. Nouri" },
    { label: "Spud", value: "28 Jul 2026 · day 23" },
    { label: "Section", value: "12¼″ · KCl / Polymer" },
  ],
  status: "Draft",
  revision: 4,
  editedAt: "07:12",
};

export function ReportInfoBar() {
  return (
    <section
      aria-label="Report information"
      className="flex overflow-hidden rounded-2xl border bg-background shadow-xs"
    >
      {/* One row: on narrow screens the fields scroll sideways instead of wrapping. */}
      <dl className="flex min-w-0 flex-1 overflow-x-auto">
        {report.fields.map(({ label, value }) => (
          <div key={label} className="shrink-0 border-r px-5 py-3">
            <dt className="text-xs tracking-wide text-muted-foreground uppercase">
              {label}
            </dt>
            <dd className="text-sm font-semibold whitespace-nowrap">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex shrink-0 items-center gap-2 px-5 py-3 text-xs font-medium">
        <span className="flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-amber-900 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100">
          <span className="size-2 rounded-full bg-amber-500" aria-hidden />
          {report.status} · rev {report.revision}
        </span>
        <span className="rounded-full border bg-muted px-2.5 py-1 text-muted-foreground">
          edited {report.editedAt}
        </span>
      </div>
    </section>
  );
}
