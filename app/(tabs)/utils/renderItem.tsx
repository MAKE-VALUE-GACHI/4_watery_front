import AddYourselfSlide from "@/app/(tabs)/components/AddYourselfSlide";
import CustomSlide from "@/components/CustomSlide/CustomSlide";
import { BeverageVariantType } from "@/components/CustomSlide/CustomSlide.types";
import React from "react";
import { ImageStyle, StyleProp } from "react-native";
import { CarouselRenderItem } from "react-native-reanimated-carousel";
import beverageDataSet, { dummyBeverages } from "@/app/(tabs)/constants/beverageDataSet";

interface renderItemProps {
  style?: StyleProp<ImageStyle>;
  onPress?: () => void;
}

const renderItem = ({ style, onPress }: renderItemProps = {}): CarouselRenderItem<any> => {
  return ({ index }) => {
    const redirectAddYourself = () => {
      // TODO: 음룍 직접 추가하기 페이지 구현 시 해당 페이지로 이동하게 로직 변경
      console.log("redirecting to Add Yourself Page . . .");
    };

    return beverageDataSet[index] === "addYourself" ? (
      <AddYourselfSlide key={index} style={style} onPress={redirectAddYourself} />
    ) : (
      <CustomSlide
        key={index}
        beverageVariant={beverageDataSet[index] as BeverageVariantType}
        style={style}
        onPress={onPress}
        currentValue={dummyBeverages[index].totalAmount}
        index={index}
      />
    );
  };
};

export default renderItem;
