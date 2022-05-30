import React, { useEffect, useMemo, useState } from "react";
import "./style.css";
import { TableProps } from "./types";
import LimitDropdown from "./Dropdowns/LimitDropdown/LimitDropdown";
import Select from "../Select/Select";
import SelectDropdown from "./Dropdowns/SelectDropdown";

const dataCount = 10;

function Table<DataType>({
  data,
  columns,
  isSelectable,
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

  const filterCol = useMemo(
    () =>
      columns.filter((column) => selectedColumnsTitle.includes(column.title)),
    [selectedColumnsTitle]
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
    setOffset(offset + limit >= dataCount ? offset : offset + limit);
  };
  useMemo(() => {
    filterCol.length && isSelectable
      ? setIsSelectable(true)
      : setIsSelectable(false);
  }, [filterCol]);

  return (
    <>
      <div className="m-table-container">
        <table className="m-table">
          <thead>
            <tr className="m-row-container">
              <td>
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

              {filterCol.length ? (
                filterCol.map((column) => (
                  <th key={column.title}>{column.title}</th>
                ))
              ) : (
                <th style={{ textAlign: "center" }}>
                  Вы не оставили ни одной колонки
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="m-row-container">
                {IsSelectable ? (
                  <td className="m-checkbox-column">
                    <input
                      type="checkbox"
                      checked={
                        selectedRowsIndexes.find((index) => index === i) !==
                        undefined
                      }
                      onChange={() => changeIsSelectedRow(i)}
                    />
                  </td>
                ) : (
                  <td className="m-checkbox-column" />
                )}
                {filterCol.map((column) => (
                  <td key={column.title}>
                    {typeof column.accessor === "function"
                      ? column.accessor(item)
                      : item[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={"m-tfoot"}>
        <div className={"wrapper-m-select-amount-row"}>
          <span>Rows per page:</span>
          <button
            className={"m-select-amount-row"}
            onClick={() => setShowLimitDropdown(!showLimitDropdown)}
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
          {limit + offset <= dataCount ? limit + offset : dataCount} of{" "}
          {dataCount}
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
            offset + limit >= dataCount
              ? "disable-m-switch-left"
              : "m-switch-right"
          }
          disabled={offset + limit >= dataCount}
          onClick={switchRight}
        >
          {">"}
        </button>
      </div>
    </>
  );
}

export default Table;
