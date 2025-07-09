import styled from "styled-components/native";
import { Slider } from "@miblanchard/react-native-slider";
import { Colors } from "@/constants/Colors";

export const StyledSlider = styled(Slider).attrs(() => ({
  containerStyle: {
    backgroundColor: Colors.primary_050,
  },
  thumbStyle: {
    width: 40,
    height: 40,
    borderRadius: 48,
    backgroundColor: Colors.neutral_600,
    borderWidth: 8,
    borderColor: Colors.neutral_000,
    shadowColor: Colors.neutral_1000,
    shadowRadius: 20,
  },
  trackStyle: {
    height: 6,
    borderRadius: 16,
  },
}))``;
