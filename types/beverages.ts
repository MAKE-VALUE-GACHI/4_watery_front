export type BeverageType = {
  id: string | number;
  name: string;
  totalAmount: number;
  includesDailyHydrationGoal: boolean;
  colorTemplate: {
    colorTemplateId: string | number;
    colors: string[];
  };
};
