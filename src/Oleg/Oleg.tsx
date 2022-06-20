import React from "react";
import { Tab, Tabs } from "../components/Tabs";
import UsersPage from "./pages/Users";
import Alarm from "./components/Alarm";
import "./styles.css";
import CookieModal from "./components/CookieModal";
import { toCamelCase } from "./utils";
import ObjectTree from "./components/ObjectTree";
import TrafficLight from "./components/TrafficLight";
import TicTacToe from "./components/TicTacToe";

const Oleg = () => {
  console.log(toCamelCase("for-oleg-react", "-"));
  return (
    <div>
      <Tabs>
        <Tab title={"Users"} component={<UsersPage />} />
        <Tab title={"Alarm"} component={<Alarm className={"o-time"} />} />
        <Tab title={"Object tree"} component={<ObjectTree />} />
        <Tab title={"Traffic light"} component={<TrafficLight time={2000} />} />
        <Tab title={"Крестики нолики"} component={<TicTacToe />} />
      </Tabs>
      <CookieModal />
    </div>
  );
};

export default Oleg;
