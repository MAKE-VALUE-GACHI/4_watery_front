// components/RecordAmountSection.tsx
import React, { Fragment } from "react";
import { View } from "react-native";
import { BN1, LN1 } from "@/components/ThemedText";
import CustomSlider from "@/components/CustomSlider/CustomSlider";
import { Colors } from "@/constants/Colors";
import { recordAmountSectionStyles } from "@/components/CustomBottomSheet/RecordAmountSection.styles";

interface RecordAmountSectionProps {
  currentVal: number;
  setCurrentVal: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const RecordAmountSection: React.FC<RecordAmountSectionProps> = ({
  currentVal,
  setCurrentVal,
  min = 50,
  max = 1000,
  step = 50,
}) => (
  <Fragment>
    <View style={recordAmountSectionStyles.header}>
      <BN1 lightColor={Colors.neutral_700} style={{ fontWeight: "bold" }}>
        마신 양을 얼마나 추가할까요?
      </BN1>

      <View style={recordAmountSectionStyles.inputMeasurement}>
        <BN1 lightColor={Colors.neutral_700} style={{ fontWeight: "bold" }}>
          {currentVal}
        </BN1>
        <LN1 lightColor={Colors.neutral_400}>ml</LN1>
      </View>
    </View>

    <CustomSlider
      sliderVal={currentVal}
      onValueChange={(val) => setCurrentVal(val[0])}
      step={step}
      animationType={"spring"}
      maximumValue={max}
      minimumValue={min}
    />
  </Fragment>
);

export default RecordAmountSection;
