import React from "react";
import { View, StyleSheet } from "react-native";
import { C1, LN1, L2 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

type Props = {
  index: number;
  volume: string;
  drinkType: string;
  time: string;
};

export const HistoryListItem = ({ index, volume, drinkType, time }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <C1 style={styles.index}>{index}</C1>
      <LN1 style={styles.volume}>{volume}</LN1>
      <LN1 style={styles.drinkType}>{drinkType}</LN1>
      <View style={styles.timeBox}>
        <L2 style={styles.timeText} numberOfLines={1} ellipsizeMode="tail">
          {time}
        </L2>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 311,
    height: 32,
    backgroundColor: Colors.neutral_000,
    borderRadius: 4,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 8,
    paddingRight: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  index: {
    width: 18,
    height: 20,
    textAlign: "center",
    color: Colors.neutral_300,
  },

  volume: {
    width: 47,
    height: 20,
    marginLeft: 8,
    color: Colors.neutral_500,
  },

  drinkType: {
    width: 80,
    height: 20,
    marginLeft: 24, // volume → drinkType 사이
    color: Colors.neutral_500,
  },

  timeBox: {
    marginLeft: "auto",
    height: 18,
    borderRadius: 4,
    backgroundColor: Colors.primary_010,
    justifyContent: "center",
    paddingHorizontal: 4,
    flexDirection: "row", // ✅ 텍스트 크기 기준으로 확장되게
    alignSelf: "flex-start", // ✅ 자신 크기만큼만 차지하도록 제한
  },

  timeText: {
    textAlign: "right",
    color: Colors.primary_500,
  },
});
