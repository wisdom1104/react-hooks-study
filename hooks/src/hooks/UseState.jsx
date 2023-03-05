// useState
//리액트는 성능을 위해 setState()를 단일 업데이트(batch update)로 한꺼번에 처리할 수 있습니다.
//일반 업데이트 방식은 버튼을 클릭했을 때 첫번째 줄 ~ 세번째 줄의 있는 setNumber가 각각 실행되는 것이 아니라,
//배치(batch)로 처리합니다.
//즉 우리가 onClick을 했을 때 setNumber 라는 명령을 세번 내리지만,
//리액트는 그 명령을 하나로 모아 최종적으로 한번만 실행을 시킵니다.
//그래서 setNumber을 3번 명령하던, 100번 명령하던 1번만 실행됩니다.

//반면에 함수형 업데이트 방식은 3번을 동시에 명령을 내리면, 그 명령을 모아 순차적으로 각각 1번씩 실행시킵니다.
//0에 1더하고, 그 다음 1에 1을 더하고, 2에 1을 더해서 3이라는 결과가 우리 눈에 보이는 것이죠.

import { useState } from "react";
import GlobalStyle from "./GlobalStyles";

const UseState = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  return (
    <>
      <GlobalStyle />
      <h3>나는야 일반 업데이트!!</h3> {/* 배치로 처리된다 */}
      {number1}
      <button
        onClick={() => {
          setNumber1(number1 + 1);
          setNumber1(number1 + 1);
          setNumber1(number1 + 1);
        }}
      >
        1씩 플러스 되지!
      </button>
      <h3>나는야 함수형 업데이트!!</h3>
      {number2}
      <button
        onClick={() => {
          setNumber2((previousState) => previousState + 1);
          setNumber2((previousState) => previousState + 1);
          setNumber2((previousState) => previousState + 1);
        }}
      >
        3씩 플러스 되지!
      </button>
    </>
  );
};

export default UseState;
