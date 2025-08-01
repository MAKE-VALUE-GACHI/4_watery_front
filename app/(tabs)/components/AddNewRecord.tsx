import addNewRecordStyles from "@/app/(tabs)/components/AddNewRecord.styles";
import { commonStyles } from "@/components/common.styles";
import CustomBottomSheet from "@/components/CustomBottomSheet/CustomBottomSheet";
import { CustomTab, TabType } from "@/components/CustomTab";
import React, { useState } from "react";
import { View } from "react-native";
import CustomSlider from "@/components/CustomSlider/CustomSlider";
import { BN1, LN1 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/CustomButton/CustomButton";
import { useBeverageStore } from "@/stores/beverageStore";
import { dummyBeverages } from "@/app/(tabs)/constants/beverageDataSet";

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

        <View style={addNewRecordStyles.header}>
          <BN1 lightColor={Colors.neutral_700} style={{ fontWeight: "bold" }}>
            마신 양을 얼마나 추가할까요?
          </BN1>

          <View style={addNewRecordStyles.inputMeasurement}>
            <BN1 lightColor={Colors.neutral_700} style={{ fontWeight: "bold" }}>
              {currentVal}
            </BN1>
            <LN1 lightColor={Colors.neutral_400}>ml</LN1>
          </View>
        </View>

        <CustomSlider
          sliderVal={currentVal}
          onValueChange={(val) => setCurrentVal(val[0])}
          step={50}
          animationType={"spring"}
          maximumValue={1000}
          minimumValue={0}
        />

        <CustomButton title={"확인"} textStyle={{ fontWeight: "bold" }} onPress={addAmount} />
      </View>
    </CustomBottomSheet>
  );
};

export default AddNewRecord;
