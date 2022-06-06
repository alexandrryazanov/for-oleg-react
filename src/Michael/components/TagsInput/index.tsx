import React, { useState } from "react";
import "./style.css";

const TagsInput = () => {
  const [valueTagsInput, setValueTagsInput] = useState("");
  const [state, setState] = useState<string[]>([]);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueTagsInput(e.target.value);
  };
  const onClickHandler = () => {
    setState((prev) => [...prev, valueTagsInput]);
    setValueTagsInput("");
  };

  console.log(state);
  return (
    <div className={"m-wrapper-tags-input "}>
      <input
        className={"m-tags-input"}
        value={valueTagsInput}
        onChange={onChangeHandler}
      />
      <button onClick={onClickHandler}>Кнопка</button>
      {/*<div className={"m-tags-input-item"}>*/}
      {/*  <div className={"m-tags-input-text"}>text</div>*/}
      {/*  <div className={"m-tags-input-icon"}>X</div>*/}
      {/*</div>*/}
    </div>
  );
};

export default TagsInput;
