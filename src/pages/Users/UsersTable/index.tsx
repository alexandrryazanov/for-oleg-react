import React from "react";
import Table from "../../../components/Table";
import { columns } from "./columns";
import { UsersTableProps } from "./types";

const UsersTable = ({ data }: UsersTableProps) => {
  const showInConsole = (selectedRows: any[]) => {
    console.log(selectedRows);
  };

  // здесь правильно получить данные из стора, например с помощью useSelector
  return (
    <Table
      columns={columns}
      data={data}
      isSelectable
      onChangeSelectedRows={showInConsole}
    />
  );
};

export default UsersTable;
