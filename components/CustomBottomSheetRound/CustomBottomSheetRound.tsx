import React from "react";
import { View, ViewProps, StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomBottomSheetRoundStyles from "@/components/CustomBottomSheetRound/CustomBottomSheetRound.styles";
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

export default function CustomBottomSheetRound({
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
    <View style={[CustomBottomSheetRoundStyles.wrapper, positionStyle, style]} {...rest}>
      {/* ← 순서 중요: override 가능하게    */}
      {/* 🔹 외곽선용 Gradient (좌하단 → 우상단) */}
      <LinearGradient
        colors={[Colors.neutral_000, Colors.primary_100]} // #FFFFFF → #B2E0EE
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={CustomBottomSheetRoundStyles.borderWrapper}
      >
        {/* 🔸 내부 콘텐츠용 Gradient (상단 → 하단) */}
        <LinearGradient
          colors={[Colors.neutral_000, Colors.primaryTransparent]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={[
            CustomBottomSheetRoundStyles.contentWrapper,
            height ? { height } : {},
            minHeight ? { minHeight } : {},
            maxHeight ? { maxHeight } : {},
          ]}
        >
          <View style={[CustomBottomSheetRoundStyles.innerContent, innerStyle]}>{children}</View>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
}
