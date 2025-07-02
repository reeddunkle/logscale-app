import { StyleSheet, TextInput } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { FlatList } from "@/components/flat-list";
import { useLogsQuery } from "@/state/queries/logs";

import { type Log } from "@/db/schema";

type LogProps = {
  log: Log;
};

const LogRow = ({ log }: LogProps) => {
  return (
    <ThemedView>
      <ThemedText>{log.id}</ThemedText>
      <ThemedText>{log.species}</ThemedText>
    </ThemedView>
  );
};

export default function LogsScreen() {
  const logs = useLogsQuery();

  if (logs.error) {
    return (
      <ThemedView>
        <ThemedText>There was an error loading the logs.</ThemedText>
      </ThemedView>
    );
  }

  if (logs.data) {
    return (
      <ThemedView>
        <FlatList
          data={logs.data}
          renderItem={({ item }) => {
            return <LogRow log={item} />;
          }}
        />
      </ThemedView>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
