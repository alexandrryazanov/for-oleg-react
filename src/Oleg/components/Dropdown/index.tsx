import React, { useEffect, useState } from "react";
import ElementList from "./ElementList";
import "./styles.css";
import { DropdownProps } from "./types";

const Dropdown = ({ list, setSelectedColumnsTitle }: DropdownProps) => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const [selectedElementListTitle, setSelectedElementListTitle] =
    useState<string[]>(list);

  useEffect(() => {
    setSelectedColumnsTitle([...selectedElementListTitle]);
  }, [selectedElementListTitle]);

  const changeIsSelectedElementList = (title: string) => {
    const found =
      selectedElementListTitle.find((el) => el === title) !== undefined;
    setSelectedElementListTitle((prev) =>
      found ? prev.filter((el) => title !== el) : [...prev, title]
    );
  };

  return (
    <div>
      <button
        className={"o-button-dropdown"}
        onClick={() => setDropdownStatus(!dropdownStatus)}
      >
        <img
          alt={"menu"}
          className={"o-dropdown-icon"}
          src={"https://cdn-icons-png.flaticon.com/512/60/60969.png"}
        />
      </button>
      {dropdownStatus && (
        <div className="o-list-container">
          {list.map((element: string) => {
            return (
              <ElementList
                key={element}
                title={element}
                changeIsSelectedElementList={changeIsSelectedElementList}
                selectedElementListTitle={selectedElementListTitle}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
