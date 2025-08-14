interface FormData {
  drinkId: number;
  amount: number;
  drinkAt: string;
}

export const useSubmitHandler = () => {
  const onSubmit = (data: FormData) => {
    // 최종 데이터 구성
    const submitData = {
      drinkId: data.drinkId,
      amount: data.amount,
      drinkAt: data.drinkAt,
    };

    console.log("Submit Data:", submitData);
    // TODO: API 연동 시 여기에 API 호출 로직 추가

    return submitData;
  };

  return {
    onSubmit,
  };
};

export default useSubmitHandler;
