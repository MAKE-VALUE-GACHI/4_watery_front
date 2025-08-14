import React from "react";
import { View, ViewProps, StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomBottomSheetRoundFixedStyles from "@/components/CustomBottomSheetRound/CustomBottomSheetRoundFixed.styles";
import { Colors } from "@/constants/Colors";
import type { DimensionValue } from "react-native"; // type DimensionValue = number | `${number}%` | undefined;

interface BottomSheetProps extends ViewProps {
  children?: React.ReactNode;
  height?: DimensionValue;
  minHeight?: DimensionValue;
  maxHeight?: DimensionValue;
  innerStyle?: StyleProp<ViewStyle>;
  positionStyle?: StyleProp<ViewStyle>; // ← 추가
}

export default function CustomBottomSheetRoundFixed({
  children,
  style,
  height,
  minHeight,
  maxHeight,
  innerStyle,
  positionStyle,
  ...rest
}: BottomSheetProps) {
  return (
    <LinearGradient
      colors={[Colors.whiteTransparent, Colors.primaryTransparent32]} // ✅ 배경 그라데이션 적용
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={[
        CustomBottomSheetRoundFixedStyles.wrapper, // ✅ 위치 및 그림자 유지
        height ? { height } : {},
        minHeight ? { minHeight } : {},
        maxHeight ? { maxHeight } : {},
        positionStyle,
        style,
      ]}
      {...rest}
    >
      <View style={[CustomBottomSheetRoundFixedStyles.innerContent, innerStyle]}>{children}</View>
    </LinearGradient>
  );
}
