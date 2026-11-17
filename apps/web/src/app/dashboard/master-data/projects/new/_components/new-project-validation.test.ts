import { describe, expect, it } from "bun:test";
import { EMPTY_NEW_PROJECT_FORM } from "@/app/dashboard/master-data/projects/new/_components/new-project-types";
import { getNewProjectErrors } from "@/app/dashboard/master-data/projects/new/_components/new-project-validation";

describe("getNewProjectErrors", () => {
  it("requires name, client, contractor and rig", () => {
    const errors = getNewProjectErrors(EMPTY_NEW_PROJECT_FORM);

    expect(errors.name).toBeDefined();
    expect(errors.client).toBeDefined();
    expect(errors.contractor).toBeDefined();
    expect(errors.rig).toBeDefined();
  });

  it("treats a whitespace-only value as empty", () => {
    const errors = getNewProjectErrors({
      ...EMPTY_NEW_PROJECT_FORM,
      name: "   ",
    });

    expect(errors.name).toBeDefined();
  });

  it("has no errors once every required field is filled", () => {
    const errors = getNewProjectErrors({
      ...EMPTY_NEW_PROJECT_FORM,
      name: "Project A-03",
      client: "Sava Energy",
      contractor: "Contractor A",
      rig: "Rig A-7",
    });

    expect(errors).toEqual({});
  });

  it("leaves optional fields out of validation", () => {
    const errors = getNewProjectErrors({
      ...EMPTY_NEW_PROJECT_FORM,
      name: "Project A-03",
      client: "Sava Energy",
      contractor: "Contractor A",
      rig: "Rig A-7",
      code: "",
      field: "",
      rigPhone: "",
      warehousePhone: "",
    });

    expect(errors).toEqual({});
  });
});
