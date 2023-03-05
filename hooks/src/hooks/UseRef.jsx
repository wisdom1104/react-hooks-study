// useRef
// DOM 요소에 접근할 수 있도록 하는 React Hook 이다.
// 리액트에서도 DOM을 선택해야 할 상황이 생길 때, useRef hook을 사용한다.
// ex) 화면이 렌더링 되자마자 특정 input 태그가 focusing이 돼야 하는 경우 등
// 다만, 이렇게 설정된 ref 값은 컴포넌트가 계속해서 렌더링 되어도 unmount 전까지 값을 유지한다는 것을 주의해야한다.

// 이러한 특징 때문에 useRef는 다음 2가지 용도로 사용된다.
// 1. 저장공간
// - state와 비슷한 역할을 한다. (다만 state는 변화가 일어나면 다시 렌더링이 일어나서 내부 변수들은 초기화)
// - ref에 저장한 값은 렌더링을 일으키지 않는다. (ref의 값 변화가 일어나도 내부 변수들이 초기화 X)
// - state는 리렌더링이 꼭 필요한 값을 다룰 때 쓰면 된다.
// - ref는 리렌더링을 발생시키지 않는 값을 저장할 때 사용한다.
// 2. DOM
// - 렌더링 되자마자 특정 input이 focusing 돼야 한다면 useRef를 사용한다.

import { useRef, useState } from "react";
import GlobalStyle from "./GlobalStyles";

function UseRef() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const plusStateCountButtonHandler = () => {
    setCount(count + 1);
    console.log(count);
  };

  const plusRefCountButtonHandler = () => {
    countRef.current++;
    console.log(countRef);
  };

  return (
    <>
      <GlobalStyle />
      <h2>콘솔도 확인해보시지!!</h2>
      <h3>state 영역</h3>
      <span>자체 렌더링O -&gt; {count}</span>
      <button onClick={plusStateCountButtonHandler}>state 증가</button>
      <h3>ref 영역 -렌더링이 일어나면 변경됨!-</h3>
      <span>자체 렌더링X -&gt; {countRef.current}</span>
      <button onClick={plusRefCountButtonHandler}>ref 증가</button>
    </>
  );
}

export default UseRef;
