// useEffect
// useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook입니다.
// 쉽게 말해 어떤 컴포넌트가 화면에 보여졌을 때(혹은 사라졌을때) 내가 무언가를 실행하고 싶다면 useEffect를 사용합니다.
// 컴포넌트가 렌더링 될 때 실행된다. 이게 바로 useEffect 핵심 기능입니다.
// -전체흐름-
// 1. input에 값을 입력한다.
// 2. value, 즉 state가 변경된다.
// 3. state가 변경되었기 때문에, App 컴포넌트가 리렌더링 된다.
// 4. 리렌더링이 되었기 때문에 useEffect가 다시 실행된다.
// 5. 1번 → 5번 과정이 계속 순환환다.
// - **(1) 의존성 배열(dependency array) 이란?**

// useEffect에는 의존성 배열이은 “이 배열에 값을 넣으면 그 값이 바뀔 때만 useEffect를 실행할게”라는 것 입니다.
// 어떤 함수를 컴포넌트가 렌더링 될 때 단 한번만 실행하고 싶으면 의존성 배열을  [ ]  빈 상태로 넣으면 됩니다.

import React, { useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyles";
//만약 두번씩 찍히면 index.js 파일의 주석 참고하기!!

const UseEffect = () => {
  const [novalue, setNovalue] = useState("");
  useEffect(() => {
    console.log("난 비어있는 의존성 배열이다!!!");
  }, []); //비어있는 의존성 배열
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log("난 value를 가진 의존성 배열이다!!!");
  }, [value]); // value를 넣음

  return (
    <>
      <GlobalStyle />
      <h2>콘솔도 확인해보시지!!</h2>
      <h3>난 비어있는 의존성 배열이다!!!</h3>
      <input
        type="text"
        value={novalue}
        onChange={(event) => {
          setNovalue(event.target.value);
        }}
      />
      <h3>난 value를 가진 의존성 배열이다!!!</h3>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </>
  );
};

export default UseEffect;
