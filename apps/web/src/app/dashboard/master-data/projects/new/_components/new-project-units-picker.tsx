import {
  UNIT_PRESETS,
  type UnitsPreset,
} from "@/app/dashboard/master-data/projects/new/_components/new-project-types";

export function NewProjectUnitsPicker({
  value,
  onChange,
}: {
  value: UnitsPreset;
  onChange: (value: UnitsPreset) => void;
}) {
  const preset = UNIT_PRESETS[value];

  return (
    <div className="flex flex-col gap-4">
      <div
        role="radiogroup"
        aria-label="Unit preset"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {Object.entries(UNIT_PRESETS).map(([key, option]) => (
          <label
            key={key}
            className={
              key === value
                ? "flex cursor-pointer gap-3 rounded-lg border border-primary p-3.5 ring-1 ring-primary"
                : "flex cursor-pointer gap-3 rounded-lg border p-3.5 hover:bg-muted/50"
            }
          >
            <input
              type="radio"
              name="units"
              value={key}
              checked={key === value}
              onChange={() => onChange(key as UnitsPreset)}
              className="mt-0.5 size-4 accent-foreground"
            />
            <span className="flex flex-col">
              <span className="text-sm font-semibold">{option.label}</span>
              <span className="text-xs text-muted-foreground">
                {option.description}
              </span>
            </span>
          </label>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {preset.chips.map(([quantity, unit]) => (
          <span
            key={quantity}
            className="flex gap-1.5 rounded-md bg-muted px-2.5 py-1 text-xs"
          >
            <em className="text-muted-foreground not-italic">{quantity}</em>
            <b className="font-medium">{unit}</b>
          </span>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        Each quantity can be changed one by one on the project&apos;s settings
        after it is created.
      </p>
    </div>
  );
}
