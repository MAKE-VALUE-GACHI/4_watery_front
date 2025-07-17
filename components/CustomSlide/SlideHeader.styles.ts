import styled from "styled-components/native";
import { BN1 } from "@/components/ThemedText";
import { FlexRow } from "@/components/common.styles";

export const SlideHeaderContainer = styled(FlexRow)`
  justify-content: space-between;
  background-color: transparent;
  padding: 12px 20px;
`;

export const SlideHeaderMeasurement = styled(BN1)`
  font-weight: bold;
`;
