import React from "react";
import Father from "./Father";
import { FamilyContext } from "./FamilyContext";

function GrandFather() {
  const Name = "올라프";
  const Country = 1000;

  return (
    //context에서 전해줄 것이기 때문에 더 이상 props가 필요없다.
    //그렇기에  FamilyContext.Provider로 전해주지!
    <FamilyContext.Provider value={{ Name, Country }}>
      <Father />
    </FamilyContext.Provider>
  );
}

export default GrandFather;
