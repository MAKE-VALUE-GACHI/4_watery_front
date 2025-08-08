import { commonStyles } from "@/components/common.styles";
import RecordAmountSection from "@/components/CustomBottomSheet/RecordAmountSection";
import CustomButton from "@/components/CustomButton/CustomButton";
import { CustomTab, TabType } from "@/components/CustomTab";
import React from "react";
import { View } from "react-native";
import addPastRecordStyles from "./AddPastRecord.styles";

interface AmountStepProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  currentVal: number;
  setCurrentVal: (value: number) => void;
  onNext: () => void;
}

const AmountStep: React.FC<AmountStepProps> = ({
  currentTab,
  onSelectTab,
  currentVal,
  setCurrentVal,
  onNext,
}) => {
  return (
    <View style={addPastRecordStyles.bottomSheetContainer}>
      <View style={commonStyles.flexRow}>
        <CustomTab
          selectedTab={currentTab}
          onSelectTab={onSelectTab}
          visibleTabs={["물", "커피", "녹차"]}
        />
      </View>

      <RecordAmountSection currentVal={currentVal} setCurrentVal={setCurrentVal} />

      <CustomButton
        title={"시간 추가"}
        textStyle={{ fontWeight: "bold" }}
        onPress={onNext}
      />
    </View>
  );
};

export default AmountStep;