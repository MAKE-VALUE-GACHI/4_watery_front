// 1. 모듈 선언
declare module "react-native-waveview" {
  // 2. React와 React Native 타입 import
  import { Component } from "react";
  import { ViewProps } from "react-native";

  // 3. Props 인터페이스 정의
  interface WaveViewProps extends ViewProps {
    H?: number; // 물 높이 (선택적)
    waveParams?: Array<{
      // 웨이브 파라미터 배열 (선택적)
      A: number; // 진폭 (Amplitude)
      T: number; // 주기 (Period)
      fill: string; // 색상
    }>;
    animated?: boolean; // 애니메이션 여부 (선택적)
  }

  // 4. 컴포넌트 클래스 정의
  export default class WaveView extends Component<WaveViewProps> {
    stopAnim(): void; // 애니메이션 정지
    startAnim(): void; // 애니메이션 시작
    setWaterHeight(height: number): void; // 물 높이 설정
    setWaveParams(params: Array<{ A: number; T: number; fill: string }>): void; // 웨이브 파라미터 설정
  }
}
