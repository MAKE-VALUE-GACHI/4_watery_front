import React from "react";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      {/*  추후 메인 페이지에서 탭 관련 분할 시 사용 */}

      {/*<Tabs.Screen*/}
      {/*  name="index"*/}
      {/*  options={{*/}
      {/*    title: "Home",*/}
      {/*    tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Tabs.Screen*/}
      {/*  name="explore"*/}
      {/*  options={{*/}
      {/*    title: "Explore",*/}
      {/*    tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,*/}
      {/*  }}*/}
      {/*/>*/}
    </Tabs>
  );
}
