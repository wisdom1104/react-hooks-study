// useContxt

// 여러 컴포넌트에서 동일한 변수 함수를 같이 사용하고 싶어서 사용하는것이다.
// 엄밀히 말하면 전역값 관리에 가깝지 전역 상태 그 자체는 아니다.

// props를 하여 GrandFather 컴포넌트 > Father 컴포넌트 > Child 컴포넌트로 데이터를 전달해주는데,
// 너무 깊어지게 되면 prop drilling 현상이 일어나서, prop의 경로 파악과 오류 추적이 힘들어진다.

// 이 비효율적인 방법을 대신하도록 useContext를 사용할 수 있다.
// context에서 전해줄 것이기 때문에 더 이상 props가 필요없다.

// 그렇기에  FamilyContext.Provider로 전해주고,

// props를 받던 Father 컴포넌트에서도 Child에게 props를 줄 필요가 없다.

// 주의할 점
// useContext를 사용할 때, Provider에서 제공한 value가 달라진다면,
// useContext를 사용하고 있는 모든 컴포넌트가 리렌더링 된다.
// value 부분을 항상 신경써야 하고, 그 대안으로 메모이제이션이 있다.

import GrandFather from "./UseContext-exmple/GrandFather";
//UseContext-exmple 파일 참고하기이이이!!!
export function UseContext() {
  return <GrandFather />;
}

export default UseContext;
