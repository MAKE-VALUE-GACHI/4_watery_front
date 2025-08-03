import React from "react";
import { View } from "react-native";
import { C1, LN1, L2 } from "@/components/ThemedText";
import historyListItemStyles from "@/components/TodayHistory/historyListItem.styles";

type Props = {
  index: number;
  volume: string;
  drinkType: string;
  time: string;
};

export const HistoryListItem = ({ index, volume, drinkType, time }: Props) => {
  return (
    <View style={historyListItemStyles.itemContainer}>
      <C1 style={historyListItemStyles.index}>{index}</C1>
      <LN1 style={historyListItemStyles.volume}>{volume}</LN1>
      <LN1 style={historyListItemStyles.drinkType}>{drinkType}</LN1>
      <View style={historyListItemStyles.timeBox}>
        <L2 style={historyListItemStyles.timeText} numberOfLines={1} ellipsizeMode="tail">
          {time}
        </L2>
      </View>
    </View>
  );
};
