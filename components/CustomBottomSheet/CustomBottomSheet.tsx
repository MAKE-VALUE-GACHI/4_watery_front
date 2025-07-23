import type { SNAP_POINT_TYPE } from "@gorhom/bottom-sheet";
import BottomSheet, { BottomSheetProps } from "@gorhom/bottom-sheet";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface CustomBottomSheetProps extends Omit<BottomSheetProps, "ref"> {
  bottomSheetRef: React.RefObject<any>;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  snapIndex?: number; // 외부에서 snap 위치를 직접 제어하고 싶을 때만
  children: React.ReactNode;
}

const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({
  bottomSheetRef,
  isOpen,
  onOpen,
  onClose,
  snapIndex,
  children,
  ...rest
}) => {
  // 열고 닫기
  useEffect(() => {
    if (!bottomSheetRef.current || isOpen === undefined) return;
    if (isOpen) {
      bottomSheetRef.current.expand();
    } else {
      bottomSheetRef.current.close();
    }
  }, [isOpen, bottomSheetRef]);

  // snapIndex 제어
  useEffect(() => {
    if (
      bottomSheetRef.current &&
      typeof snapIndex === "number"
    ) {
      bottomSheetRef.current.snapToIndex(snapIndex);
    }
  }, [snapIndex, bottomSheetRef]);

  // onChange 핸들러
  const handleChange = (index: number, lastIndex: number, type: SNAP_POINT_TYPE) => {
    rest.onChange?.(index, lastIndex, type);
    if (index === -1) onClose?.();
    if (index === 0 && onOpen) onOpen();
  };

  return (
    <GestureHandlerRootView>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleChange}
        {...rest}
      >
        {children}
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default CustomBottomSheet;
