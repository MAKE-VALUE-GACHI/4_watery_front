import addNewRecordStyles from "@/app/(tabs)/components/AddNewRecord.styles";
import { commonStyles } from "@/components/common.styles";
import CustomBottomSheet from "@/components/CustomBottomSheet/CustomBottomSheet";
import CustomButton from "@/components/CustomButton/CustomButton";
import { CustomTab, TabType } from "@/components/CustomTab";
import { BN1 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import RecordAmountSection from "@/components/CustomBottomSheet/RecordAmountSection";
import RecordTimePickerSection from "@/components/CustomBottomSheet/RecordTimePickerSection";
import addPastRecordStyles from "@/app/record-history/components/AddPastRecord.styles";
import { verticalScale } from "@/libs/utils/scaling";

interface addNewRecordProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddNewRecord: React.FC<addNewRecordProps> = ({ isOpen, onClose }) => {
  const [currentTab, setCurrentTab] = useState<TabType>("물");
  const [currentVal, setCurrentVal] = useState(500);
  const [addTimeMode, setAddTimeMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const setTimeMode = () => {
    // TODO: 음료량 기록 API 연동 시 삭제 + 연동하기
    setAddTimeMode(true);
  };

  const addTime = () => {
    // TODO: 완료 시 submit API 연동
    onClose();
  };

  const goBack = () => {
    setAddTimeMode(false);
  };

  const handleClose = () => {
    // 기존 값은 유지, setTimeMode 만 false 처리
    // TODO: 이 부분에 대한 로직 논의
    setAddTimeMode(false);
    onClose();
  };

  return (
    <CustomBottomSheet isOpen={isOpen} onClose={handleClose}>
      {!addTimeMode ? (
        <View style={addNewRecordStyles.bottomSheetContainer}>
          <View style={commonStyles.flexRow}>
            <CustomTab
              selectedTab={currentTab}
              onSelectTab={(tab) => setCurrentTab(tab)}
              visibleTabs={["물", "커피", "녹차"]}
            />
          </View>

          <RecordAmountSection currentVal={currentVal} setCurrentVal={setCurrentVal} />

          <CustomButton
            title={"시간 추가"}
            textStyle={{ fontWeight: "bold" }}
            onPress={setTimeMode}
          />
        </View>
      ) : (
        <View style={addNewRecordStyles.bottomSheetContainer}>
          <View style={addPastRecordStyles.timeModeHeader}>
            <TouchableOpacity onPress={goBack}>
              <MaterialIcons
                name={"arrow-back"}
                size={verticalScale(24)}
                color={Colors.neutral_400}
              />
            </TouchableOpacity>
            <BN1 style={{ fontWeight: "bold" }}>시간 선택</BN1>
          </View>

          <RecordTimePickerSection value={selectedDate} onChange={setSelectedDate} />

          <CustomButton title={"완료"} textStyle={{ fontWeight: "bold" }} onPress={addTime} />
        </View>
      )}
    </CustomBottomSheet>
  );
};

export default AddNewRecord;
