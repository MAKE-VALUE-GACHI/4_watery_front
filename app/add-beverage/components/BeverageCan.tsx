import { ThemedView } from "@/components/ThemedView";
import SlideHeader from "@/components/CustomSlide/SlideHeader";
import { Image, View } from "react-native";
import beverageCanStyles from "@/app/add-beverage/components/BeverageCan.styles";
import MaskedView from "@react-native-masked-view/masked-view";
import WaveView from "react-native-waveview";
import { wavesDict } from "@/constants/wavesDict";
import React, { useRef } from "react";
import { useBeverageStore } from "@/stores/beverageStore";
import { LinearGradient } from "expo-linear-gradient";
import { HL2 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

interface BeverageCanProps {
  currentStep: number;
  totalSteps: number;
  categoryName: string;
}

// Figma 이미지의 크기와 동일
const BOTTLE_WIDTH = 136;
const BOTTLE_HEIGHT = 260;

const defaultColors: [string, string] = ["rgba(255,255,255,0.48)", "#91CFEA7A"];

const BeverageCan = ({}) => {
  const colors = defaultColors;
  const waveRef = useRef<WaveView>(null);
  const { setCurrentIndex } = useBeverageStore();

  return (
    <View style={beverageCanStyles.addBeverageBgSetting}>
      {/* 1. Text */}
      <HL2 style={beverageCanStyles.beverageName} lightColor={Colors.waves.coffee[0]}>
        커피
      </HL2>

      {/* 2. 물통 */}
      <View style={beverageCanStyles.slideBody}>
        <View style={{ width: BOTTLE_WIDTH, height: BOTTLE_HEIGHT, position: "relative" }}>
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
              style={{ width: BOTTLE_WIDTH, height: BOTTLE_HEIGHT, backgroundColor: "transparent" }}
              H={50}
              waveParams={wavesDict["default"]}
              animated={true}
            />
          </MaskedView>

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
      </View>
    </View>
  );
};

export default BeverageCan;
