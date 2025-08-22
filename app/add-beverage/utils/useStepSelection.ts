import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

export function useStepSelection<T extends string>(
  formKey: string,
  options: T[],
  onSelectionChange?: (selected: boolean) => void,
) {
  const { setValue, watch } = useFormContext();
  const value = watch(formKey) as string | undefined;
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    if (value) {
      setSelectedIdx(options.indexOf(value as T) + 1);
    } else {
      setSelectedIdx(0);
    }
  }, [value, options]);

  useEffect(() => {
    onSelectionChange?.(selectedIdx !== 0);
  }, [selectedIdx, onSelectionChange]);

  const changeSelectedOption = (idx: number) => {
    // 같은 버튼을 다시 누르면 해제 → 기본(default)으로
    if (selectedIdx === idx) {
      setValue(formKey, "" as any, { shouldDirty: true, shouldValidate: true, shouldTouch: true });
    } else {
      setValue(formKey, options[idx - 1] as any, {
        shouldDirty: true,
        shouldValidate: true,
        shouldTouch: true,
      });
    }
  };

  return { selectedIdx, changeSelectedOption };
}
