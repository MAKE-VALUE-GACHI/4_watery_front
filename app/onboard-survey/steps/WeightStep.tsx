import { stepsStyles } from "@/app/onboard-survey/steps/steps.styles";
import { BN2 } from "@/components/ThemedText";
import { commonStyles } from "@/components/common.styles";
import { Colors } from "@/constants/Colors";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import WheelPicker from "react-native-wheel-picker-expo";
import { ThemedView } from "@/components/ThemedView";

const weightRange = Array.from({ length: 171 }, (_, i) => i + 30); // 30~200kg

const WeightStep = () => {
  const { setValue, watch } = useFormContext();
  const weight = watch("weight");
  const [selectedIdx, setSelectedIdx] = useState(
    weight ? Math.max(0, weightRange.indexOf(Number(weight))) : 30, // 60kg이 기본값
  );

  useEffect(() => {
    if (weight) {
      setSelectedIdx(Math.max(0, weightRange.indexOf(Number(weight))));
    }
  }, [weight]);

  return (
    <ThemedView style={stepsStyles.StepContainer}>
      <ThemedView style={{ ...commonStyles.flexRow, alignItems: "center" }}>
        <WheelPicker
          height={300}
          width={150}
          initialSelectedIndex={selectedIdx}
          selectedStyle={{ borderColor: Colors.neutral_200, borderWidth: 1 }}
          items={weightRange.map((name) => ({ label: String(name), value: String(name) }))}
          onChange={({ index, item }) => {
            setSelectedIdx(index);
            setValue("weight", item.label);
          }}
        />
        <BN2 lightColor={Colors.neutral_600}>kg</BN2>
      </ThemedView>
    </ThemedView>
  );
};

export default WeightStep;
