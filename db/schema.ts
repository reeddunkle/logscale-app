import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const logs = sqliteTable("logs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  diameter: real("diameter"),
  grade: text("grade"),
  length: real("length"),
  species: text("species"),
});

export type Log = typeof logs.$inferSelect;
