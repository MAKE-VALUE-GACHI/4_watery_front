import React from "react";
import { commonStyles } from "@/components/common.styles";
import { ThemedView } from "@/components/ThemedView";
import CustomButton from "@/components/CustomButton/CustomButton";

const RecordHistory = () => {
  return (
    <ThemedView style={commonStyles.pageContainer}>
      <CustomButton
        title={"지난 기록 추가"}
        variant={"secondary"}
        textStyle={{ fontWeight: "bold" }}
      />
    </ThemedView>
  );
};

export default RecordHistory;
