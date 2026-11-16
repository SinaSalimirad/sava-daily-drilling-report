import { StatusBadge } from "@/app/dashboard/overview/_components/status-badge";

// The frame every trend shares: a title, an optional subtitle, and the content.
export function OverviewCard({
  title,
  subtitle,
  meta,
  version,
  children,
}: {
  title: string;
  subtitle?: string;
  meta?: string;
  version?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-label={title}
      className="flex flex-col gap-5 rounded-2xl border bg-background p-5 shadow-xs"
    >
      <header className="flex items-baseline gap-3">
        <h2 className="text-sm font-semibold">{title}</h2>
        {subtitle && (
          <span className="text-xs text-muted-foreground">{subtitle}</span>
        )}
        {meta && (
          <span className="ml-auto text-xs font-medium text-muted-foreground">
            {meta}
          </span>
        )}
        {version && (
          <StatusBadge className={meta ? "" : "ml-auto"}>{version}</StatusBadge>
        )}
      </header>
      {children}
    </section>
  );
}
