import { StatusBadge } from "@/app/dashboard/overview/_components/status-badge";

// One headline figure: label (with version), big value, optional visual, footer.
export function KpiTile({
  label,
  version,
  value,
  unit,
  unitClassName = "font-normal text-muted-foreground",
  valueClassName,
  visual,
  footer,
}: {
  label: string;
  version?: string;
  value: string;
  unit?: string;
  unitClassName?: string;
  valueClassName?: string;
  visual?: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border bg-background p-5 shadow-xs">
      <header className="flex items-center gap-2">
        <h3 className="text-xs tracking-widest text-muted-foreground uppercase">
          {label}
        </h3>
        {version && <StatusBadge className="uppercase">{version}</StatusBadge>}
      </header>
      <p className={`text-3xl font-semibold ${valueClassName ?? ""}`}>
        {value}
        {unit && (
          <span className={`ml-1.5 text-sm ${unitClassName}`}>{unit}</span>
        )}
      </p>
      {visual}
      <div className="mt-auto text-xs text-muted-foreground">{footer}</div>
    </article>
  );
}
