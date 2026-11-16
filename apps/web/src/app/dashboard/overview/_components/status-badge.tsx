import { cn } from "cn";

const tones = {
  warning:
    "border border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100",
  success:
    "border border-green-300 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100",
  neutral: "border bg-muted text-muted-foreground",
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
        <span className="size-2 rounded-full bg-amber-500" aria-hidden />
      )}
      {children}
    </span>
  );
}
