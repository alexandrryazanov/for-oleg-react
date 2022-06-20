import React from "react";
import "./style.css";
import { LimitDropdownProps } from "./types";

const LIMITITEM = [2, 3, 5];

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

  return (
    <div className={"m-wrapper-dropdown-limit"}>
      {LIMITITEM.map((limit, i) => (
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
