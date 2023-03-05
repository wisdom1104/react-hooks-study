// 전역 스타일링
// 공통적으로 들어가야 할 스타일을 적용해야 할 상황도 있다.
// 그럴 경우 ‘전역적으로(globally)’ 스타일을 지정한다고 하는데, 그럴 때 적용하는 방법이 바로 전역 스타일링이다.
// 이 때, 공통적으로 적용되는 스타일링 부분은 빼줄 필요가 있다.

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default GlobalStyle;
