import { drizzle, useLiveQuery } from "drizzle-orm/expo-sqlite";
import { useSQLiteContext } from "expo-sqlite";
import * as schema from "@/db/schema";

function useLogsQuery() {
  const db = useSQLiteContext();
  const drizzleDb = drizzle(db, { schema });

  return useLiveQuery(drizzleDb.query.logs.findMany());
}

export { useLogsQuery };
