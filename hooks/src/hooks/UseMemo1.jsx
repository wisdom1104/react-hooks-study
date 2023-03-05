// 동일한 값을 반환하는 함수를 계속 호출해야 하면 필요없는 렌더링을 하게 된다.

// 맨 처음 해당 값을 반환할 때 그 값을 특별한 곳(메모리)에 저장하다면,
// 필요할 때 마다 다시 함수를 호출해서 계산하는게 아니라,
// 이미 저장한 값을 단순히 꺼내와서 쓸 수 있다.
// dependency Array(의존성배열)의 값이 변경 될 때만 반환할 함수()가 호출된다.

// 그 외의 경우에는 memoization 해놨던 값을 가져오기만 한다.

// 주의해야 할 사항
// useMemo를 남발하게 되면 별도의 메모리 확보를 너무나 많이 하게 되기 때문에 오히려 성능이 악화될 수 있다.
// 필요할 때만 써야 한다.

import HeavyComponent from "./UseMemo1-exmple/HeavyComponent";
import LightComponent from "./UseMemo1-exmple/LightComponent";
import styled from "styled-components";

const HeavyBox = styled.div`
  background-color: lightsteelblue;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 10px;
`;

const LigthBox = styled.div`
  background-color: slategray;
  border-radius: 20px;
  padding: 10px;
`;

function UseMemo() {
  return (
    <>
      <p>속도 체감하기!</p>
      <HeavyBox>
        <HeavyComponent />
      </HeavyBox>
      <LigthBox>
        <LightComponent />
      </LigthBox>
    </>
  );
}

export default UseMemo;
