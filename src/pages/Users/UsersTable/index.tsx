import React from "react";
import Table from "../../../components/Table";
import { columns } from "./columns";
import { UserData, UsersTableProps } from "./types";

const UsersTable = ({ data }: UsersTableProps) => {
  const showInConsole = (selectedRows: UserData[]) => {
    // console.log(selectedRows);
  };

  // здесь правильно получить данные из стора, например с помощью useSelector
  return (
    <Table<UserData> // <-- тут указываем тип для данных, которые приходят с бэка в эту таблицу
      columns={columns}
      data={data} // <-- то есть тип для вот этой data
      isSelectable
      onChangeSelectedRows={showInConsole}
    />
  );
};

export default UsersTable;
