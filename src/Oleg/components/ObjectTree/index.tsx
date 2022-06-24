import React, { useEffect, useState } from "react";

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
  const [objectStr, setObjectStr] = useState([]);

  useEffect(() => {
    const arrayStr: any = [];
    const objectTree = (obj: any) => {
      for (const [key, value] of Object.entries(obj)) {
        if (typeof value === "object") {
          arrayStr.push(`${key}: {`);
          objectTree(value);
          arrayStr.push(`}`);
        } else {
          arrayStr.push(`${key}: ${value},`);
          console.log(`${key}: ${value}`);
        }
      }
      setObjectStr(arrayStr);
    };
    objectTree(person);
  }, []);

  return (
    <div>
      <div>{JSON.stringify(person)}</div>
      <br />
      <div>
        <div>{"{"}</div>
        {objectStr.map((str) => (
          <div>{str}</div>
        ))}
        <div>{"}"}</div>
      </div>
    </div>
  );
};

export default ObjectTree;
