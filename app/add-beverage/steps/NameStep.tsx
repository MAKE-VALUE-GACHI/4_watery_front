import { useStepSelection } from "@/app/add-beverage/utils/useStepSelection";
import { stepsStyles } from "@/app/add-beverage/steps/steps.styles";
import { ThemedView } from "@/components/ThemedView";
import DefaultBeverageOption from "@/components/AddBeverage/DefaultBeverageOption";
import React from "react";
import { BN2 } from "@/components/ThemedText";
import { useFormContext, Controller } from "react-hook-form";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CustomBottomSheet from "@/components/CustomBottomSheet/CustomBottomSheet";
import {
  StepTitleContainer,
  IconWrapper,
  StepTitleText,
  InputSection,
  InputTitle,
  NameInput,
} from "./NameStep.styles";
import { verticalScale } from "@/libs/utils/scaling";
import { Colors } from "@/constants/Colors";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomButton from "@/components/CustomButton/CustomButton";

const NameStep: React.FC = () => {
  const { control } = useFormContext();

  return (
    <CustomBottomSheet staticMode>
      {/* Step Title */}
      <StepTitleContainer>
        <IconWrapper>
          <MaterialIcons
            name="looks-one"
            size={verticalScale(20)}
            color={"#58616A" /* 피그마 지정 */}
          />
        </IconWrapper>
        <StepTitleText>자주 마시는 음료가 있나요?</StepTitleText>
      </StepTitleContainer>

      {/* Input Form */}
      <InputSection>
        <CustomInput
          label={"음료 이름"}
          errorText={"*10자 이내로 작성해주세요."}
          placeholder={"단백질 보충제, 한약, 우유 등"}
        />

        {/* 디자인 스타일 적용 Input */}
        {/*<InputTitle>음료 이름</InputTitle>*/}
        {/*<Controller*/}
        {/*  name="name"*/}
        {/*  control={control}*/}
        {/*  defaultValue=""*/}
        {/*  render={({ field: { onChange, onBlur, value } }) => (*/}
        {/*    <NameInput*/}
        {/*      value={value}*/}
        {/*      onChangeText={onChange}*/}
        {/*      onBlur={onBlur}*/}
        {/*      placeholder="단백질 보충제, 한약, 우유 등"*/}
        {/*      placeholderTextColor={Colors.neutral_500} // Body2/Regular 컬러*/}
        {/*      selectionColor={Colors.primary_300 ?? "#4096ff"}*/}
        {/*      // 필요시 키보드/자동완성 옵션*/}
        {/*      autoCapitalize="none"*/}
        {/*      autoCorrect={false}*/}
        {/*      returnKeyType="done"*/}
        {/*    />*/}
        {/*  )}*/}
        {/*/>*/}
      </InputSection>

      {/* Next Step Button */}
      <CustomButton title={"다음"} />
    </CustomBottomSheet>
  );
};

export default NameStep;
