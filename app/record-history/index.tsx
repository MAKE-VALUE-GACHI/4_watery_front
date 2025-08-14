import React, { useState } from "react";
import { commonStyles } from "@/components/common.styles";
import { ThemedView } from "@/components/ThemedView";
import CustomButton from "@/components/CustomButton/CustomButton";
import AddPastRecord from "@/app/record-history/components/AddPastRecord";

const RecordHistory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ThemedView style={commonStyles.pageContainer}>
      <CustomButton
        title={"지난 기록 추가"}
        variant={"secondary"}
        textStyle={{ fontWeight: "bold" }}
        onPress={() => setIsModalOpen(true)}
      />
      <AddPastRecord isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </ThemedView>
  );
};

export default RecordHistory;
