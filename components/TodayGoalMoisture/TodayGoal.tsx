import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./TodayGoal.styles";

const TodayGoal = () => {
  return (
    <LinearGradient
      colors={["#FFFFFF", "rgba(205, 209, 213, 0.48)"]} // "#CDD1D57A"
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBorder}
    >
      <View style={styles.container}>
        {/* Title Section */}
        <View style={styles.titleRow}>
          <Text style={styles.titleText}>오늘의 목표 수분</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>설정</Text>
          </View>
        </View>

        {/* Status Box */}
        <View style={styles.statusBox}>
          <View style={styles.statusRow}>
            <Text style={styles.statusText}>오늘 목표를 달성했어요 !</Text>
            <View style={styles.amountRow}>
              <Text style={styles.amountCurrent}>2600</Text>
              <Text style={styles.slash}>/</Text>
              <Text style={styles.amountTarget}>2500</Text>
              <Text style={styles.ml}>ml</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default TodayGoal;
