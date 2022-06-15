import React, { useEffect, useState } from "react";
import "./styles.css";
import { TableProps } from "./types";
import Dropdown from "../Dropdown";

function Table<DataType>({
  data,
  columns,
  isSelectable,
  isSelectableColumns,
  onChangeSelectedRows,
}: TableProps<DataType>) {
  const [selectedRowsIndexes, setSelectedRowsIndexes] = useState<number[]>([]);
  const [selectedColumnsTitle, setSelectedColumnsTitle] = useState<string[]>(
    []
  );

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

  const selectedColumns = columns.filter((column) => {
    if (selectedColumnsTitle.includes(column.title)) {
      return column;
    }
  });

  const columnsTitle = columns.map((column) => column["title"]);

  return (
    <div className="o-table-container">
      <table className="o-table">
        <thead>
          <tr className="o-row-container">
            {isSelectableColumns && (
              <th>
                <Dropdown
                  list={columnsTitle}
                  setSelectedColumnsTitle={setSelectedColumnsTitle}
                />
              </th>
            )}
            {isSelectable && !isSelectableColumns && <th />}
            {(isSelectableColumns ? selectedColumns : columns).map((column) => (
              <th key={column.title}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {selectedColumnsTitle.length ? (
            <>
              {data.map((item, i) => (
                <tr key={i} className="o-row-container">
                  {isSelectable && (
                    <td className="o-checkbox-column">
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
                  {!isSelectable && isSelectableColumns && <td />}
                  {(isSelectableColumns ? selectedColumns : columns).map(
                    (column) => (
                      <td key={column.title}>
                        {typeof column.accessor === "function"
                          ? column.accessor(item)
                          : item[column.accessor]}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </>
          ) : (
            <tr className={"o-not-found-columns"}>
              <td>Не найдены столбцы</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
