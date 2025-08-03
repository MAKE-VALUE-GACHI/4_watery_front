import tabsStyles from "@/app/(tabs)/index.styles";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";
import React, { useState } from "react";
import { Dimensions, ImageBackground, ScrollView, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import renderItem from "@/app/(tabs)/utils/renderItem";
import beverageDataSet from "@/app/(tabs)/constants/beverageDataSet";
import AddNewRecord from "@/app/(tabs)/components/AddNewRecord";
import TodayHistory from "@/components/TodayHistory/TodayHistory";
import CustomBottomSheetRoundFixed from "@/components/CustomBottomSheetRound/CustomBottomSheetRoundFixed";
import { BN1 } from "@/components/ThemedText";
import CustomButtonMove from "@/components/CustomButton/CustomButtonMove";
import { CustomTab, TabType } from "@/components/CustomTab";
import CustomTodayGoal from "@/components/CustomTodayGoal/CustomTodayGoal";

const { width: screenWidth } = Dimensions.get("window");
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 1040;
const bgHeight = (screenWidth / DESIGN_WIDTH) * DESIGN_HEIGHT;

export default function HomeScreen() {
  const [isAddNewRecordOpen, setIsAddNewRecordOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState<TabType>("물");

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
          <CustomTodayGoal />

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

          <View style={tabsStyles.todayRecordTop}>
            <BN1 style={tabsStyles.todayText}>오늘 마신 기록</BN1>
            <CustomButtonMove label="더보기" onPress={() => console.log("더보기")} />
          </View>

          <View style={{ marginTop: 12 }}>
            <CustomBottomSheetRoundFixed height={600}>
              <CustomTab
                selectedTab={currentTab}
                onSelectTab={(tab) => setCurrentTab(tab)}
                visibleTabs={["전체", "물", "커피", "녹차"]}
              />
            </CustomBottomSheetRoundFixed>
          </View>
        </ScrollView>
      </SafeAreaView>
      <AddNewRecord isOpen={isAddNewRecordOpen} onClose={() => setIsAddNewRecordOpen(false)} />
      {/* History */}
      <TodayHistory />
    </ImageBackground>
  );
}
