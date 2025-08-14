import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

export const trackMarkStyles = StyleSheet.create({
  StyledThemedView: {
    backgroundColor: "transparent",
    height: verticalScale(80),
    justifyContent: "flex-end",
    marginLeft: horizontalScale(10),
  },
});

interface TrackMarkProps {
  value: number;
}

const TrackMark: React.FC<TrackMarkProps> = ({ value }) => {
  return (
    <ThemedView style={trackMarkStyles.StyledThemedView}>
      <ThemedText style={{ color: Colors.neutral_400 }}>{value}</ThemedText>
    </ThemedView>
  );
};

export default TrackMark;
