import AddYourselfSlide from "@/app/(tabs)/components/AddYourselfSlide";
import tabsStyles from "@/app/(tabs)/index.styles";
import CustomSlide from "@/components/CustomSlide/CustomSlide";
import { BeverageVariantType } from "@/components/CustomSlide/CustomSlide.types";
import TodayGoalCard from "@/components/TodayGoalMoisture/TodayGoal";
import { horizontalScale } from "@/libs/utils/scaling";
import React from "react";
import { Dimensions, ImageBackground, ImageStyle, ScrollView, StyleProp, View } from "react-native";
import Carousel, { CarouselRenderItem } from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: screenWidth } = Dimensions.get("window");
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 1040;
const bgHeight = (screenWidth / DESIGN_WIDTH) * DESIGN_HEIGHT;

const beverageDataSet: (BeverageVariantType | "addYourself")[] = [
  "water",
  "coffee",
  "greenTea",
  "cola",
  "addYourself",
];

export default function HomeScreen() {
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
              })}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

interface Options {
  rounded?: boolean;
  style?: StyleProp<ImageStyle>;
}

const renderItem =
  ({ style }: Options = {}): CarouselRenderItem<any> =>
  ({ index }: { index: number }) =>
    beverageDataSet[index] === "addYourself" ? (
      <AddYourselfSlide key={index} style={style} />
    ) : (
      <CustomSlide
        key={index}
        beverageVariant={beverageDataSet[index] as BeverageVariantType}
        style={style}
      />
    );
