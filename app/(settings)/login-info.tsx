import { BN1, BN2, LR1 } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import SettingsListItem from "@/app/(settings)/components/SettingsListItem";
import loginInfoStyles from "@/app/(settings)/login-info.styles";
import { Colors } from "@/constants/Colors";

export default function LoginInfoScreen() {
  return (
    <ThemedView style={loginInfoStyles.container}>
      <View style={loginInfoStyles.listItemWrapper}>
        <BN1 style={loginInfoStyles.listItemLabel}>소셜 정보</BN1>
        <LR1 lightColor={Colors.neutral_400}>asdfasdf@kakaotalk.com</LR1>
      </View>

      <SettingsListItem title={"로그아웃"} />

      <View style={loginInfoStyles.listItemWrapper}>
        <TouchableOpacity onPress={() => console.log("unregister")}>
          <BN2 style={loginInfoStyles.unRegister} lightColor={Colors.neutral_400}>
            회원탈퇴
          </BN2>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}
