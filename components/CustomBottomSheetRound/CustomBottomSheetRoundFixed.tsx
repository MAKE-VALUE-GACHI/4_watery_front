import React from "react";
import { View, ViewProps, StyleProp, ViewStyle, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomBottomSheetRoundFixedStyles from "@/components/CustomBottomSheetRound/CustomBottomSheetRoundFixed.styles";
import { Colors } from "@/constants/Colors";
import type { DimensionValue } from "react-native";

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
  style,
  positionStyle,
  height,
  minHeight,
  maxHeight,
  innerStyle,
  ...rest
}: BottomSheetProps) {
  return (
    <View style={[CustomBottomSheetRoundFixedStyles.wrapper, positionStyle, style]} {...rest}>
      <LinearGradient
        colors={[Colors.neutral_000, Colors.primaryTransparent]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={[
          CustomBottomSheetRoundFixedStyles.borderWrapper,
          height ? { height } : {},
          minHeight ? { minHeight } : {},
          maxHeight ? { maxHeight } : {},
        ]}
      >
        <ScrollView
          contentContainerStyle={[CustomBottomSheetRoundFixedStyles.innerContent, innerStyle]}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
