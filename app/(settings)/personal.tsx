import { BN1, H1 } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { ScrollView, View } from "react-native";

export default function PersonalScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <H1 style={{ marginBottom: 20 }}>개인 설정</H1>

        <View style={{ marginBottom: 16 }}>
          <BN1>프로필 정보</BN1>
        </View>

        <View style={{ marginBottom: 16 }}>
          <BN1>알림 설정</BN1>
        </View>

        <View style={{ marginBottom: 16 }}>
          <BN1>개인정보 설정</BN1>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
