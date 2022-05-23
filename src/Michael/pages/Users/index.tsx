import React, { useEffect, useState } from "react";
import UsersTable from "./UsersTable";
import { UserData } from "./UsersTable/types";

const UsersTab = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div style={{ height: "calc(100vh - 150px)", width: "100%" }}>
      {isLoading ? "Loading..." : <UsersTable data={users} />}
    </div>
  );
};

export default UsersTab;
