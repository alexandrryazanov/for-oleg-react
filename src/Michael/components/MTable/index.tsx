import React, { useEffect, useState } from "react";
import "./style.css";
import { MTableProps } from "./types";

function MTable<MDataType>({
  data,
  columns,
  isSelectable,
  onChangeSelectedRows,
}: MTableProps<MDataType>) {
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
    <div className="mtable-container">
      <table className="mtable">
        <thead>
          <tr className="mrow-container">
            {isSelectable && <th />}
            {columns.map((column) => (
              <th key={column.title}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="mrow-container">
              {isSelectable && (
                <td className="mcheckbox-column">
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

export default MTable;
