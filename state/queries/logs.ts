import { useMutation } from "@tanstack/react-query";
import { drizzle, useLiveQuery } from "drizzle-orm/expo-sqlite";
import { useSQLiteContext } from "expo-sqlite";

import * as schema from "@/db/schema";
import { type NewLog } from "@/validation/log";

function useLogsQuery() {
  const db = useSQLiteContext();
  const drizzleDb = drizzle(db, { schema });

  return useLiveQuery(drizzleDb.query.logs.findMany());
}

function useLogCreate(newLog: NewLog) {
  const db = useSQLiteContext();
  const drizzleDb = drizzle(db, { schema });

  return useMutation({
    mutationFn: async () => {
      return drizzleDb.insert(schema.logs).values([newLog]);
    },
  });
}

export { useLogCreate, useLogsQuery };
