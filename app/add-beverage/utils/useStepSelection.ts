import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

export function useStepSelection<T extends string>(
  formKey: string,
  options: T[],
  onSelectionChange?: (selected: boolean) => void,
) {
  const { setValue, watch } = useFormContext();
  const value = watch(formKey);
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    if (value) {
      setSelectedIdx(options.indexOf(value) + 1);
    } else {
      setSelectedIdx(0);
    }
  }, [value, options]);

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(selectedIdx !== 0);
    }
  }, [selectedIdx, onSelectionChange]);

  const changeSelectedOption = (idx: number) => {
    setSelectedIdx(idx);
    setValue(formKey, idx === 0 ? undefined : options[idx - 1]);
  };

  return { selectedIdx, changeSelectedOption };
}

export default useStepSelection;
