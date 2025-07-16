import { StepContainer } from "@/app/onboard-survey/steps/steps.styles";
import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import WheelPicker from "react-native-wheel-picker-expo";

const years = Array.from({ length: 100 }, (_, i) => 2025 - i);

const BirthYearStep = () => {
  const { setValue, watch } = useFormContext();
  const birthYear = watch("birthYear");
  const [selectedIndex, setSelectedIndex] = useState(
    birthYear ? years.indexOf(Number(birthYear)) : 0,
  );

  useEffect(() => {
    if (birthYear) {
      setSelectedIndex(years.indexOf(Number(birthYear)));
    }
  }, [birthYear]);

  return (
    <StepContainer>
      <WheelPicker
        height={300}
        width={150}
        initialSelectedIndex={selectedIndex}
        selectedStyle={{ borderColor: Colors.neutral_200, borderWidth: 1 }}
        items={years.map((name) => ({ label: String(name), value: String(name) }))}
        onChange={({ index, item }) => {
          setSelectedIndex(index);
          setValue("birthYear", item.label);
        }}
      />
    </StepContainer>
  );
};

export default BirthYearStep;
