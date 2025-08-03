import React from "react";
import { ViewProps, StyleProp, ViewStyle, ScrollView, DimensionValue } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { Colors } from "@/constants/Colors";
import CustomBottomSheetRoundFixedStyles from "./CustomBottomSheetRoundFixed.styles";

interface BottomSheetProps extends ViewProps {
  children?: React.ReactNode;
  height?: DimensionValue;
  minHeight?: DimensionValue;
  maxHeight?: DimensionValue;
  innerStyle?: StyleProp<ViewStyle>;
  positionStyle?: StyleProp<ViewStyle>;
}

export default function CustomBottomSheetRoundFixed({
  children,
  height,
  minHeight,
  maxHeight,
  innerStyle,
  positionStyle,
  style,
  ...rest
}: BottomSheetProps) {
  return (
    <LinearGradient
      colors={[Colors.whiteTransparent, Colors.primaryTransparent]} // 투명도 조절된 배경
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={[
        CustomBottomSheetRoundFixedStyles.gradientWrapper,
        height ? { height } : {},
        minHeight ? { minHeight } : {},
        maxHeight ? { maxHeight } : {},
        positionStyle,
        style,
      ]}
      {...rest}
    >
      <ScrollView
        contentContainerStyle={[CustomBottomSheetRoundFixedStyles.innerContent, innerStyle]}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </LinearGradient>
  );
}
