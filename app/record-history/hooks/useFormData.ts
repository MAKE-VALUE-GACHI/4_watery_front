import { useForm } from "react-hook-form";
import { getDrinkId } from "../constants/drinkMapping";

interface FormData {
  drinkId: number;
  amount: number;
  drinkAt: string;
}

export const useFormData = () => {
  const { handleSubmit, setValue, watch, reset } = useForm<FormData>({
    defaultValues: {
      drinkId: getDrinkId("물"),
      amount: 500,
      drinkAt: new Date().toISOString(),
    },
  });

  const currentVal = watch("amount");
  const selectedDate = new Date(watch("drinkAt"));

  const setCurrentVal = (value: number) => {
    setValue("amount", value);
  };

  const setSelectedDate = (date: Date) => {
    setValue("drinkAt", date.toISOString());
  };

  const updateDrinkId = (drinkId: number) => {
    setValue("drinkId", drinkId);
  };

  return {
    handleSubmit,
    reset,
    currentVal,
    selectedDate,
    setCurrentVal,
    setSelectedDate,
    updateDrinkId,
  };
};

export default useFormData;
