import { horizontalScale, verticalScale } from "@/libs/utils/scaling";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import WheelPicker from "react-native-wheel-picker-expo";
import { combinePickerToDate, splitDateToPicker } from "@/hooks/useDateTimeTransform";
import { recordTimePickerSectionStyles } from "@/components/CustomBottomSheet/RecordTimePickerSection.styles";
import { HL1 } from "@/components/ThemedText";

interface RecordTimePickerSectionProps {
  value: Date;
  onChange: (date: Date) => void;
}

const RecordTimePickerSection: React.FC<RecordTimePickerSectionProps> = ({ value, onChange }) => {
  const ampmOptions = [
    { label: "오전", value: "AM" },
    { label: "오후", value: "PM" },
  ];
  const hourOptions = Array.from({ length: 12 }, (_, i) => ({
    label: String(i + 1),
    value: String(i + 1),
  }));
  const minuteOptions = Array.from({ length: 65 }, (_, i) => ({
    label: i.toString().padStart(2, "0"),
    value: String(i),
  }));

  // value prop이 바뀔 때마다 picker state를 동기화
  const { ampm: initialAmpm, hour: initialHour, minute: initialMinute } = splitDateToPicker(value);
  const [ampm, setAmpm] = useState(initialAmpm);
  const [hour, setHour] = useState(initialHour);
  const [minute, setMinute] = useState(initialMinute);

  useEffect(() => {
    setAmpm(initialAmpm);
    setHour(initialHour);
    setMinute(initialMinute);
  }, [value]);

  useEffect(() => {
    const newDate = combinePickerToDate(value, ampm, hour, minute);
    onChange(newDate);
  }, [ampm, hour, minute]);

  return (
    <View style={recordTimePickerSectionStyles.timePickerWrapper}>
      <WheelPicker
        height={verticalScale(172)}
        width={horizontalScale(65)}
        items={ampmOptions}
        selectedStyle={recordTimePickerSectionStyles.wheelPickerSelectedItem}
        initialSelectedIndex={ampm === "AM" ? 0 : 1}
        onChange={({ item }) => setAmpm(item.value)}
      />

      <WheelPicker
        height={verticalScale(172)}
        width={horizontalScale(65)}
        items={hourOptions}
        selectedStyle={recordTimePickerSectionStyles.wheelPickerSelectedItem}
        initialSelectedIndex={Number(hour) - 1}
        onChange={({ item }) => setHour(item.value)}
      />

      <HL1 style={recordTimePickerSectionStyles.timeDot}>:</HL1>

      <WheelPicker
        height={verticalScale(172)}
        width={horizontalScale(65)}
        items={minuteOptions}
        selectedStyle={recordTimePickerSectionStyles.wheelPickerSelectedItem}
        initialSelectedIndex={Number(minute)}
        onChange={({ item }) => setMinute(item.value)}
      />
    </View>
  );
};

export default RecordTimePickerSection;
