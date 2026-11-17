// Placeholder presets: Currency and Units should come from the API once it exists, the
// same way `projects-data.ts` is a placeholder for the projects list.

export type RigType = "onshore" | "offshore";
export type Currency = "USD" | "EUR" | "IRR";
export type UnitsPreset = "workbook" | "si";

export type NewProjectFormValues = {
  name: string;
  code: string;
  client: string;
  contractor: string;
  currency: Currency;
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
  units: "workbook",
};

export const CURRENCIES: { value: Currency; label: string }[] = [
  { value: "USD", label: "USD — US dollar ($)" },
  { value: "EUR", label: "EUR — Euro (€)" },
  { value: "IRR", label: "IRR — Iranian rial" },
];

export type UnitPreset = {
  label: string;
  description: string;
  chips: [quantity: string, unit: string][];
};

export const UNIT_PRESETS: Record<UnitsPreset, UnitPreset> = {
  workbook: {
    label: "Workbook",
    description: "bbl · PCF · psi · m · gal/min · lb/bbl · °F",
    chips: [
      ["Volume", "bbl"],
      ["Mud weight", "PCF"],
      ["Pressure", "psi"],
      ["Depth", "m"],
      ["Diameter", "in"],
      ["Flow", "gal/min"],
      ["Concentration", "lb/bbl"],
      ["YP / gels", "lb/100 ft²"],
      ["Temperature", "°F"],
    ],
  },
  si: {
    label: "SI",
    description: "m³ · SG · bar · m · m³/min · kg/m³ · °C",
    chips: [
      ["Volume", "m³"],
      ["Mud weight", "SG"],
      ["Pressure", "bar"],
      ["Depth", "m"],
      ["Diameter", "in"],
      ["Flow", "m³/min"],
      ["Concentration", "kg/m³"],
      ["YP / gels", "Pa"],
      ["Temperature", "°C"],
    ],
  },
};
