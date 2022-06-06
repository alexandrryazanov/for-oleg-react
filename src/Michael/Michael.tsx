import React from "react";
import { Tab, Tabs } from "../components/Tabs";
import UsersTab from "./pages/Users";
import { NavLink } from "react-router-dom";
import TagsInput from "./components/TagsInput";

const Michael = () => {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <Tabs>
        <Tab title={"table-users"} component={<UsersTab />} />
        <Tab title={"tags-input"} component={<TagsInput />} />
        <Tab title={"test2"} component={<div>test2</div>} />
      </Tabs>
    </div>
  );
};

export default Michael;
