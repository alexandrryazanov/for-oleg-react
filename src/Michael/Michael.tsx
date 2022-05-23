import React from "react";
import { Tab, Tabs } from "../components/Tabs";
import UsersTab from "./pages/Users";

const Michael = () => {
  return (
    <div>
      <Tabs>
        <Tab title={"table-users"} component={<UsersTab />} />
        <Tab title={"test1"} component={<div>test1</div>} />
        <Tab title={"test2"} component={<div>test2</div>} />
      </Tabs>
    </div>
  );
};

export default Michael;
