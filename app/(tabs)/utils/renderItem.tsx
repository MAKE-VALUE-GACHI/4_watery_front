import AddYourselfSlide from "@/app/(tabs)/components/AddYourselfSlide";
import CustomSlide from "@/components/CustomSlide/CustomSlide";
import { BeverageVariantType } from "@/components/CustomSlide/CustomSlide.types";
import React from "react";
import { ImageStyle, StyleProp } from "react-native";
import { CarouselRenderItem } from "react-native-reanimated-carousel";
import beverageDataSet from "@/app/(tabs)/constants/beverageDataSet";

interface renderItemProps {
  style?: StyleProp<ImageStyle>;
  onPress?: () => void;
}

const renderItem = (options: renderItemProps = {}): CarouselRenderItem<any> => {
  return ({ index }) => {
    const redirectAddYourself = () => {
      console.log("redirecting to Add Yourself Page . . .");
    };

    return beverageDataSet[index] === "addYourself" ? (
      <AddYourselfSlide key={index} style={options.style} onPress={redirectAddYourself} />
    ) : (
      <CustomSlide
        key={index}
        beverageVariant={beverageDataSet[index] as BeverageVariantType}
        style={options.style}
        onPress={options.onPress}
      />
    );
  };
};

export default renderItem;
