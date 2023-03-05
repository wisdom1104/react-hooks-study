//styled-components
//yarn add styled-components로 패키지 설치하기!
// classname을 사용해서 구현하기는 조금 까다로운 조건부 스타일링을
// styled-components를 이용하면 간편하게 할 수 있다!! 와아우우

// props는 부모 컴포넌트에서 자식 컴포넌트로 어떤 정보를 전달하고자 할 때 사용한다네!

// styled-components도 말 그대로 컴포넌트 이기에,
// box에 prosp를 통해서 border color에 대한 정보를 전달해줄 수 있다.

// 즉, props를 통해서 부모 컴포넌트로부터 값을 전달받고, 조건문을 이용해서 조건부 스타일링을 할 수 있다.

// src/App.js

import React from "react";
import styled from "styled-components"; //styled-components import

// styled-components import 후 이 안에 스타일 코드를 작성!
// 스타일 코드는 우리가 알고 있는 css와 동일하니 좋다~
// 이 부분을 중시해야 하는게 컴포넌트니까 컴포넌트 안에 작성하면 오류 난당. 경험담인건 비밀하고파....
const StContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StBox = styled.button`
  width: 100px;
  height: 100px;
  border: 3px dotted ${(props) => props.borderColor}; //solid 식상하니 다른 디자인으로!
  border-radius: 50%; //50%로 하면 동그라미 되지롱~~
  margin: 20px;
  //글자 정렬을 위한 부분!
  //felx는 내가 하고 싶은 요소의 부모 요소에 해야한다!!
  //글자에 하고 싶으니 div 박스에다가 하는 것!
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 3px solid ${(props) => props.borderColor}; //hover는 마우스를 대면 생기는 효과!
  }
`;
// 박스의 색을 배열에 담습니다.
const boxList = ["red", "green", "blue"];

// 색을 넣으면, 이름을 반환해주는 함수를 만듭니다.
const getBoxName = (color) => {
  switch (color) {
    case "red":
      return "빨간 박스";
    case "green":
      return "초록 박스";
    case "blue":
      return "파란 박스";
    default:
      return "검정 박스";
  }
};
const StyledComponents = () => {
  return (
    <StContainer>
      {/* map을 이용해서 StBox를 반복하여 화면에 그립니다. */}
      {boxList.map((box, idx) => (
        <StBox key={idx} borderColor={box}>
          {getBoxName(box)}
        </StBox>
      ))}
    </StContainer>
  );
};

export default StyledComponents;
