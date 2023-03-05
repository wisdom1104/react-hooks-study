// useEffect hook을 이용해서 me의 정보가 바뀌었을 때만 발동되게끔 dependency array를 넣어놨지만,
// 엉뚱하게도 count를 증가하는button을 눌러보면 계속 log가 찍힌다.

// 이 부분은 불변성과 관련이 깊다.

// 예제에서 버튼이 선택돼서 uselessCount state가 바뀌게 되면
// → 리렌더링이 되고, 컴포넌트 함수가 새로 호출된다
// → me 객체도 다시 할당한다(이 때, 다른 메모리 주소값을 할당받는다)
// → useEffect의 dependency array에 의해 me 객체가 바뀌었는지 확인해봐야 하는데, 이전 것과 모양은 같은데 주소가 다르다.
// → 리액트 입장에서는 me가 바뀌었구나 인식하고 useEffect 내부 로직이 호출된다.

// useMemo()만 이렇게 써주면, uselessCount가 아무리 증가돼도 영향이 없게 된다.

import React, { useEffect, useState, useMemo } from "react";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components";

const Box = styled.div`
  margin-bottom: 100px;
`;

function UseMemo2() {
  const [isFavorite, setIsFavorite] = useState(true);
  const [uselessCount, setUselessCount] = useState(0);

  // 이건 같이 리렌더링 되게 해요..!
  // const me = {
  //   name: "올라프",
  //   age: 21,
  //   isFavorite: isFavorite ? "안나" : "엘사",
  // };

  //이건 같이 리렌더링 안돼요!
  const me = useMemo(() => {
    return {
      name: "올라프",
      age: 21,
      isFavorite: isFavorite ? "안나" : "엘사",
    };
  }, [isFavorite]);

  useEffect(() => {
    console.log("좋아하는 사람이 바뀌었어요!");
  }, [me]);

  return (
    <>
      <GlobalStyle />
      <Box>
        <p>
          내 이름은 {me.name}이구, 나이는 {me.age}야!
        </p>
        <button
          onClick={() => {
            setIsFavorite(!isFavorite);
          }}
        >
          누르면 좋아하는 사람이 바뀌어요!
        </button>
        <span>좋아하는 사람 : {me.isFavorite}</span>
        <p>상관없는 부분이에요!!</p>
        {uselessCount}
        <br />
        <button
          onClick={() => {
            setUselessCount(uselessCount + 1);
          }}
        >
          누르면 숫자가 올라가요
        </button>
      </Box>
    </>
  );
}

export default UseMemo2;
