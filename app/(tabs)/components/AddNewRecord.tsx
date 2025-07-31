import addNewRecordStyles from "@/app/(tabs)/components/AddNewRecord.styles";
import { commonStyles } from "@/components/common.styles";
import CustomBottomSheet from "@/components/CustomBottomSheet/CustomBottomSheet";
import { CustomTab, TabType } from "@/components/CustomTab";
import React, { useState } from "react";
import { View } from "react-native";
import CustomButton from "@/components/CustomButton/CustomButton";
import { useBeverageStore } from "@/stores/beverageStore";
import { dummyBeverages } from "@/app/(tabs)/constants/beverageDataSet";
import RecordAmountSection from "@/components/CustomBottomSheet/RecordAmountSection";

interface addNewRecordProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddNewRecord: React.FC<addNewRecordProps> = ({ isOpen, onClose }) => {
  const [currentTab, setCurrentTab] = useState<TabType>("물");
  const [currentVal, setCurrentVal] = useState(500);
  const { currentIndex } = useBeverageStore();

  const addAmount = () => {
    // TODO: 음료량 기록 API 연동 시 삭제 + 연동하기
    dummyBeverages[currentIndex].totalAmount += currentVal;
    onClose();
  };

  return (
    <CustomBottomSheet isOpen={isOpen} onClose={onClose}>
      <View style={addNewRecordStyles.bottomSheetContainer}>
        <View style={commonStyles.flexRow}>
          <CustomTab
            selectedTab={currentTab}
            onSelectTab={(tab) => setCurrentTab(tab)}
            visibleTabs={["물", "커피", "녹차"]}
          />
        </View>

        <RecordAmountSection currentVal={currentVal} setCurrentVal={setCurrentVal} />

        <CustomButton title={"확인"} textStyle={{ fontWeight: "bold" }} onPress={addAmount} />
      </View>
    </CustomBottomSheet>
  );
};

export default AddNewRecord;
