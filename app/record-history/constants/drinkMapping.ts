import { TabType } from "@/components/CustomTab";

// 탭에 따른 drinkId 매핑
export const drinkIdMap: Record<string, number> = {
  All: 0,
  Water: 1,
  Coffee: 2,
  GreenTea: 3,
  Cola: 4,
};

// 한글 탭을 영어 키로 매핑
export const tabToKeyMap = (tab: string): string => {
  switch (tab) {
    case "전체":
      return "All";
    case "물":
      return "Water";
    case "커피":
      return "Coffee";
    case "녹차":
      return "GreenTea";
    case "콜라":
      return "Cola";
    default:
      return "Water";
  }
};

// drinkId 가져오기 헬퍼 함수
export const getDrinkId = (tab: TabType): number => {
  return drinkIdMap[tabToKeyMap(tab)];
};

export default drinkIdMap;
