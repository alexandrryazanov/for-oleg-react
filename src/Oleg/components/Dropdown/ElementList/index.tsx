import React from "react";
import "./styles.css";
import { DropdownElementProps } from "./types";

const ElementList = ({
  title,
  changeIsSelectedElementList,
  selectedElementListTitle,
}: DropdownElementProps) => {
  return (
    <div>
      <input
        className={"o-dropdown-checkbox"}
        type={"checkbox"}
        checked={
          selectedElementListTitle.find((el: string) => el === title) !==
          undefined
        }
        onChange={() => changeIsSelectedElementList(title)}
      />
      {title}
    </div>
  );
};

export default ElementList;
