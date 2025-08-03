import { ThemedView } from "@/components/ThemedView";
import { BN1, C1 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { BlurView } from "expo-blur";
import React from "react";
import { View } from "react-native";
import todayGoalStyles from "@/components/CustomTodayGoal/todayGoal.styles";
import CustomButtonMove from "@/components/CustomButton/CustomButtonMove";
import ProgressBar from "@/components/CustomTodayGoal/ProgressBar";

const CustomTodayGoal = () => {
  return (
    <BlurView style={todayGoalStyles.mainHeader} intensity={100} tint={"default"}>
      <ThemedView style={todayGoalStyles.headerDesc}>
        <BN1 lightColor={Colors.neutral_600} style={{ fontWeight: "bold" }}>
          오늘의 목표 수분
        </BN1>

        <CustomButtonMove label="개인설정" onPress={() => console.log("개인설정")} />
      </ThemedView>
      <View style={todayGoalStyles.progressBar}>
        <ProgressBar current={0} goal={2500} />
        {/*<ProgressBar current={800} goal={2500} />*/}
        {/*<ProgressBar current={2600} goal={2500} />*/}
      </View>
    </BlurView>
  );
};

export default CustomTodayGoal;
