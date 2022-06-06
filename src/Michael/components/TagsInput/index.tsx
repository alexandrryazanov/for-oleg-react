import React, { useRef, useState } from "react";
import "./style.css";
const TagsInput = () => {
  const [valueTagsInput, setValueTagsInput] = useState("");
  const [state, setState] = useState<string[]>([]);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueTagsInput(e.target.value);
  };
  const padleftRef = useRef(0);
  const onClickHandler = () => {
    setState((prev) => [...prev, valueTagsInput]);
    setValueTagsInput("");
    padleftRef.current = padleftRef.current + valueTagsInput.length * 10 + 50;
  };
  console.log(padleftRef.current);
  return (
    <div className={"m-wrapper-tags-input "}>
      <input
        className={"m-tags-input"}
        style={{
          paddingLeft: padleftRef.current ? padleftRef.current + "px" : "20px",
          width: 400 - padleftRef.current + "px",
        }}
        value={valueTagsInput}
        onChange={onChangeHandler}
      />
      <button onClick={onClickHandler}>Кнопка</button>
      {state.map((el) => (
        <div
          className={"m-tags-input-item"}
          // style={{
          //   marginLeft: valueTagsInput.length + 10 + "px",
          //   position: "fixed",
          // }}
          key={Math.random()}
        >
          <div className={"m-tags-input-text"}>{el}</div>
          <div className={"m-tags-input-icon"}>X</div>
        </div>
      ))}
    </div>
  );
};

export default TagsInput;
