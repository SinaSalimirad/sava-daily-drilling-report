import { cn } from "cn";

const tones = {
  good: "border border-status-good-border bg-status-good-bg text-status-good-fg",
  warning:
    "border border-status-warning-border bg-status-warning-bg text-status-warning-fg",
  critical:
    "border border-status-critical-border bg-status-critical-bg text-status-critical-fg",
  info: "border border-status-info-border bg-status-info-bg text-status-info-fg",
  neutral: "border bg-secondary text-secondary-foreground",
};

// A small pill. A dot is added to the warning tone so the state is not color-only.
export function StatusBadge({
  tone = "neutral",
  children,
  className,
}: {
  tone?: keyof typeof tones;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {tone === "warning" && (
        <span className="size-2 rounded-full bg-status-warning" aria-hidden />
      )}
      {children}
    </span>
  );
}
