import React from "react";
import { Tab, Tabs } from "../components/Tabs";
import UsersPage from "./pages/Users";
import Test from "./pages/Test";
import Alarm from "./components/Alarm";
import "./styles.css";
import CookieModal from "./components/CookieModal";

const Oleg = () => {
  return (
    <div>
      <Tabs>
        <Tab title={"Users"} component={<UsersPage />} />
        <Tab title={"Alarm"} component={<Alarm className={"o-time"} />} />
        <Tab title={"test2"} component={<Test />} />
      </Tabs>
      <CookieModal />
    </div>
  );
};

export default Oleg;
