import { BN1, H1 } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { ScrollView, View } from "react-native";

export default function LoginInfoScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <H1 style={{ marginBottom: 20 }}>로그인 정보</H1>

        <View style={{ marginBottom: 16 }}>
          <BN1>연결된 계정</BN1>
        </View>

        <View style={{ marginBottom: 16 }}>
          <BN1>비밀번호 변경</BN1>
        </View>

        <View style={{ marginBottom: 16 }}>
          <BN1>계정 관리</BN1>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
