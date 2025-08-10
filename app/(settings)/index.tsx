import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { View } from "react-native";
import SettingsListItem from "@/app/(settings)/components/SettingsListItem";
import settingsStyles from "@/app/(settings)/index.styles";

const SettingsScreen = () => {
  const settingsItems = [
    {
      title: "개인 설정",
      route: "/(settings)/personal",
    },
    {
      title: "로그인 정보",
      route: "/(settings)/login-info",
    },
  ];

  return (
    <ThemedView style={settingsStyles.container}>
      <View style={settingsStyles.content}>
        {settingsItems.map((item, index) => (
          <SettingsListItem key={`settings_${index}`} title={item.title} />
        ))}
      </View>
    </ThemedView>
  );
};

export default SettingsScreen;
