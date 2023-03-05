// 부모 컴포넌트가 리렌더링 되면 자식컴포넌트는 모두 리렌더링 된다.

// 자식 컴포넌트의 입장에서는 변경사항이 없지만 불필요하게 렌더링 될 수 있는데,
// 이 부분을 돕는 도구가 바로 React.memo이다.

// React.memo를 이용해서 컴포넌트를 메모리에 저장해두고 필요할 때 갖다 쓸 수 있다.
// 이렇게 하면 부모 컴포넌트의 state의 변경으로 인해 props가 변경이 일어나지 않는 한 컴포넌트는 리렌더링 되지 않는다.

// 이것을 컴포넌트 memoization 이라고 합니다.

import React, { useState } from "react";
import Box1 from "./ReactMemo-exmple/Box1";
import Box2 from "./ReactMemo-exmple/Box2";
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function ReactMemo() {
  console.log("ReactMemo 컴포넌트가 렌더링되었습니다!");

  const [count, setCount] = useState(0);

  // 1을 증가시키는 함수
  const onPlusButtonClickHandler = () => {
    setCount(count + 1);
  };

  // 1을 감소시키는 함수
  const onMinusButtonClickHandler = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h3>React.memo 예제입니다!</h3>
      <p>현재 카운트 : {count}</p>
      <StContainer>
        <button onClick={onPlusButtonClickHandler}>+</button>
        <button onClick={onMinusButtonClickHandler}>-</button>
      </StContainer>
      <StContainer>
        <Box1 />
        <Box2 />
      </StContainer>
      <span>Box1은 React.memo되지 않아 리렌더링 된다..!!</span>
      <span>Box2는 React.memo되어 리렌더링 안 되지롱~</span>
    </>
  );
}

export default ReactMemo;
