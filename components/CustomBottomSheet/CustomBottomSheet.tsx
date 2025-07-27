/**
 * CustomBottomSheet
 *
 * @description
 * @gorhom/bottom-sheet 라이브러리를 기반으로 한 공용 바텀시트 컴포넌트입니다.\n *
 * - isOpen, snapIndex 등 선언형 props로 바텀시트의 열림/닫힘 및 위치를 외부에서 쉽게 제어할 수 있습니다.
 * - onOpen, onClose 콜백으로 바텀시트의 열림/닫힘 이벤트를 직관적으로 처리할 수 있습니다.
 * - snapPoints, enablePanDownToClose 등 BottomSheet의 모든 props를 그대로 사용할 수 있습니다.
 * - imperative(ref) 방식과 선언형 제어 방식을 모두 지원하여, 다양한 상황에서 재사용성이 높습니다.
 *
 * @example
 * const ref = useRef<BottomSheet>(null);
 * <CustomBottomSheet
 *   bottomSheetRef={ref}
 *   isOpen={isOpen}
 *   onOpen={() => ...}
 *   onClose={() => ...}
 *   snapPoints={["25%", "50%"]}
 *   enablePanDownToClose
 * >
 *   <Text>내용</Text>
 * </CustomBottomSheet>
 *
 * @param {React.RefObject} bottomSheetRef - BottomSheet 인스턴스에 접근하기 위한 ref (필수)
 * @param {boolean} [isOpen] - true면 바텀시트가 열리고, false면 닫힙니다. (선언형 제어)
 * @param {() => void} [onOpen] - 바텀시트가 열릴 때 호출되는 콜백
 * @param {() => void} [onClose] - 바텀시트가 닫힐 때 호출되는 콜백
 * @param {number} [snapIndex] - 외부에서 바텀시트의 snap 위치를 직접 제어할 때 사용
 * @param {React.ReactNode} children - 바텀시트 내부에 렌더링할 내용
 * @param {...BottomSheetProps} rest - @gorhom/bottom-sheet의 모든 props를 그대로 전달 가능
 */
import React, { useEffect } from "react";
import { Dimensions, View } from "react-native";
import Modal from "react-native-modal";
import { customBottomSheetStyles } from "@/components/CustomBottomSheet/CustomBottomSheet.styles";

interface CustomBottomSheetProps {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  snapPoints?: (string | number)[];
  children: React.ReactNode;
  style?: any;
}

const { width: screenWidth } = Dimensions.get("window");

const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({
  isOpen = false,
  onOpen,
  onClose,
  children,
  style,
}) => {
  useEffect(() => {
    if (isOpen && onOpen) onOpen();
    if (!isOpen && onClose) onClose();
  }, [isOpen]);

  return (
    <Modal
      isVisible={isOpen}
      onBackdropPress={onClose}
      style={customBottomSheetStyles.modal}
      backdropTransitionOutTiming={0}
      useNativeDriver
    >
      <View style={[customBottomSheetStyles.sheet, style]}>{children}</View>
    </Modal>
  );
};

export default CustomBottomSheet;
