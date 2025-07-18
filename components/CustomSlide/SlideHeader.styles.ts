import styled from "styled-components/native";
import { FlexRow } from "@/components/CustomSlide/CustomSlide.styles";
import { BN1 } from "@/components/ThemedText";

export const SlideHeaderContainer = styled(FlexRow)`
  justify-content: space-between;
  background-color: transparent;
  padding: 12px 20px;
`;

export const SlideHeaderMeasurement = styled(BN1)`
  font-weight: bold;
`;
