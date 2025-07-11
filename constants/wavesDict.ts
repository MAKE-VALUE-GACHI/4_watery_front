import {Colors} from "@/constants/Colors";

/**
 * A (Amplitude) - 진폭, 웨이브의 높이/깊이
 * 값 범위: 보통 5~50 정도
 * 효과:
 * A가 클수록 → 웨이브가 더 높고 깊게 움직임
 * A가 작을수록 → 웨이브가 얕고 부드럽게 움직임
 *
 * T (Period) - 주기, 웨이브가 한 번 완전히 움직이는 시간
 * 값 범위: 보통 50~300 정도
 * 효과:
 * T가 클수록 → 웨이브가 천천히 움직임
 * T가 작을수록 → 웨이브가 빠르게 움직임
 */
export const wavesDict = {
  water: [
    { A: 15, T: 350, fill: Colors.waves.water[0] },
    { A: 20, T: 325, fill: Colors.waves.water[1] },
    { A: 25, T: 300, fill: Colors.waves.water[2] },
  ],
  coffee: [
    { A: 15, T: 350, fill: Colors.waves.coffee[0] },
    { A: 20, T: 325, fill: Colors.waves.coffee[1] },
    { A: 25, T: 300, fill: Colors.waves.coffee[2] },
  ],
  greenTea: [
    { A: 15, T: 350, fill: Colors.waves.green_tea[0] },
    { A: 20, T: 325, fill: Colors.waves.green_tea[1] },
    { A: 25, T: 300, fill: Colors.waves.green_tea[2] },
  ],
  cola: [
    { A: 15, T: 350, fill: Colors.waves.cola[0] },
    { A: 20, T: 325, fill: Colors.waves.cola[1] },
    { A: 25, T: 300, fill: Colors.waves.cola[2] },
  ],
};
