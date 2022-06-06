import React from "react";
import "./style.css";
import { SelectProps } from "./types";

const Select = ({ setShowSelectDropdown, showSelectDropdown }: SelectProps) => {
  const clickHandler = () => {
    setShowSelectDropdown(!showSelectDropdown);
  };
  return (
    <div onClick={clickHandler} className={"m-wrapper-select"}>
      <div className={"m-styled-select"} />
      <div className={"m-styled-select"} />
      <div className={"m-styled-select"} />
    </div>
  );
};

export default Select;
