import React from "react";
import { View, type ViewProps } from "react-native";
import { StyleProp, ViewStyle } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  preset?: "title" | "link";
  style?: StyleProp<ViewStyle>;
};

export function ThemedView({
  preset,
  lightColor,
  darkColor,
  style,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
