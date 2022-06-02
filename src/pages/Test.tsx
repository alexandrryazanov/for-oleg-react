import React from "react";
import { Tabs, Tab } from "../components/Tabs";
import UsersPage from "../pages/Users";
import DatePicker from "../components/DatePicker";
import { format } from "date-fns";

const Test = () => {
  const showSelectedDateInConsole = (date: Date) => {
    console.log("showSelectedDateInConsole", format(date, "dd.MM.yyyy"));
  };

  return (
    <div>
      <Tabs>
        <Tab title="Users" component={<UsersPage />} />
        <Tab
          title="tab2"
          component={<DatePicker onChangeDate={showSelectedDateInConsole} />}
        />
        <Tab title="tab3" component={<div>content3</div>} />
      </Tabs>
    </div>
  );
};

export default Test;
