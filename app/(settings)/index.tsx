import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import SettingsListItem from "@/app/(settings)/components/SettingsListItem";
import settingsStyles from "@/app/(settings)/index.styles";
import { View } from "react-native";
import { Colors } from "@/constants/Colors";
import { horizontalScale } from "@/libs/utils/scaling";
import { BN2, L2, LN1 } from "@/components/ThemedText";
import { CustomToggle } from "@/components/CustomToggle";

const SettingsScreen = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <ThemedView style={settingsStyles.container}>
      <View style={settingsStyles.goalContentContainer}>
        <View style={settingsStyles.goalWrapper}>
          <LN1 style={settingsStyles.goalText} lightColor={Colors.neutral_600}>
            목표 수분 섭취량
          </LN1>
          <Badge content={"2500ml"} badgeColor={Colors.primary_010} maxWidth={60} />
        </View>

        <SettingsListItem title={"다시 측정하기"} />
        <SettingsListItem title={"직접 설정"} />
      </View>
      <View>
        <View style={settingsStyles.alarmContainer}>
          <View style={settingsStyles.alarmWrapper}>
            <BN2 style={settingsStyles.alarmTitle} lightColor={Colors.neutral_800}>
              수분 섭취 알림
            </BN2>
            <CustomToggle value={isToggled} onValueChange={() => setIsToggled(!isToggled)} />
          </View>
          <L2 lightColor={Colors.neutral_600}>수분 섭취가 필요할 때 알려드려요.</L2>
        </View>

        <SettingsListItem title={"로그인 정보"} />

        <View style={settingsStyles.versionInfoContainer}>
          <BN2 style={settingsStyles.versionInfoWrapper} lightColor={Colors.neutral_800}>
            앱 버전
          </BN2>
          <LN1 lightColor={Colors.neutral_400}>1.0.0</LN1>
        </View>
      </View>
    </ThemedView>
  );
};

// TODO: Badge 공용 컴포넌트로 대체
const Badge = ({
  content,
  badgeColor,
  maxWidth,
}: {
  content: string;
  badgeColor: string;
  maxWidth?: number;
}) => {
  return (
    <View
      style={{
        ...settingsStyles.badgeWrapper,
        maxWidth: horizontalScale(maxWidth ?? 40),
        backgroundColor: badgeColor,
      }}
    >
      <L2 lightColor={Colors.primary_500} style={{ fontWeight: "500" }}>
        {content}
      </L2>
    </View>
  );
};

export default SettingsScreen;
