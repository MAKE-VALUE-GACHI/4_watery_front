import { useStepSelection } from "@/app/add-beverage/utils/useStepSelection";
import { stepsStyles } from "@/app/add-beverage/steps/steps.styles";
import { ThemedView } from "@/components/ThemedView";
import DefaultBeverageOption from "@/components/AddBeverage/DefaultBeverageOption";
import React from "react";
import { LN1, BN2, L2, BN1 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import CustomBottomSheet from "@/components/CustomBottomSheet/CustomBottomSheet";
import { View, Pressable } from "react-native";

const defaultOptions = ["커피", "녹차", "콜라"];

interface DefaultStepProps {
  onSelectionChange?: (selected: boolean) => void;
}
const DefaultStep: React.FC<DefaultStepProps> = ({ onSelectionChange }) => {
  const { selectedIdx, changeSelectedOption } = useStepSelection(
    "default",
    defaultOptions,
    onSelectionChange,
  );

  return (
    <CustomBottomSheet staticMode>
      <ThemedView style={stepsStyles.addContainer}>
        <BN2 style={stepsStyles.title} lightColor={Colors.neutral_600}>
          기록할 음료 선택
        </BN2>

        <ThemedView style={stepsStyles.DefaultButtons}>
          {defaultOptions.map((option, idx) => (
            <DefaultBeverageOption
              key={`beverage_option_${idx}`}
              title={option}
              isSelected={selectedIdx === idx + 1}
              optionIdx={idx + 1}
              onPress={() => changeSelectedOption(idx + 1)}
            />
          ))}
        </ThemedView>

        <ThemedView style={stepsStyles.dividerContainer}>
          <View style={stepsStyles.dividerLine} />
          <L2 style={stepsStyles.orText}>혹은</L2>
          <View style={stepsStyles.dividerLine} />
        </ThemedView>

        {/* ✅ 직접 만들기 → 2단계로 진입 */}
        <Pressable style={stepsStyles.customAddButton} onPress={() => console.log("")}>
          <BN1 style={stepsStyles.customAddButtonTitle}>직접 음료 만들기</BN1>
          <LN1 style={stepsStyles.customAddButtonDescription}>
            찾는 음료가 없다면 직접 추가해보세요.
          </LN1>
        </Pressable>
      </ThemedView>
    </CustomBottomSheet>
  );
};

export default DefaultStep;
