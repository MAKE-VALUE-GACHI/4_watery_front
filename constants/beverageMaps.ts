import { Colors } from "@/constants/Colors";

export type WaveKey = "coffee" | "greenTea" | "cola" | "default";

export const labelToWaveKey: Record<string, WaveKey> = {
  커피: "coffee",
  녹차: "greenTea",
  콜라: "cola",
};

export const waveKeyToColorsKey: Record<WaveKey, keyof (typeof Colors)["waves"]> = {
  coffee: "coffee",
  greenTea: "green_tea",
  cola: "cola",
  default: "default",
};
