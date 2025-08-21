import AddYourselfSlide from "@/app/(tabs)/components/AddYourselfSlide";
import CustomSlide from "@/components/CustomSlide/CustomSlide";
import { BeverageVariantType } from "@/components/CustomSlide/CustomSlide.types";
import React from "react";
import { ImageStyle, StyleProp } from "react-native";
import { CarouselRenderItem } from "react-native-reanimated-carousel";
import beverageDataSet, { dummyBeverages } from "@/app/(tabs)/constants/beverageDataSet";
import { useRouter } from "expo-router";

interface renderItemProps {
  style?: StyleProp<ImageStyle>;
  onPress?: () => void;
}

const renderItem = ({ style, onPress }: renderItemProps = {}): CarouselRenderItem<any> => {
  const router = useRouter();
  return ({ index }) => {
    const redirectAddYourself = () => {
      router.push("/add-beverage");
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
