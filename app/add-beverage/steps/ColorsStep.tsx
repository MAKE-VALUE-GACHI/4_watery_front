/** app/add-beverage/steps/ColorsStep.tsx (예시) */
import React from "react";
import { View, Pressable, Text } from "react-native";
import { useFormContext } from "react-hook-form";

const COLOR_KEYS = ["coffee", "greenTea", "cola", "water"] as const;

const ColorStep: React.FC = () => {
  const { setValue, watch } = useFormContext();
  const current = watch("color");

  return (
    <View style={{ padding: 16, gap: 12 }}>
      {COLOR_KEYS.map((k) => (
        <Pressable
          key={k}
          onPress={() => setValue("color", k, { shouldDirty: true, shouldValidate: true })}
          style={{ padding: 12, borderWidth: current === k ? 2 : 1, borderRadius: 8 }}
        >
          <Text>{k}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default ColorStep;
