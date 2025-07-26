import tabsStyles from "@/app/(tabs)/index.styles";
import CustomSlide from "@/components/CustomSlide/CustomSlide";
import { BeverageVariantType } from "@/components/CustomSlide/CustomSlide.types";
import TodayGoalCard from "@/components/TodayGoalMoisture/TodayGoal";
import React from "react";
import { Dimensions, ImageBackground, ImageStyle, ScrollView, StyleProp, View } from "react-native";
import Carousel, { CarouselRenderItem } from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import { horizontalScale } from "@/libs/utils/scaling";

const { width: screenWidth } = Dimensions.get("window");
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 1040;
const bgHeight = (screenWidth / DESIGN_WIDTH) * DESIGN_HEIGHT;

const testDataSet: BeverageVariantType[] = ["water", "coffee", "greenTea", "cola"];

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
              autoPlayInterval={2000}
              data={testDataSet}
              style={{ width: "100%" }}
              onSnapToItem={(index) => console.log("current index:", index)}
              renderItem={renderItem({
                rounded: true,
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
  ({ rounded = false, style }: Options = {}): CarouselRenderItem<any> =>
  ({ index }: { index: number }) => (
    <CustomSlide key={index} beverageVariant={testDataSet[index]} style={style} />
  );
