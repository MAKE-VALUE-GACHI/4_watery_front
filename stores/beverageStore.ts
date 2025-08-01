import { create } from "zustand";
import { dummyBeverages } from "@/app/(tabs)/constants/beverageDataSet";

export interface beverageState {
  currentIndex: number;
  addAmount: (amount: number) => void;
  setCurrentIndex: (index: number) => void;
  beverages: typeof dummyBeverages;
}

export const useBeverageStore = create<beverageState>((set, get) => ({
  currentIndex: 0,
  beverages: dummyBeverages,
  setCurrentIndex: (index) => set({ currentIndex: index }),
  addAmount: (amount) => {
    const { currentIndex, beverages } = get();
    // 새로운 배열을 만들어서 상태를 불변성 있게 변경
    const updatedBeverages = beverages.map((bev, idx) =>
      idx === currentIndex ? { ...bev, totalAmount: bev.totalAmount + amount } : bev,
    );
    set({ beverages: updatedBeverages });
  },
}));

// TODO: 음료량 기록 API 연동 시 삭제 (아마도...?)