import RecordTimePickerSection from "@/components/CustomBottomSheet/RecordTimePickerSection";
import CustomButton from "@/components/CustomButton/CustomButton";
import { BN1 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { verticalScale } from "@/libs/utils/scaling";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import addPastRecordStyles from "./AddPastRecord.styles";

interface TimeStepProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  onBack: () => void;
  onSubmit: () => void;
}

const TimeStep: React.FC<TimeStepProps> = ({
  selectedDate,
  setSelectedDate,
  onBack,
  onSubmit,
}) => {
  return (
    <View style={addPastRecordStyles.bottomSheetContainer}>
      <View style={addPastRecordStyles.timeModeHeader}>
        <TouchableOpacity onPress={onBack}>
          <MaterialIcons
            name={"arrow-back"}
            size={verticalScale(24)}
            color={Colors.neutral_400}
          />
        </TouchableOpacity>
        <BN1 style={{ fontWeight: "bold" }}>시간 선택</BN1>
      </View>

      <RecordTimePickerSection value={selectedDate} onChange={setSelectedDate} />

      <CustomButton
        title={"완료"}
        textStyle={{ fontWeight: "bold" }}
        onPress={onSubmit}
      />
    </View>
  );
};

export default TimeStep;