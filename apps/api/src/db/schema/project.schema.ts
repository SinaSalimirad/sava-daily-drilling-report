import { date, integer, pgTable, text } from "drizzle-orm/pg-core";
import { authorship } from "./_shared/authorship";
import { id, timestamps } from "./_shared/columns";

export const projects = pgTable("projects", {
  ...id,
  name: text().notNull().unique(),
  operator: text().notNull(),
  contractor: text().notNull(),
  field: text(),
  well: integer(),
  active_well: integer(),
  last_report: date(),
  status: text().notNull(),
  currency: text().notNull(),
  ...timestamps,
  ...authorship,
});
