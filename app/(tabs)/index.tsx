import tabsStyles from "@/app/(tabs)/index.styles";
import TodayGoalCard from "@/components/TodayGoalMoisture/TodayGoal";
import { horizontalScale } from "@/libs/utils/scaling";
import React, { useState } from "react";
import { Dimensions, ImageBackground, ScrollView, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import renderItem from "@/app/(tabs)/utils/renderItem";
import beverageDataSet from "@/app/(tabs)/constants/beverageDataSet";
import AddNewRecord from "@/app/(tabs)/components/AddNewRecord";

const { width: screenWidth } = Dimensions.get("window");
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 1040;
const bgHeight = (screenWidth / DESIGN_WIDTH) * DESIGN_HEIGHT;

export default function HomeScreen() {
  const [isAddNewRecordOpen, setIsAddNewRecordOpen] = useState(false);

  const handleBottomSheetOpen = () => {
    setIsAddNewRecordOpen(!isAddNewRecordOpen);
  };

  return (
    <ImageBackground
      source={require("assets/images/main-bg.png")}
      style={{ width: screenWidth, height: bgHeight }}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={tabsStyles.mainContainer}>
          <TodayGoalCard />
          <View style={tabsStyles.carouselWrapper}>
            <Carousel
              loop={true}
              width={325}
              height={500}
              snapEnabled={true}
              pagingEnabled={true}
              data={beverageDataSet}
              style={{ width: "100%" }}
              renderItem={renderItem({
                style: { marginRight: horizontalScale(10) },
                onPress: handleBottomSheetOpen,
              })}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      <AddNewRecord isOpen={isAddNewRecordOpen} onClose={() => setIsAddNewRecordOpen(false)} />
    </ImageBackground>
  );
}
