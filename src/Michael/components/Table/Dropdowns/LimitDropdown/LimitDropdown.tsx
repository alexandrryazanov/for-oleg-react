import React from "react";
import "./style.css";
import { LimitDropdownProps } from "./types";

const LimitDropdown = ({
  setOffset,
  setLimit,
  setShowLimitDropdown,
}: LimitDropdownProps) => {
  const onClickHandler = (limit: number) => {
    setOffset(0);
    setLimit(limit);
    setShowLimitDropdown(false);
  };
  const limitItem = [2, 3, 5];
  return (
    <div className={"m-wrapper-dropdown-limit"}>
      {limitItem.map((limit, i) => (
        <button
          key={i}
          onClick={() => onClickHandler(limit)}
          className={"m-dropdown-limit-item"}
        >
          {limit}
        </button>
      ))}
    </div>
  );
};

export default LimitDropdown;
