import React, { useMemo } from "react";
import "./style.css";
import { SelectDropdownProps } from "./types";
import { TableColumn } from "../../types";

function SelectDropdown<DataType>({
  columns,
  selectedColumnsTitle,
  setSelectedColumnsTitle,
}: SelectDropdownProps<DataType>) {
  const columnTitle = useMemo(() => columns.map((column) => column.title), []);
  const changeIsSelectedTitle = (title: string) => {
    const found = selectedColumnsTitle.find((el) => el == title) !== undefined;
    if (found) {
      setSelectedColumnsTitle((prev: string[]) =>
        prev.filter((el) => el !== title)
      );
    } else {
      setSelectedColumnsTitle((prev: string[]) => [...prev, title]);
    }
  };
  const changeIsSelectedTitleAll = () => {
    selectedColumnsTitle.length
      ? setSelectedColumnsTitle([])
      : setSelectedColumnsTitle(columnTitle);
  };

  const checkedHandler = () => {
    return Object.entries(
      [...columnTitle, ...selectedColumnsTitle].reduce(
        (acc: { [tit: string]: number }, title) => {
          acc = { ...acc, [title]: acc[title] ? acc[title] + 1 : 1 };
          return acc;
        },
        {}
      )
    ).every(([_, count]) => count === 2);
  };
  const checkedInputTitle = (column: TableColumn<DataType>) => {
    return (
      selectedColumnsTitle.find((title) => title === column.title) !== undefined
    );
  };

  return (
    <div className={"m-wrapper-dropdown-select"}>
      <div className={"m-dropdown-select-title"}>Выберите столбцы</div>
      <div className={"m-wrapper-dropdown-select-item"}>
        <input
          type={"checkbox"}
          checked={checkedHandler()}
          onChange={changeIsSelectedTitleAll}
        />
        <span className={"m-dropdown-select-item"}>Выбрать все</span>
      </div>
      {columns.map((column, i) => (
        <div key={i} className={"m-wrapper-dropdown-select-item"}>
          <input
            type={"checkbox"}
            checked={checkedInputTitle(column)}
            onChange={() => changeIsSelectedTitle(column.title)}
          />
          <span className={"m-dropdown-select-item"}>{column.title}</span>
        </div>
      ))}
    </div>
  );
}

export default SelectDropdown;
