import React from "react";
import { Tabs, Tab } from "../components/Tabs";
import UsersPage from "../pages/Users";

const Test = () => {
  console.log("oleg");

  return (
    <div>
      <Tabs>
        <Tab title="Users" component={<UsersPage />} />
        <Tab title="tab2" component={<div>content2</div>} />
        <Tab title="tab3" component={<div>content3</div>} />
      </Tabs>
    </div>
  );
};

export default Test;
