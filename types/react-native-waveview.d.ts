declare module 'react-native-waveview' {
  import { Component } from 'react';
    import { ViewProps } from 'react-native';

  interface WaveViewProps extends ViewProps {
    H?: number;
    waveParams?: Array<{
      A: number;
      T: number;
      fill: string;
    }>;
    animated?: boolean;
  }

  export default class WaveView extends Component<WaveViewProps> {
    stopAnim(): void;
    setWaterHeight(height: number): void;
    setWaveParams(params: Array<{ A: number; T: number; fill: string }>): void;
  }
} 