// Placeholder presets: Units (rig info has no backend field yet) should come
// from the API once it exists, the same way `projects-data.ts` is a
// placeholder for the projects list. Currency is not a placeholder: it
// already has a shared contract (packages/schemas), so its value type comes
// from there instead of a second, hand-written copy.
import type { ProjectCurrency } from "schemas";

export type RigType = "onshore" | "offshore";
export type UnitsPreset = "oilfield" | "si" | "custom";

export type NewProjectFormValues = {
  name: string;
  code: string;
  client: string;
  contractor: string;
  currency: ProjectCurrency;
  rig: string;
  rigType: RigType;
  field: string;
  country: string;
  rigPhone: string;
  warehousePhone: string;
  units: UnitsPreset;
};

export const EMPTY_NEW_PROJECT_FORM: NewProjectFormValues = {
  name: "",
  code: "",
  client: "",
  contractor: "",
  currency: "USD",
  rig: "",
  rigType: "onshore",
  field: "",
  country: "Iran",
  rigPhone: "",
  warehousePhone: "",
  units: "oilfield",
};

export const CURRENCIES: { value: ProjectCurrency; label: string }[] = [
  { value: "USD", label: "USD — US dollar ($)" },
  { value: "EUR", label: "EUR — Euro (€)" },
  { value: "IRR", label: "IRR — Iranian rial" },
];

export type UnitPreset = {
  label: string;
  description: string;
  chips: [quantity: string, unit: string][];
};

const OILFIELD_CHIPS: UnitPreset["chips"] = [
  ["Volume", "bbl"],
  ["Mud weight", "PCF"],
  ["Pressure", "psi"],
  ["Depth", "m"],
  ["Diameter", "in"],
  ["Flow", "gal/min"],
  ["Concentration", "lb/bbl"],
  ["YP / gels", "lb/100 ft²"],
  ["Temperature", "°F"],
];

const SI_CHIPS: UnitPreset["chips"] = [
  ["Volume", "m³"],
  ["Mud weight", "SG"],
  ["Pressure", "bar"],
  ["Depth", "m"],
  ["Diameter", "in"],
  ["Flow", "m³/min"],
  ["Concentration", "kg/m³"],
  ["YP / gels", "Pa"],
  ["Temperature", "°C"],
];

export const UNIT_PRESETS: Record<UnitsPreset, UnitPreset> = {
  oilfield: {
    label: "Oil Field",
    description: "bbl · PCF · psi · m · gal/min · lb/bbl · °F",
    chips: OILFIELD_CHIPS,
  },
  si: {
    label: "SI",
    description: "m³ · SG · bar · m · m³/min · kg/m³ · °C",
    chips: SI_CHIPS,
  },
  // Starts as a copy of SI; NewProjectUnitsPicker lets each chip below be
  // switched individually, between the Oil Field and SI unit of that
  // quantity (see UNIT_OPTIONS).
  custom: {
    label: "Custom",
    description: "Change any unit below",
    chips: SI_CHIPS,
  },
};

// The units a Custom chip can switch between, for each quantity: its Oil
// Field unit and its SI unit (deduped where the two systems share a unit,
// like Depth's "m").
export const UNIT_OPTIONS: Record<string, string[]> = Object.fromEntries(
  OILFIELD_CHIPS.map(([quantity, oilfieldUnit], index) => {
    const siEntry = SI_CHIPS[index];
    if (!siEntry) throw new Error(`SI_CHIPS is missing a row for ${quantity}`);
    const options = Array.from(new Set([oilfieldUnit, siEntry[1]]));
    return [quantity, options];
  }),
);
