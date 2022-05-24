import React, { useEffect, useState } from "react";
import UsersTable from "./UsersTable";
import { UserData } from "./UsersTable/types";

const UsersTab = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(2);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/users?_limit=${limit}&_start=${offset}`
    )
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .finally(() => setIsLoading(false));
  }, [offset, limit]);

  return (
    <div
      style={{
        height: "calc(100vh - 230px)",
        width: "100%",
      }}
    >
      {isLoading ? (
        "Loading..."
      ) : (
        <UsersTable
          data={users}
          setOffset={setOffset}
          offset={offset}
          limit={limit}
          setLimit={setLimit}
        />
      )}
    </div>
  );
};

export default UsersTab;
