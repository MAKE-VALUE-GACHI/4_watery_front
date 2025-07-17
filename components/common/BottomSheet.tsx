import React from "react";
import { View, StyleSheet, ViewProps } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";
import { LinearGradient } from "expo-linear-gradient";

interface BottomSheetProps extends ViewProps {
  children?: React.ReactNode;
}

export default function BottomSheet({ children, style, ...rest }: BottomSheetProps) {
  return (
    <View style={[styles.wrapper, style]} {...rest}>
      <LinearGradient
        colors={["#FFFFFF", "#91CFEAA3"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.background}
      >
        <LinearGradient
          colors={["#FFFFFF", "#D4EFF7"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.border}
        >
          <View style={styles.inner}>{children}</View>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: verticalScale(458),
    left: horizontalScale(12),
    right: horizontalScale(12),
    bottom: verticalScale(24),
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    width: horizontalScale(351),
    height: verticalScale(180),
    borderRadius: horizontalScale(32),
  },
  border: {
    flex: 1,
    borderRadius: horizontalScale(32),
    borderWidth: 1,
    borderColor: "transparent", // borderGradient 대체
    paddingHorizontal: horizontalScale(1),
    paddingVertical: verticalScale(1),
  },
  inner: {
    flex: 1,
    borderRadius: horizontalScale(32),
    backgroundColor: "transparent",
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(32),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
