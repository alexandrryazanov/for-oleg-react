import React, { useEffect, useState } from "react";
import "./styles.css";
import { TableProps } from "./types";

function Table<DataType>({
  data,
  columns,
  isSelectable,
  onChangeSelectedRows,
}: TableProps<DataType>) {
  const [selectedRowsIndexes, setSelectedRowsIndexes] = useState<number[]>([]);

  const changeIsSelectedRow = (index: number) => {
    const found = selectedRowsIndexes.find((i) => i === index) !== undefined;
    setSelectedRowsIndexes((prev) =>
      found ? prev.filter((i) => index !== i) : [...prev, index]
    );
  };

  useEffect(() => {
    if (onChangeSelectedRows && data.length) {
      onChangeSelectedRows(
        data.filter((_, i) => selectedRowsIndexes.includes(i))
      );
    }
  }, [selectedRowsIndexes, onChangeSelectedRows, data]);

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr className="row-container">
            {isSelectable && <th />}
            {columns.map((column) => (
              <th key={column.title}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="row-container">
              {isSelectable && (
                <td className="checkbox-column">
                  <input
                    type="checkbox"
                    checked={
                      selectedRowsIndexes.find((index) => index === i) !==
                      undefined
                    }
                    onChange={() => changeIsSelectedRow(i)}
                  />
                </td>
              )}
              {columns.map((column) => (
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
  );
}

export default Table;
