import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FlatList } from "@/components/FlatList";
import { useLogsQuery } from "@/state/queries/logs";

import { type Log } from "@/db/schema";

type LogProps = {
  log: Log;
};

const Log = ({ log }: LogProps) => {
  return (
    <ThemedView>
      <ThemedText>{log.id}</ThemedText>
      <ThemedText>{log.species}</ThemedText>
    </ThemedView>
  );
};

export default function HomeScreen() {
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
      <FlatList
        data={logs.data}
        renderItem={({ item }) => {
          return <Log log={item} />;
        }}
      />
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
