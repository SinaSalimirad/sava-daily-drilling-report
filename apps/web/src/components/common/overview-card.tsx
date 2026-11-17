import { StatusBadge } from "@/components/common/status-badge";

// The frame every trend shares: a title, an optional subtitle, and the content.
// `actions` are controls (a search box, for example) at the right end of the header.
export function OverviewCard({
  title,
  subtitle,
  meta,
  version,
  actions,
  children,
}: {
  title: string;
  subtitle?: string;
  meta?: string;
  version?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-label={title}
      className="flex min-w-0 flex-col gap-5 rounded-2xl border bg-card p-5 shadow-xs"
    >
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="text-sm font-semibold">{title}</h2>
        {subtitle && (
          <span className="text-xs text-muted-foreground">{subtitle}</span>
        )}
        {meta && (
          <span className="ml-auto self-center text-xs font-medium text-muted-foreground">
            {meta}
          </span>
        )}
        {version && (
          <StatusBadge className={meta ? "" : "ml-auto"}>{version}</StatusBadge>
        )}
        {actions && (
          <div className={`self-center ${meta || version ? "" : "ml-auto"}`}>
            {actions}
          </div>
        )}
      </header>
      {children}
    </section>
  );
}
