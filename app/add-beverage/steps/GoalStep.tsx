/** app/add-beverage/steps/GoalStep.tsx (예시) */
import React from "react";
import { View, Pressable, Text } from "react-native";
import { useFormContext } from "react-hook-form";

const GoalStep: React.FC = () => {
  const { setValue, watch } = useFormContext();
  const goal = watch("goal");

  return (
    <View style={{ padding: 16, gap: 12, flexDirection: "row" }}>
      {(["include", "exclude"] as const).map((g) => (
        <Pressable
          key={g}
          onPress={() => setValue("goal", g, { shouldDirty: true, shouldValidate: true })}
          style={{ padding: 12, borderWidth: goal === g ? 2 : 1, borderRadius: 8 }}
        >
          <Text>{g === "include" ? "포함" : "미포함"}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default GoalStep;
