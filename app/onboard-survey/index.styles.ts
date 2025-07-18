import styled from "styled-components/native";
import { ThemedView } from "@/components/ThemedView";

// margin-bottom = 24px + bottom-tab 48px
export const SurveyPageContainer = styled(ThemedView)`
  flex: 1;
  margin-bottom: 72px;
`;

export const SurveyContentWrapper = styled(ThemedView)`
  flex: 1;
  padding: 12px 32px;
`;

export default SurveyContentWrapper;
