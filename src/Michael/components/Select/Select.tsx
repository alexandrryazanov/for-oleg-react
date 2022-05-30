import React from "react";
import "./style.css";
import { SelectProps } from "./types";

const Select = ({ setShowSelectDropdown, showSelectDropdown }: SelectProps) => {
  return (
    <div
      onClick={() => setShowSelectDropdown(!showSelectDropdown)}
      className={"m_wrapper_select"}
    >
      <div className={"m_styled_select"} />
      <div className={"m_styled_select"} />
      <div className={"m_styled_select"} />
    </div>
  );
};

export default Select;
