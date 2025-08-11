import React from "react";
import { TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import styles from "./TodayGoal.styles";

import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";

export default function TodayGoalCard() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#FFFFFFFF", "#CDD1D57A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBorder}
    >
      <View style={styles.innerContainer}>
        <ThemedView style={styles.cardBackground}>
          {/* Top Row: 텍스트 + 버튼 */}
          <View style={styles.topRow}>
            <ThemedText style={styles.goalText}>오늘의 목표 수분</ThemedText>
            <TouchableOpacity
              style={styles.settingButton}
              onPress={() => router.push("/(settings)")}
            >
              <View style={styles.settingContent}>
                <ThemedText style={styles.settingText}>개인설정</ThemedText>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={16}
                  color={Colors.primary_300}
                  style={styles.icon}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* Spacer between Text and ProgressBar */}
          <View style={{ height: 10 }} />

          {/* Progress Bar */}
          <View style={styles.progressWrapper}>
            <LinearGradient
              colors={["#E6E8EA", "#FFFFFF8F"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.progressGradientBorder}
            >
              <View style={styles.progressInner}>
                <View style={styles.progressContent}>
                  <MaterialCommunityIcons
                    name="crown"
                    size={16}
                    color={Colors.neutral_000}
                    style={styles.crownIcon}
                  />
                  <ThemedText style={styles.progressText}>오늘 목표를 달성했어요 !</ThemedText>
                  <View style={styles.statusGroup}>
                    <ThemedText style={styles.currentAmount}>2600</ThemedText>
                    <ThemedText style={styles.slash}>/</ThemedText>
                    <ThemedText style={styles.goalAmount}>2500</ThemedText>
                    <ThemedText style={styles.ml}>ml</ThemedText>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </ThemedView>
      </View>
    </LinearGradient>
  );
}
