import { useState } from "react";
import {
  UNIT_OPTIONS,
  UNIT_PRESETS,
  type UnitsPreset,
} from "@/app/dashboard/master-data/projects/new/_components/new-project-types";
import { NewProjectUnitChip } from "@/app/dashboard/master-data/projects/new/_components/new-project-unit-chip";

export function NewProjectUnitsPicker({
  value,
  onChange,
}: {
  value: UnitsPreset;
  onChange: (value: UnitsPreset) => void;
}) {
  const preset = UNIT_PRESETS[value];
  // Only Custom's chips are editable, and only for the session: this preview
  // has no form field of its own yet, so a switch here does not survive a
  // preset change or a page reload.
  const [customUnits, setCustomUnits] = useState<Record<string, string>>(() =>
    Object.fromEntries(UNIT_PRESETS.custom.chips),
  );

  function setCustomUnit(quantity: string, unit: string) {
    setCustomUnits((current) => ({ ...current, [quantity]: unit }));
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        role="radiogroup"
        aria-label="Unit preset"
        className="grid grid-cols-1 gap-3 sm:grid-cols-3"
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
        {preset.chips.map(([quantity, presetUnit]) => (
          <NewProjectUnitChip
            key={quantity}
            quantity={quantity}
            unit={
              value === "custom"
                ? (customUnits[quantity] ?? presetUnit)
                : presetUnit
            }
            options={value === "custom" ? UNIT_OPTIONS[quantity] : undefined}
            onChange={(unit) => setCustomUnit(quantity, unit)}
          />
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        {value === "custom"
          ? "Click a unit to switch it."
          : "Each quantity can be changed one by one on the project's settings after it is created."}
      </p>
    </div>
  );
}
