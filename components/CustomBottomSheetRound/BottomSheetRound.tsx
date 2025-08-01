import React from "react";
import { View, ViewProps, StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import bottomSheetStyles from "@/components/CustomBottomSheetRound/bottomSheetRound.styles";
import { Colors } from "@/constants/Colors";
import type { DimensionValue } from "react-native"; // type DimensionValue = number | `${number}%` | undefined;

interface BottomSheetProps extends ViewProps {
  children?: React.ReactNode;
  height?: DimensionValue;
  minHeight?: DimensionValue;
  maxHeight?: DimensionValue;
  innerStyle?: StyleProp<ViewStyle>;
}

export default function BottomSheetRound({
  children,
  style,
  height,
  minHeight,
  maxHeight,
  innerStyle,
  ...rest
}: BottomSheetProps) {
  return (
    <View style={[bottomSheetStyles.wrapper, style]} {...rest}>
      {/* 🔹 외곽선용 Gradient (좌하단 → 우상단) */}
      <LinearGradient
        colors={[Colors.neutral_000, Colors.primary_100]} // #FFFFFF → #B2E0EE
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={bottomSheetStyles.borderWrapper}
      >
        {/* 🔸 내부 콘텐츠용 Gradient (상단 → 하단) */}
        <LinearGradient
          colors={[Colors.neutral_000, Colors.primaryTransparent]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={[
            bottomSheetStyles.contentWrapper,
            height ? { height } : {},
            minHeight ? { minHeight } : {},
            maxHeight ? { maxHeight } : {},
          ]}
        >
          <View style={[bottomSheetStyles.innerContent, innerStyle]}>{children}</View>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
}
