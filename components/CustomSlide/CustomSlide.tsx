import CustomButton from "@/components/CustomButton/CustomButton";
import { HL2 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import React from "react";
import {
  SlideBody,
  SlideContainer,
  SlideHeader,
  StyledLinearGradient,
  TransparentView,
} from "@/components/CustomSlide/CustomSlide.styles";
import Measurement from "@/components/CustomSlide/Measurement";

interface CustomSlideProps {
  variant: "water" | "coffee" | "greenTea" | "coke";
}

const CustomSlide: React.FC<CustomSlideProps> = ({ variant }) => {
  const renderName = (variantType: "water" | "coffee" | "greenTea" | "coke") => {
    switch (variantType) {
      case "water":
        return "물";

      case "coffee":
        return "커피";

      case "greenTea":
        return "녹차";

      case "coke":
        return "콜라";

      default:
        return "물";
    }
  };
  return (
    <StyledLinearGradient
      colors={["rgba(255,255,255,0.48)", "rgba(145,207,234,0.48)"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <SlideContainer>
        <SlideHeader>
          <HL2 style={{ color: Colors.primary_800 }}>{renderName(variant)}</HL2>
          <Measurement />
        </SlideHeader>
        <SlideBody />
        <TransparentView>
          <CustomButton title={"마신 기록 추가"} variant={"primary"} />
        </TransparentView>
      </SlideContainer>
    </StyledLinearGradient>
  );
};

export default CustomSlide;
