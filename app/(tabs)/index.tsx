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
import CustomButton from "@/components/CustomButton/CustomButton";
import { useRouter } from "expo-router";
import CustomInput from "@/components/CustomInput/CustomInput";
import CustomBottomSheetRound from "@/components/CustomBottomSheetRound/CustomBottomSheetRound";
import { BN1 } from "@/components/ThemedText";
import CustomButtonMove from "@/components/CustomButton/CustomButtonMove";
import { CustomTab, TabType } from "@/components/CustomTab";
import CustomTodayGoal from "@/components/CustomTodayGoal/CustomTodayGoal";
import CustomTabContent from "@/components/CustomTab/CustomTabContent";

const { width: screenWidth } = Dimensions.get("window");
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 1040;
const bgHeight = (screenWidth / DESIGN_WIDTH) * DESIGN_HEIGHT;

export default function HomeScreen() {
  const [isAddNewRecordOpen, setIsAddNewRecordOpen] = useState(false);
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState<TabType>("물");

  const handleBottomSheetOpen = () => {
    setIsAddNewRecordOpen(!isAddNewRecordOpen);
  };

  const selectedTabData = [
    { index: 1, volume: "200ml", drinkType: "물", time: "오전 09:00" },
    { index: 2, volume: "150ml", drinkType: "녹차", time: "오전 11:00" },
    { index: 3, volume: "500ml", drinkType: "커피", time: "오후 12:45" },
  ].sort((a, b) => b.index - a.index); // index 내림차순

  return (
    <ImageBackground
      source={require("assets/images/main-bg.png")}
      style={{ width: screenWidth, flex: 1 }} // ✅ 또는 minHeight: "100%"
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
        <ScrollView
          style={tabsStyles.mainContainer}
          contentContainerStyle={{ paddingBottom: verticalScale(100) }}
        >
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

          <CustomInput
            label={"Input Title"}
            errorText={"*10자 이내로 작성해주세요."}
            detailText={"*detail"}
          />

          <View style={tabsStyles.todayRecordTop}>
            <BN1 style={tabsStyles.todayText}>오늘 마신 기록</BN1>
            <CustomButtonMove label="더보기" onPress={() => router.push("/record-history")} />
          </View>

          <View style={{ marginTop: 12 }}>
            <CustomBottomSheetRound height={verticalScale(324)}>
              <CustomTab
                selectedTab={currentTab}
                onSelectTab={(tab) => setCurrentTab(tab)}
                visibleTabs={["전체", "물", "커피", "녹차"]}
              />
              <CustomTabContent data={selectedTabData} />
            </CustomBottomSheetRound>
          </View>
        </ScrollView>
      </SafeAreaView>
      <AddNewRecord isOpen={isAddNewRecordOpen} onClose={() => setIsAddNewRecordOpen(false)} />
      {/* History */}
    </ImageBackground>
  );
}
