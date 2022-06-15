import React, { useEffect, useMemo, useState } from "react";
import "./style.css";
import { TableProps } from "./types";
import LimitDropdown from "./Dropdowns/LimitDropdown/LimitDropdown";
import Select from "../Select/Select";
import SelectDropdown from "./Dropdowns/SelectDropdown";

const DATACOUNT = 10;

function Table<DataType>({
  data,
  columns,
  isSelectable,
  withPagination,
  onChangeSelectedRows,
  setOffset,
  offset,
  limit,
  setLimit,
}: TableProps<DataType>) {
  const columnsTitle = columns.map((el) => el.title);
  const [IsSelectable, setIsSelectable] = useState(false);
  const [selectedRowsIndexes, setSelectedRowsIndexes] = useState<number[]>([]);
  const [showLimitDropdown, setShowLimitDropdown] = useState(false);
  const [showSelectDropdown, setShowSelectDropdown] = useState(false);
  const [selectedColumnsTitle, setSelectedColumnsTitle] =
    useState<string[]>(columnsTitle);

  const changeIsSelectedRow = (index: number) => {
    const found = selectedRowsIndexes.find((i) => i === index) !== undefined;
    setSelectedRowsIndexes((prev) =>
      found ? prev.filter((i) => index !== i) : [...prev, index]
    );
  };

  const filteredColumns = useMemo(
    () =>
      columns.filter((column) => selectedColumnsTitle.includes(column.title)),
    [selectedColumnsTitle, columns]
  );

  useEffect(() => {
    if (onChangeSelectedRows && data.length) {
      onChangeSelectedRows(
        data.filter((_, i) => selectedRowsIndexes.includes(i))
      );
    }
  }, [selectedRowsIndexes, onChangeSelectedRows, data]);

  const switchLeft = () => {
    setOffset(offset <= 0 ? offset : offset - limit);
  };
  const switchRight = () => {
    setOffset(offset + limit >= DATACOUNT ? offset : offset + limit);
  };
  useMemo(() => {
    setIsSelectable(Boolean(filteredColumns.length && isSelectable));
  }, [filteredColumns, isSelectable]);

  const checkedSelectRow = (i: number) => {
    return selectedRowsIndexes.find((index) => index === i) !== undefined;
  };

  const onClickButtonSelected = () => {
    setShowLimitDropdown(!showLimitDropdown);
  };

  return (
    <>
      <div className="m-table-container">
        <table className="m-table">
          <thead>
            <tr className="m-row-container">
              <td className={"m-column-container"}>
                <Select
                  setShowSelectDropdown={setShowSelectDropdown}
                  showSelectDropdown={showSelectDropdown}
                />
                {showSelectDropdown && (
                  <SelectDropdown
                    columns={columns}
                    selectedColumnsTitle={selectedColumnsTitle}
                    setSelectedColumnsTitle={setSelectedColumnsTitle}
                  />
                )}
              </td>

              {filteredColumns.length
                ? filteredColumns.map((column) => (
                    <th key={column.title}>{column.title}</th>
                  ))
                : ""}
            </tr>
          </thead>
          <tbody>
            {filteredColumns.length ? (
              data.map((item, i) => (
                <tr key={i} className="m-row-container">
                  {IsSelectable ? (
                    <td className="m-checkbox-column">
                      <input
                        type="checkbox"
                        checked={checkedSelectRow(i)}
                        onChange={() => changeIsSelectedRow(i)}
                      />
                    </td>
                  ) : (
                    <td className="m-checkbox-column" />
                  )}
                  {filteredColumns.map((column) => (
                    <td key={column.title}>
                      {typeof column.accessor === "function"
                        ? column.accessor(item)
                        : item[column.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <th colSpan={2} style={{ textAlign: "center" }}>
                  Таблица пустая
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {!filteredColumns.length ? (
        ""
      ) : !withPagination ? (
        setLimit(DATACOUNT)
      ) : (
        <div className={"m-tfoot"}>
          <div className={"wrapper-m-select-amount-row"}>
            <span>Строк на странице:</span>
            <button
              className={"m-select-amount-row"}
              onClick={onClickButtonSelected}
            >
              {limit}
            </button>
            {showLimitDropdown && (
              <LimitDropdown
                setOffset={setOffset}
                setLimit={setLimit}
                setShowLimitDropdown={setShowLimitDropdown}
              />
            )}
          </div>
          <div className={"counter-page"}>
            {offset + 1}-
            {limit + offset <= DATACOUNT ? limit + offset : DATACOUNT} /{" "}
            {DATACOUNT}
          </div>
          <button
            className={offset <= 0 ? "disable-m-switch-left" : "m-switch-left"}
            disabled={offset <= 0}
            onClick={switchLeft}
          >
            {"<"}
          </button>
          <button
            className={
              offset + limit >= DATACOUNT
                ? "disable-m-switch-left"
                : "m-switch-right"
            }
            disabled={offset + limit >= DATACOUNT}
            onClick={switchRight}
          >
            {">"}
          </button>
        </div>
      )}
    </>
  );
}

export default Table;
