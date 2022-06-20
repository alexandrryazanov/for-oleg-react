import React from "react";

const ObjectTree = () => {
  const person = {
    name: "Oleg",
    age: 22,
    hobby: {
      first: "Programming",
      sport: {
        first: "snowboard",
        second: "run",
      },
    },
  };
  console.log(person);
  return (
    <div>
      <div>{JSON.stringify(person)}</div>
      {/*<div>{person}</div>*/}
    </div>
  );
};

export default ObjectTree;
