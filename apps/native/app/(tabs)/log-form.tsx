import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Alert, Button, StyleSheet, TextInput } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useLogsQuery } from "@/state/queries/logs";
import { speciesOptions } from "@/validation/species";
import { zNewLog, type NewLog } from "@/validation/log";

const logFormSchema = zNewLog;
type LogFormValues = NewLog;

export default function LogFormScreen() {
  const logs = useLogsQuery();

  const form = useForm<LogFormValues>({
    defaultValues: {
      diameter: undefined,
      grade: undefined,
      length: undefined,
      species: undefined,
    },
    resolver: zodResolver(logFormSchema),
  });

  const { control, handleSubmit } = form;

  if (logs.error) {
    return (
      <ThemedView>
        <ThemedText>There was an error loading the logs.</ThemedText>
      </ThemedView>
    );
  }

  const onSubmit = (data: LogFormValues) => {
    return Alert.alert(JSON.stringify(data, null, 2));
  };

  if (logs.data) {
    return (
      <ThemedView>
        <FormProvider {...form}>
          <ThemedText>Diameter</ThemedText>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Diameter"
                onBlur={onBlur}
                onChangeText={(text) => onChange(Number(text))}
                value={value ? String(value) : ""}
              />
            )}
            name="diameter"
          />
          <ThemedText>Grade</ThemedText>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Grade"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ?? ""}
              />
            )}
            name="grade"
          />
          <ThemedText>Length</ThemedText>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Length"
                onBlur={onBlur}
                onChangeText={(text) => onChange(Number(text))}
                value={value ? String(value) : ""}
              />
            )}
            name="length"
          />
          <ThemedText>Species</ThemedText>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <RNPickerSelect
                items={speciesOptions}
                onValueChange={onChange}
                placeholder="Species"
                value={value ?? ""}
              />
            )}
            name="species"
          />
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </FormProvider>
      </ThemedView>
    );
  }
}

const styles = StyleSheet.create({
  input: {},
});
