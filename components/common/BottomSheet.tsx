/** components/common/BottomSheet.tsx */
import React from "react";
import { View, ViewProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import bottomSheetStyles from "@/components/common/bottomSheet.styles";

interface BottomSheetProps extends ViewProps {
  children?: React.ReactNode;
}

export default function BottomSheet({ children, style, ...rest }: BottomSheetProps) {
  return (
    <View style={[bottomSheetStyles.wrapper, style]} {...rest}>
      {/* 외곽선용 LinearGradient */}
      <LinearGradient colors={["#91CFEAA3", "#91CFEAA3"]} style={bottomSheetStyles.borderWrapper}>
        {/* 내부 콘텐츠용 LinearGradient (배경 블러 느낌 표현) */}
        <LinearGradient
          colors={["#FFFFFF", "rgba(145, 207, 234, 0.64)"]} // ← 정확한 알파 채널 표현
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={bottomSheetStyles.contentWrapper}
        >
          <View style={bottomSheetStyles.innerContent}>{children}</View>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
}
