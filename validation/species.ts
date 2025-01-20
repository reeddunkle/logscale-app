import { z } from "zod";

const SPECIES_KEYS = [
  "ASH",
  "ASPEN",
  "BASSWOOD",
  "BEECH",
  "BIRCH",
  "CHERRY",
  "HARD_MAPLE",
  "HEMLOCK",
  "HICKORY",
  "PINE",
  "POPLAR",
  "RED_OAK",
  "SOFT_MAPLE",
  "WHITE_OAK",
] as const;

const zSpecies = z.enum(SPECIES_KEYS);

type SpeciesEnum = z.infer<typeof zSpecies>;

const speciesLabelMap: Record<SpeciesEnum, string> = {
  ASH: "Ash",
  ASPEN: "Aspen",
  BASSWOOD: "Basswood",
  BEECH: "Beech",
  BIRCH: "Birch",
  CHERRY: "Cherry",
  HARD_MAPLE: "Hard Maple",
  HEMLOCK: "Hemlock",
  HICKORY: "Hickory",
  PINE: "Pine",
  POPLAR: "Poplar",
  RED_OAK: "Red Oak",
  SOFT_MAPLE: "Soft Maple",
  WHITE_OAK: "White Oak",
};

const speciesOptions = SPECIES_KEYS.map((key) => {
  return {
    label: speciesLabelMap[key],
    value: key,
  };
});

export { speciesOptions, type SpeciesEnum, zSpecies };
