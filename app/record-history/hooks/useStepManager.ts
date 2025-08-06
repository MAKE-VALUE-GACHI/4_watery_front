import { TabType } from "@/components/CustomTab";
import { useState } from "react";
import { getDrinkId } from "../constants/drinkMapping";

export const useStepManager = () => {
  const [currentTab, setCurrentTab] = useState<TabType>("물");
  const [addTimeMode, setAddTimeMode] = useState(false);

  const goToTimeStep = () => {
    setAddTimeMode(true);
    return getDrinkId(currentTab);
  };

  const goBackToAmountStep = () => {
    setAddTimeMode(false);
  };

  const resetSteps = () => {
    setCurrentTab("물");
    setAddTimeMode(false);
  };

  return {
    currentTab,
    setCurrentTab,
    addTimeMode,
    goToTimeStep,
    goBackToAmountStep,
    resetSteps,
  };
};

export default useStepManager;
