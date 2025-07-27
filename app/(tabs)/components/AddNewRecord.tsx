import CustomBottomSheet from "@/components/CustomBottomSheet/CustomBottomSheet";
import React from "react";
import { Text, View } from "react-native";

interface addNewRecordProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddNewRecord: React.FC<addNewRecordProps> = ({ isOpen, onClose }) => {
  return (
    <CustomBottomSheet isOpen={isOpen} onClose={onClose}>
      <View>
        <Text>이곳이 바텀시트!</Text>
      </View>
    </CustomBottomSheet>
  );
};

export default AddNewRecord;
