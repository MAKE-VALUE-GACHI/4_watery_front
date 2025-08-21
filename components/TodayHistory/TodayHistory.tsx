import React from "react";
import { View } from "react-native";
import { HistoryListItem } from "@/components/TodayHistory/HistoryListItem";

const data = [
  { index: 1, volume: "200ml", drinkType: "물", time: "오전 09:00" },
  { index: 2, volume: "150ml", drinkType: "녹차", time: "오전 11:00" },
  { index: 3, volume: "500ml", drinkType: "커피", time: "오후 12:45" },
];

export default function HistoryScreenAsView() {
  return (
    <View style={{ padding: 12 }}>
      {data.map((item) => (
        <HistoryListItem
          key={item.index}
          index={item.index}
          volume={item.volume}
          drinkType={item.drinkType}
          time={item.time}
        />
      ))}
    </View>
  );
}
