// useCallback은 인자로 들어오는 함수 자체를 기억(메모이제이션)한다.

// React.memo를 통해서 하위 컴포넌트를 메모이제이션을 했는데도 리렌더링이 되는 이유
// 함수형 컴포넌트를 사용하기 때문이고,  App.jsx가 리렌더링 되면서 코드가 다시 만들어지기 때문이다.
// 자바스크립트에서는 함수도 객체의 한 종류이다.
// 모양은 같더라도 다시 만들어지면 그 주솟값이 달라지고 이에 따라 하위 컴포넌트는 props가 변경됐다고 인식한다.
// 그렇기 때문에, 이 함수를 메모리 공간에 저장해놓고, 특정 조건이 아닌 경우엔 변경되지 않도록 해야한다.

import React, { useState, useCallback } from "react";
import Box3 from "./UseCallBack-exmple/Box3";
import Box4 from "./UseCallBack-exmple/Box4";
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function UseCallBack() {
  console.log("UseCallBack 컴포넌트가 렌더링되었습니다!");

  const [count, setCount] = useState(0);

  // 1을 증가시키는 함수
  const onPlusClickHandler = () => {
    setCount(count + 1);
  };

  // 1을 감소시키는 함수
  const onMinusClickHandler = () => {
    setCount(count - 1);
  };

  // 변경 전 -> Box4도 렌더링 된다.
  // const initCount = () => {
  //   setCount(0);
  // };

  // box4 렌더링 방지를 위해 변경 후
  const initCount = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <>
      <h3>useCallback 예제입니다!</h3>
      <p>현재 카운트 : {count}</p>
      <StContainer>
        <button onClick={onPlusClickHandler}>+</button>
        <button onClick={onMinusClickHandler}>-</button>
      </StContainer>
      <StContainer>
        <Box3 />
        <Box4 initCount={initCount} />
      </StContainer>
      <span>Box3는 React.memo되어 리렌더링 안 되지롱~</span>
      <span>Box4의 초기화 버튼에 useCallback사용하여 리렌더링 안 되지롱~</span>
    </>
  );
}

export default UseCallBack;
