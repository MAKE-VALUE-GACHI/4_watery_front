import { customBottomSheetStyles } from "@/components/CustomBottomSheet/CustomBottomSheet.styles";
import React, { useEffect } from "react";
import { View } from "react-native";
import Modal, { ModalProps } from "react-native-modal";

interface CustomBottomSheetProps extends Partial<ModalProps> {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  showBackdrop?: boolean;
  staticMode?: boolean; // ✅ 정적으로 항상 오픈될 경우 사용
  children: React.ReactNode;
  style?: any;
}

/**
 * CustomBottomSheet
 *
 * @description
 * react-native-modal 라이브러리를 기반으로 한 공용 바텀시트 컴포넌트입니다.
 * - isOpen, onOpen, onClose 등 선언형 props로 바텀시트의 열림/닫힘 및 이벤트를 외부에서 쉽게 제어할 수 있습니다.
 * - snapPoints는 지원하지 않으며, 스타일 및 높이 조정은 style prop으로 커스텀 가능합니다.
 * - react-native-modal의 모든 props(animationIn, animationOut, backdropColor 등)를 그대로 사용할 수 있습니다.
 *
 * @example
 * <CustomBottomSheet staticMode> - 고정된 BottomSheet(Open)
 * or
 * <CustomBottomSheet  - 모달 동작하는 모달형 BottomSheet(Open/Close)
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   animationIn="slideInUp"
 *   animationOut="slideOutDown"
 *   style={{ minHeight: 200 }}
 * >
 *   <Text>내용</Text>
 * </CustomBottomSheet>
 *
 * @param {boolean} [isOpen] - true면 바텀시트가 열리고, false면 닫힙니다.
 * @param {() => void} [onOpen] - 바텀시트가 열릴 때 호출되는 콜백
 * @param {() => void} [onClose] - 바텀시트가 닫힐 때 호출되는 콜백
 * @param {boolean} [showBackdrop] - 바텀시트가 열릴 때 배경
 * @param {React.ReactNode} children - 바텀시트 내부에 렌더링할 내용
 * @param {object} [style] - 바텀시트 컨테이너의 추가 스타일
 * @param {...ModalProps} rest - react-native-modal의 모든 props를 그대로 전달 가능
 */
const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({
  isOpen = false,
  onOpen,
  onClose,
  showBackdrop = true,
  staticMode = false,
  children,
  style,
  ...rest
}) => {
  useEffect(() => {
    if (!staticMode) {
      if (isOpen && onOpen) onOpen();
      if (!isOpen && onClose) onClose();
    }
  }, [isOpen, staticMode]);

  // staticMode: 항상 열린 상태로 View만 렌더링
  if (staticMode) {
    return (
      <View style={[customBottomSheetStyles.modal, { position: "absolute", bottom: 0 }]}>
        <View style={customBottomSheetStyles.sheet}>{children}</View>
      </View>
    );
  }

  // Modal 기반 애니메이션 + 닫기 기능 포함
  return (
    // useNativeDriver, onSwipeComplete 동시 사용 불가 - 공식 문서 참조
    <Modal
      isVisible={isOpen}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      style={customBottomSheetStyles.modal}
      backdropTransitionOutTiming={0}
      {...rest}
    >
      <View style={[customBottomSheetStyles.sheet, style]}>
        <View style={customBottomSheetStyles.handle} />
        {children}
      </View>
    </Modal>
  );
};

export default CustomBottomSheet;
