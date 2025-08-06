import CustomBottomSheet from "@/components/CustomBottomSheet/CustomBottomSheet";
import React from "react";
import { useAddPastRecord } from "../hooks/useAddPastRecord";
import AmountStep from "./AmountStep";
import TimeStep from "./TimeStep";

interface AddNewRecordProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddNewRecord: React.FC<AddNewRecordProps> = ({ isOpen, onClose }) => {
  const {
    currentTab,
    setCurrentTab,
    addTimeMode,
    currentVal,
    selectedDate,
    setCurrentVal,
    setSelectedDate,
    handleSubmit,
    onSubmit,
    setTimeMode,
    goBack,
    handleClose,
  } = useAddPastRecord();

  const handleCloseModal = () => {
    handleClose(onClose);
  };

  const handleSubmitForm = () => {
    handleSubmit((data: any) => {
      onSubmit(data);
      onClose();
    })();
  };

  return (
    <CustomBottomSheet isOpen={isOpen} onClose={handleCloseModal}>
      {!addTimeMode ? (
        <AmountStep
          currentTab={currentTab}
          onSelectTab={setCurrentTab}
          currentVal={currentVal}
          setCurrentVal={setCurrentVal}
          onNext={setTimeMode}
        />
      ) : (
        <TimeStep
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          onBack={goBack}
          onSubmit={handleSubmitForm}
        />
      )}
    </CustomBottomSheet>
  );
};

export default AddNewRecord;
