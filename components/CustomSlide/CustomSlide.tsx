import CustomButton from "@/components/CustomButton/CustomButton";
import {
  IconWrapper,
  SlideBody,
  SlideContainer,
  StyledLinearGradient,
  TransparentView,
} from "@/components/CustomSlide/CustomSlide.styles";
import { BeverageVariantType } from "@/components/CustomSlide/CustomSlide.types";
import SlideHeader from "@/components/CustomSlide/SlideHeader";
import { MaterialIcons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import React, { useEffect, useRef, useState } from "react";
import { Image, View } from "react-native";
import WaveView from "react-native-waveview";
import { wavesDict } from "@/constants/wavesDict";
import { getButtonBgColor } from "@/components/CustomSlide/CustomSlide.hooks";

interface CustomSlideProps {
  beverageVariant: BeverageVariantType;
}

const beverageColors: Record<BeverageVariantType, [string, string]> = {
  water: ["rgba(255,255,255,0.48)", "#91CFEA7A"],
  coffee: ["rgba(255,255,255,0.48)", "#EBC58F52"],
  greenTea: ["rgba(255,255,255,0.48)", "#90EE908F"],
  cola: ["rgba(255,255,255,0.48)", "#4D4D4D7A"],
};

const defaultColors: [string, string] = ["rgba(255,255,255,0.48)", "#91CFEA7A"];

// Figma 이미지의 크기와 동일
const BOTTLE_WIDTH = 136;
const BOTTLE_HEIGHT = 260;

const CustomSlide: React.FC<CustomSlideProps> = ({ beverageVariant }) => {
  const colors = beverageColors[beverageVariant] ?? defaultColors;

  const waveRef = useRef<WaveView>(null);
  const [waterHeight, setWaterHeight] = useState(50);
  const [waveIdx, setWaveIdx] = useState(0);

  useEffect(() => {
    waveRef.current?.setWaterHeight(waterHeight);
    waveRef.current?.setWaveParams(wavesDict[beverageVariant]);
  }, [waveIdx, beverageVariant]);

  return (
    <StyledLinearGradient colors={colors} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}>
      <SlideContainer>
        <SlideHeader beverageVariant={beverageVariant} />
        <SlideBody>
          <View style={{ width: BOTTLE_WIDTH, height: BOTTLE_HEIGHT, position: "relative" }}>
            {/* 1. 병 안쪽만 보이게 하는 마스크 */}
            <MaskedView
              style={{ width: BOTTLE_WIDTH, height: BOTTLE_HEIGHT, position: "absolute" }}
              maskElement={
                <Image
                  source={require("@/assets/images/bottle-mask.png")}
                  style={{ width: BOTTLE_WIDTH, height: BOTTLE_HEIGHT }}
                  resizeMode="contain"
                />
              }
            >
              <WaveView
                ref={waveRef}
                style={{ width: BOTTLE_WIDTH, height: BOTTLE_HEIGHT, backgroundColor: "white" }}
                H={100}
                waveParams={wavesDict[beverageVariant]}
                animated={true}
              />
            </MaskedView>

            {/* 2. 병 PNG(외곽선/광택) 오버레이 */}
            <Image
              source={require("@/assets/images/empty-bottle.png")}
              style={{
                position: "absolute",
                width: BOTTLE_WIDTH,
                height: BOTTLE_HEIGHT,
                top: 0,
                left: 0,
                zIndex: 1,
              }}
              resizeMode="contain"
            />
          </View>
        </SlideBody>

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
            backgroundColor={getButtonBgColor(beverageVariant)}
          />
        </TransparentView>
      </SlideContainer>
    </StyledLinearGradient>
  );
};

export default CustomSlide;
