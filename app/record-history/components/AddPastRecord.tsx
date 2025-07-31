import addNewRecordStyles from "@/app/(tabs)/components/AddNewRecord.styles";
import { addPastRecordStyles } from "@/app/record-history/components/AddPastRecord.styles";
import { commonStyles } from "@/components/common.styles";
import CustomBottomSheet from "@/components/CustomBottomSheet/CustomBottomSheet";
import CustomButton from "@/components/CustomButton/CustomButton";
import CustomSlider from "@/components/CustomSlider/CustomSlider";
import { CustomTab, TabType } from "@/components/CustomTab";
import { BN1, LN1 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import WheelPicker from "react-native-wheel-picker-expo";

interface addNewRecordProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddNewRecord: React.FC<addNewRecordProps> = ({ isOpen, onClose }) => {
  const [currentTab, setCurrentTab] = useState<TabType>("물");
  const [currentVal, setCurrentVal] = useState(500);
  const [addTimeMode, setAddTimeMode] = useState(false);

  const ampmOptions = [
    { label: "오전", value: "AM" },
    { label: "오후", value: "PM" },
  ];
  const hourOptions = Array.from({ length: 12 }, (_, i) => ({
    label: String(i + 1),
    value: String(i + 1),
  }));
  const minuteOptions = Array.from({ length: 60 }, (_, i) => ({
    label: i.toString().padStart(2, "0"),
    value: String(i),
  }));

  // 현재 시간 계산
  const now = new Date();
  const nowHour24 = now.getHours();
  const nowMinute = now.getMinutes();
  const initialAmpm = nowHour24 < 12 ? "AM" : "PM";
  const initialHour = (nowHour24 % 12 || 12).toString();
  const initialMinute = nowMinute.toString().padStart(2, "0");

  const [ampm, setAmpm] = useState(initialAmpm);
  const [hour, setHour] = useState(initialHour);
  const [minute, setMinute] = useState(initialMinute);

  const setTimeMode = () => {
    // TODO: 음료량 기록 API 연동 시 삭제 + 연동하기
    setAddTimeMode(true);
  };

  const addTime = () => {
    onClose();
  };

  const goBack = () => {
    setAddTimeMode(false);
  };

  return (
    <CustomBottomSheet isOpen={isOpen} onClose={onClose}>
      {!addTimeMode ? (
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
              <MaterialIcons name={"arrow-back"} size={16} color={Colors.neutral_400} />
            </TouchableOpacity>
            <BN1 style={{ fontWeight: "bold" }}>시간 선택</BN1>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <WheelPicker
              height={172}
              width={80}
              items={ampmOptions}
              selectedStyle={{ borderColor: Colors.neutral_200, borderWidth: 1 }}
              initialSelectedIndex={ampm === "AM" ? 0 : 1}
              onChange={({ item }) => setAmpm(item.value)}
            />
            <WheelPicker
              height={172}
              width={80}
              items={hourOptions}
              selectedStyle={{ borderColor: Colors.neutral_200, borderWidth: 1 }}
              initialSelectedIndex={Number(hour) - 1}
              onChange={({ item }) => setHour(item.value)}
            />
            <WheelPicker
              height={172}
              width={80}
              items={minuteOptions}
              selectedStyle={{ borderColor: Colors.neutral_200, borderWidth: 1 }}
              initialSelectedIndex={Number(minute)}
              onChange={({ item }) => setMinute(item.value)}
            />
          </View>

          <CustomButton title={"완료"} textStyle={{ fontWeight: "bold" }} onPress={addTime} />
        </View>
      )}
    </CustomBottomSheet>
  );
};

export default AddNewRecord;
