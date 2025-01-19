import { useQuery } from "@tanstack/react-query";

import { drizzle } from "drizzle-orm/expo-sqlite";
import { useSQLiteContext } from "expo-sqlite";

function useLogsQuery() {
  const db = useSQLiteContext();
  const drizzleDb = drizzle(db);

  return useQuery({
    queryFn: async () => {
      return drizzleDb.query.logs.findMany();
    },
  });
}
