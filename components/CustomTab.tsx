import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { LN1 } from "@/components/ThemedText";

export type TabType = "전체" | "물" | "커피" | "녹차";

interface CustomTabProps {
  selectedTab: TabType;
  onSelectTab: (tab: TabType) => void;
  visibleTabs?: TabType[]; // 표시할 탭만 지정
}

const tabOptions: { label: TabType; color: string }[] = [
  { label: "전체", color: Colors.neutral_600 },
  { label: "물", color: Colors.primary_700 },
  { label: "커피", color: Colors.waves.coffee[2] },
  { label: "녹차", color: Colors.waves.green_tea[0] },
];

export const CustomTab = ({
  selectedTab,
  onSelectTab,
  visibleTabs = ["전체", "물", "커피", "녹차"],
}: CustomTabProps) => {
  return (
    <View style={styles.container}>
      {tabOptions
        .filter(({ label }) => visibleTabs?.includes(label))
        .map(({ label, color }) => {
          const isSelected = selectedTab === label;

          return (
            <Pressable
              key={label}
              onPress={() => onSelectTab(label)}
              style={[
                styles.tab,
                {
                  backgroundColor: isSelected ? color : Colors.neutral_000,
                },
              ]}
            >
              <LN1
                style={{
                  color: isSelected ? Colors.neutral_000 : Colors.neutral_500,
                  fontWeight: isSelected ? "bold" : "normal",
                }}
              >
                {label}
              </LN1>
            </Pressable>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
});
