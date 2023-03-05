import React, { useContext } from "react";
import { FamilyContext } from "./FamilyContext"; //저장소 불러오기!

function Child({ Name, Country }) {
  const data = useContext(FamilyContext);
  console.log("useEffect의 콘솔", data);

  return (
    <div>
      <span>나는 눈사람이에요</span>
      <span>제 이름은 "{data.Name}"라고 해요.</span>
      <span>게다가 용돈도 '{data.Country}원'이나 있답니다!</span>
    </div>
  );
}

export default Child;
