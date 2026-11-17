import { sql } from "drizzle-orm";
import { timestamp, uuid } from "drizzle-orm/pg-core";

// Spread them into a table: pgTable('wells', { ...id, name: text().notNull(), ...timestamps, ...authorship })

/** `id uuid primary key default gen_random_uuid()` */
export const id = {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
};

export const timestamps = {
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
};

/**
 * TODO:
 *      implement authorship (...authorship)
 *      fields: createdBy, updatedBy
 */
