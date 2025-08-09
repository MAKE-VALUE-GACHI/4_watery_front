import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";

interface Props {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function PageWrapper({ children, backgroundColor = Colors.neutral_000 }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={[styles.wrapper, { backgroundColor }]}>
        <View style={{ flex: 1, paddingTop: insets.top }}>{children}</View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
