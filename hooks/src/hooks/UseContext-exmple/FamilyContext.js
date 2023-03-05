import { createContext } from "react";

// 여기서 null을 넣는 이유는 초기값이 아니라,
//문제가 발생해서 컴텍스트를 불러오지 못할 때,
//null을 반환하게 한다!!
export const FamilyContext = createContext(null);
