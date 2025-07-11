import CustomButton from "@/components/CustomButton/CustomButton";
import { getButtonBgColor } from "@/components/CustomSlide/CustomSlide.hooks";
import {
  IconWrapper,
  SlideBody,
  SlideContainer,
  StyledLinearGradient,
  TransparentView,
} from "@/components/CustomSlide/CustomSlide.styles";
import { BeverageVariantType } from "@/components/CustomSlide/CustomSlide.types";
import SlideHeader from "@/components/CustomSlide/SlideHeader";
import { wavesDict } from "@/constants/wavesDict";
import { MaterialIcons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import React, { useEffect, useRef, useState } from "react";
import { Image, View } from "react-native";
import WaveView from "react-native-waveview";

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

/**
 * CustomSlide
 *
 * 음료수 병과 내부에 애니메이션 파도 효과를 시각적으로 표현하는 슬라이드 컴포넌트입니다.
 * - 병 모양 마스킹과 WaveView를 활용해 병 안에서 파도가 치는 효과를 구현합니다.
 * - 헤더, 애니메이션 병, 커스텀 버튼을 포함합니다.
 * - 선택한 음료(variant)에 따라 파도 및 버튼 색상이 달라집니다.
 *
 * @component
 * @param {Object} props
 * @param {BeverageVariantType} props.beverageVariant - 표시할 음료 종류(색상, 파도에 영향)
 * @returns {JSX.Element}
 */
const CustomSlide: React.FC<CustomSlideProps> = ({ beverageVariant }) => {
  const colors = beverageColors[beverageVariant] ?? defaultColors;

  const waveRef = useRef<WaveView>(null);
  const [waterHeight, setWaterHeight] = useState(50);

  useEffect(() => {
    waveRef.current?.setWaterHeight(waterHeight);
    waveRef.current?.setWaveParams(wavesDict[beverageVariant]);
  }, [waterHeight, beverageVariant]);

  return (
    <StyledLinearGradient colors={colors} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}>
      <SlideContainer>
        <SlideHeader beverageVariant={beverageVariant} />
        <SlideBody>
          <View style={{ width: BOTTLE_WIDTH, height: BOTTLE_HEIGHT, position: "relative" }}>
            {/* 1. 병 안쪽만 보이게 하는 마스크 */}
            <MaskedView
              style={{ width: BOTTLE_WIDTH, height: BOTTLE_HEIGHT }}
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
            activeOpacity={0.8}
            onPress={() => setWaterHeight(waterHeight + 15)}
          />
        </TransparentView>
      </SlideContainer>
    </StyledLinearGradient>
  );
};

export default CustomSlide;
