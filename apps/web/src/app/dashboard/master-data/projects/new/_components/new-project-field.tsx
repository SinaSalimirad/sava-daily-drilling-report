import type * as React from "react";
import { useId } from "react";
import { Input } from "@/components/ui/input";

// A labeled input with a help line that turns into an error message once a required
// field is left empty and the user tried to submit.
export function NewProjectField({
  label,
  optional,
  help,
  error,
  ...inputProps
}: {
  label: string;
  optional?: boolean;
  help?: string;
  error?: string;
} & React.ComponentProps<typeof Input>) {
  const inputId = useId();

  return (
    <div className="flex flex-col gap-1.5 text-sm">
      <label htmlFor={inputId} className="font-medium">
        {label}
        {optional && (
          <span className="font-normal text-muted-foreground"> · optional</span>
        )}
      </label>
      <Input id={inputId} aria-invalid={!!error} {...inputProps} />
      <span
        className={
          error
            ? "text-xs font-medium text-destructive"
            : "text-xs text-muted-foreground"
        }
      >
        {error ?? help}
      </span>
    </div>
  );
}
