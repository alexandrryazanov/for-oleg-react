import React from "react";
import { Tab, Tabs } from "../components/Tabs";
import UsersTab from "./pages/Users";
import { NavLink } from "react-router-dom";
import PopUpСookies from "./components/PopUpСookies";

const Michael = () => {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <Tabs>
        <Tab title={"table-users"} component={<UsersTab />} />
        <Tab title={"test1"} component={<div>test1</div>} />
        <Tab title={"test2"} component={<div>test2</div>} />
      </Tabs>
      <PopUpСookies />
    </div>
  );
};

export default Michael;
