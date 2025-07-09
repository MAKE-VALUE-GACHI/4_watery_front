import CustomButton from "@/components/CustomButton/CustomButton";
import { HL2 } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import React from "react";
import {
  SlideBody,
  SlideContainer,
  SlideHeader,
} from "@/components/CustomSlide/CustomSlide.styles";
import Measurement from "@/components/CustomSlide/Measurement";

interface CustomSlideProps {
  variant: "water" | "coffee" | "greenTea" | "coke";
}

const CustomSlide: React.FC<CustomSlideProps> = ({ variant }) => {
  return (
    <SlideContainer>
      <SlideHeader>
        <HL2 style={{ color: Colors.primary_800 }}>물</HL2>
        <Measurement />
      </SlideHeader>
      <SlideBody />
      <ThemedView>
        <CustomButton title={"마신 기록 추가"} variant={"primary"} />
      </ThemedView>
    </SlideContainer>
  );
};

export default CustomSlide;
