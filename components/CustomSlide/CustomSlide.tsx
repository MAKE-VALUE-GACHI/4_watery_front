import {
  IconWrapper,
  SlideBody,
  SlideContainer,
  StyledLinearGradient,
  TransparentView,
} from "@/components/CustomSlide/CustomSlide.styles";
import { BeverageVariantType } from "@/components/CustomSlide/CustomSlide.types";
import SlideHeader from "@/components/CustomSlide/SlideHeader";
import React from "react";
import CustomButton from "@/components/CustomButton/CustomButton";
import { MaterialIcons } from "@expo/vector-icons";

interface CustomSlideProps {
  beverageVariant: BeverageVariantType;
}

const beverageColors: Record<BeverageVariantType, [string, string]> = {
  water: ["rgba(255,255,255,0.48)", "#91CFEA7A"],
  coffee: ["rgba(255,255,255,0.48)", "#EBC58F52"],
  greenTea: ["rgba(255,255,255,0.48)", "#90EE908F"],
  cola: ["rgba(255,255,255,0.48)", "#CD853F7A"],
};

const defaultColors: [string, string] = ["rgba(255,255,255,0.48)", "#91CFEA7A"];

const CustomSlide: React.FC<CustomSlideProps> = ({ beverageVariant }) => {
  const colors = beverageColors[beverageVariant] ?? defaultColors;

  return (
    <StyledLinearGradient colors={colors} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}>
      <SlideContainer>
        <SlideHeader beverageVariant={beverageVariant} />
        <SlideBody />
        <TransparentView>
          <CustomButton
            icon={
              <IconWrapper>
                <MaterialIcons name="add" size={20} color="white" />
              </IconWrapper>
            }
            title={"마신 기록 추가"}
            variant={"primary"}
            textType={"BN1"}
            textStyle={{ fontWeight: "bold" }}
          />
        </TransparentView>
      </SlideContainer>
    </StyledLinearGradient>
  );
};

export default CustomSlide;
