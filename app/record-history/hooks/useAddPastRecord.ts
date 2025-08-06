import { TabType } from "@/components/CustomTab";
import { useFormData } from "./useFormData";
import { useStepManager } from "./useStepManager";
import { useSubmitHandler } from "./useSubmitHandler";

export interface UseAddPastRecordReturn {
  // Form state
  currentTab: TabType;
  setCurrentTab: (tab: TabType) => void;
  addTimeMode: boolean;

  // Form values
  currentVal: number;
  selectedDate: Date;
  setCurrentVal: (value: number) => void;
  setSelectedDate: (date: Date) => void;

  // Form methods
  handleSubmit: (onSubmit: (data: any) => void) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  onSubmit: (data: any) => void;
  reset: () => void;

  // Actions
  setTimeMode: () => void;
  goBack: () => void;
  handleClose: (onClose: () => void) => void;
}

export const useAddPastRecord = (): UseAddPastRecordReturn => {
  const {
    handleSubmit,
    reset: resetForm,
    currentVal,
    selectedDate,
    setCurrentVal,
    setSelectedDate,
    updateDrinkId,
  } = useFormData();

  const { currentTab, setCurrentTab, addTimeMode, goToTimeStep, goBackToAmountStep, resetSteps } =
    useStepManager();

  const { onSubmit: submitData } = useSubmitHandler();

  const setTimeMode = () => {
    const drinkId = goToTimeStep();
    updateDrinkId(drinkId);
  };

  const onSubmit = (data: any) => {
    submitData(data);
    // 폼 초기화 및 스텝 리셋
    resetForm();
    resetSteps();
  };

  const goBack = () => {
    goBackToAmountStep();
  };

  const handleClose = (onClose: () => void) => {
    // 폼 초기화 및 모달 닫기
    resetForm();
    resetSteps();
    onClose();
  };

  const reset = () => {
    resetForm();
    resetSteps();
  };

  return {
    // Form state
    currentTab,
    setCurrentTab,
    addTimeMode,

    // Form values
    currentVal,
    selectedDate,
    setCurrentVal,
    setSelectedDate,

    // Form methods
    handleSubmit,
    onSubmit,
    reset,

    // Actions
    setTimeMode,
    goBack,
    handleClose,
  };
};

export default useAddPastRecord;
