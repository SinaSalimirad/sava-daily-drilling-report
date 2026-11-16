// Labeled figures in a row: a small uppercase label, a bold value and a muted unit.
export function StatGrid({
  stats,
}: {
  stats: { label: string; value: string; unit: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
      {stats.map(({ label, value, unit }) => (
        <div key={label}>
          <dt className="text-xs tracking-wide text-muted-foreground uppercase">
            {label}
          </dt>
          <dd className="text-xl font-semibold">
            {value}{" "}
            <span className="text-xs font-normal text-muted-foreground">
              {unit}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
