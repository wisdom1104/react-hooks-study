//콘솔에 뜨는게 헷갈릴 땐 그 부분 빼고 주석처리하고 보기!

import React from "react";
import GlobalStyle from "./hooks/GlobalStyles";
import StyledComponents from "./hooks/StyledComponents";
import UseState from "./hooks/UseState";
import UseEffect from "./hooks/UseEffect";
import UseRef from "./hooks/UseRef";
import UseContext from "./hooks/UseContext";
import ReactMemo from "./hooks/ReactMemo";
import UseCallback from "./hooks/UseCallback";
import UseMemo1 from "./hooks/UseMemo1";
import UseMemo2 from "./hooks/UseMemo2";

function App() {
  const line = () => {
    console.log("-----------------------");
  };
  return (
    <>
      <GlobalStyle />
      <button onClick={line}>콘솔 구분선 긋기</button>
      <p>-----------------------styled-components-----------------------</p>
      <StyledComponents />
      <p>-----------------------useState-----------------------</p>
      <UseState />

      <p>-----------------------useEffect-----------------------</p>
      <UseEffect />
      <p>-----------------------useRef-----------------------</p>
      <UseRef />
      <p>-----------------------useContext-----------------------</p>
      <UseContext />
      <p>-----------------------React.memo-----------------------</p>
      <ReactMemo />
      <p>-----------------------useCallback-----------------------</p>
      <UseCallback />
      <p>-----------------------useMemo 무게 줄이기-----------------------</p>
      <UseMemo1 />
      <p>
        -----------------------useMemo 불변성 관련해서
        보기-----------------------
      </p>
      <UseMemo2 />
    </>
  );
}

export default App;
