import { StepContainer } from "@/app/onboard-survey/steps/steps.styles";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import WheelPicker from "react-native-wheel-picker-expo";
import { BN2 } from "@/components/ThemedText";
import { FlexRow } from "@/components/common.styles";

const weightRange = Array.from({ length: 171 }, (_, i) => i + 30); // 30~200kg

const WeightStep = () => {
  const { setValue, watch } = useFormContext();
  const weight = watch("weight");
  const [selectedIndex, setSelectedIndex] = useState(
    weight ? weightRange.indexOf(Number(weight)) : 30,
  );

  return (
    <StepContainer>
      <FlexRow alignItems={"center"}>
        <WheelPicker
          height={300}
          width={150}
          initialSelectedIndex={selectedIndex}
          selectedStyle={{ borderColor: Colors.neutral_200, borderWidth: 1 }}
          items={weightRange.map((name) => ({ label: String(name), value: String(name) }))}
          onChange={({ index, item }) => {
            setSelectedIndex(index);
            setValue("birthYear", item.label);
          }}
        />
        <BN2 lightColor={Colors.neutral_600}>kg</BN2>
      </FlexRow>
    </StepContainer>
  );
};

export default WeightStep;
