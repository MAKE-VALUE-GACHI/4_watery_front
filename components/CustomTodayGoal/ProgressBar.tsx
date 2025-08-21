import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import progressBarStyles from "@/components/CustomTodayGoal/progressbar.styles";
import { horizontalScale } from "@/libs/utils/scaling";
import { L2, BN2 } from "@/components/ThemedText";

interface ProgressBarProps {
  current: number;
  goal: number;
}

const ProgressBar = ({ current, goal }: ProgressBarProps) => {
  const progress = Math.min(current / goal, 1);
  const isGoalReached = current >= goal;
  const isStarted = current > 0;
  const showText = current === 0 || isGoalReached;

  const fillColor = isStarted ? Colors.primary_400 : "#FFFFFF";

  return (
    <LinearGradient
      colors={["#E6E8EA78", "#FFFFFF8F"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={progressBarStyles.container}
    >
      {/* 채워진 프로그레스 영역 */}
      <View
        style={[
          progressBarStyles.fill,
          {
            width: `${progress * 100}%`,
            backgroundColor: fillColor,
          },
        ]}
      />

      {!isStarted && (
        <View
          style={[
            progressBarStyles.fill,
            {
              width: 5,
              backgroundColor: Colors.neutral_000,
            },
          ]}
        />
      )}

      {/* 내부 콘텐츠 */}
      <View style={progressBarStyles.content}>
        {isGoalReached && (
          <>
            <MaterialCommunityIcons
              name="crown"
              size={16}
              color={Colors.neutral_000}
              style={progressBarStyles.icon}
            />
            <L2 style={progressBarStyles.textGoal}>오늘 목표를 달성했어요 !</L2>
          </>
        )}

        {!isStarted && (
          <>
            <MaterialIcons
              name="local-drink"
              size={16}
              color={Colors.primary_300}
              style={progressBarStyles.icon}
            />
            <L2 style={progressBarStyles.textEmpty}>아직 마신 음료가 없어요.</L2>
          </>
        )}

        {/* 오른쪽 섭취량 / 목표 / ml는 항상 고정 위치 */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 8,
            paddingBottom: 8,
            paddingRight: 10,
            paddingLeft: horizontalScale(223),
            position: "absolute",
            right: 0,
          }}
        >
          <BN2 style={progressBarStyles.amount}>{current}</BN2>
          <BN2 style={progressBarStyles.slash}>/</BN2>
          <BN2 style={progressBarStyles.goal}>{goal}</BN2>
          <L2 style={progressBarStyles.unit}>ml</L2>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ProgressBar;
