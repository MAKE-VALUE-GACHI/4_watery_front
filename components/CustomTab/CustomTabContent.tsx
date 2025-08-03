// CustomTabContent.tsx
import React from "react";
import { View, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { LN1 } from "@/components/ThemedText";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";
import CustomTabContentStyles from "@/components/CustomTab/CustomTabContent.styles";
import { HistoryListItem } from "@/components/TodayHistory/HistoryListItem";

interface DrinkData {
  index: number;
  volume: string;
  drinkType: string;
  time: string;
}

interface Props {
  data: DrinkData[];
}

export default function CustomTabContent({ data }: Props) {
  if (!data || data.length === 0) {
    return (
      <View style={CustomTabContentStyles.emptyBox}>
        <MaterialIcons
          name="local-drink"
          size={32}
          color={Colors.primary_200}
          style={CustomTabContentStyles.icon}
        />
        <LN1 style={CustomTabContentStyles.emptyText}>오늘 마신 기록을 추가해주세요.</LN1>
      </View>
    );
  }

  return (
    <View style={CustomTabContentStyles.listWrapper}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <HistoryListItem
            key={item.index}
            index={item.index}
            volume={item.volume}
            drinkType={item.drinkType}
            time={item.time}
          />
        )}
        keyExtractor={(item) => item.index.toString()}
        contentContainerStyle={CustomTabContentStyles.contentContainer}
      />
    </View>
  );
}
