import React from "react";
import { columns } from "./columns";
import { UserData, UsersTableProps } from "./types";
import Table from "../../../components/Table";

const UsersTable = ({
  data,
  setOffset,
  offset,
  limit,
  setLimit,
}: UsersTableProps) => {
  const showInConsole = (selectedRows: UserData[]) => {
    console.log(selectedRows);
  };

  // здесь правильно получить данные из стора, например с помощью useSelector
  return (
    <Table<UserData> // <-- тут указываем тип для данных, которые приходят с бэка в эту таблицу
      columns={columns}
      data={data} // <-- то есть тип для вот этой data
      onChangeSelectedRows={showInConsole}
      setOffset={setOffset}
      offset={offset}
      limit={limit}
      setLimit={setLimit}
      isSelectable
      withPagination
    />
  );
};

export default UsersTable;
