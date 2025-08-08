import { Control, FieldPath, FieldValues, useController } from "react-hook-form";

/**
 * react-hook-form과 통합된 CustomInput 훅
 * 
 * @param name - 폼 필드명
 * @param control - react-hook-form의 control 객체
 * @param rules - 유효성 검사 규칙
 * @param defaultValue - 기본값
 * @returns 폼 컨트롤에 필요한 props들
 */
export function useCustomInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  control,
  rules,
  defaultValue,
}: {
  name: TName;
  control: Control<TFieldValues>;
  rules?: any;
  defaultValue?: any;
}) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return {
    value: value || "",
    onChangeText: onChange,
    onBlur,
    isError: !!error,
    errorText: error?.message,
  };
}
