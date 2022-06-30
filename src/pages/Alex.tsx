import React, { useState } from "react";
import { Tab, Tabs } from "../components/Tabs";
import UsersPage from "../pages/Users";
import Modal from "../components/Modal";
import DropdownPage from "../pages/DropdownPage";
import TrafficLight from "../components/TrafficLight";
import UnlockIos from "../components/UnlockIOs";
import { Link } from "react-router-dom";
import * as usersAPI from "../api/users";
import useAuth from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/users/actions";
import GuessNumber from "../components/GuessNumber";
import Avatar from "../components/Avatar";
import useTheme from "../hooks/useTheme";
import Button from "../components/Button";
import useAlert from "../hooks/useAlert";
import HookahComponent from "../components/Hookah";
import Morse from "../components/Morse";

const Alex = () => {
  const { theme, changeTheme } = useTheme();
  const { showAlert } = useAlert();
  const isAuth = useAuth();

  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const loginHandler = async () => {
    await usersAPI.login("admin", "admin");
  };

  const logoutHandler = async () => {
    await usersAPI.logout();
  };

  return (
    <div>
      <button onClick={() => dispatch(addUser({ name: "Mike" }))}>
        ADD_USER
      </button>
      <div>
        <Link to={"/products"}>Products</Link>
        {isAuth && <Link to={"/customers"}>Users</Link>}
        {!isAuth && <button onClick={loginHandler}>LOGIN</button>}
        {isAuth && <button onClick={logoutHandler}>LOGOUT</button>}
      </div>
      <button onClick={() => setModalOpen(true)}>Открыть модалку</button>
      <Tabs>
        <Tab title="Users" component={<UsersPage />} />
        <Tab title="Dropdown" component={<DropdownPage />} />
        <Tab title="Guess number" component={<GuessNumber />} />
        <Tab
          title="Traffic light"
          component={
            <TrafficLight
              rules={[
                { lights: [1, 0, 0], time: 2 },
                { lights: [1, 1, 0], time: 5 },
                { lights: [0, 0, 1], time: 4 },
              ]}
            />
          }
        />
        <Tab
          title="Unlock iOs"
          component={
            <div style={{ width: "300px" }}>
              <UnlockIos />
            </div>
          }
        />
        <Tab
          title="Avatar"
          component={
            <Avatar src="https://sun1-95.userapi.com/s/v1/ig2/roVQ8Fydjx2jQNAsFKbnfQ9EIfPEuXsIlHMthi9XsLtBWCnOsS2gpJDeSLjQ-dd7MDkMhpMRju1PytbiVaQDEQoD.jpg?size=400x591&quality=96&crop=83,125,535,791&ava=1" />
          }
        />
        <Tab title={"Hookah"} component={<HookahComponent />} />
        <Tab
          title="Theme"
          component={
            <div style={{ width: "400px" }}>
              <h1>Текущая тема: {theme.title}</h1>
              <Button onClick={() => changeTheme("Mike")} variant="outlined">
                Сменить тему на Mike
              </Button>
              <br />
              <br />
              <Button onClick={() => changeTheme("Sky")}>
                Сменить тему на Sky
              </Button>
              <br />
              <br />
              <Button
                onClick={() =>
                  showAlert(
                    "Недоджуны опять наговнякали! Пишите нормально!",
                    "warning"
                  )
                }
              >
                Показать alert
              </Button>
            </div>
          }
        />
        <Tab title={"Morse"} component={<Morse />} />
      </Tabs>

      <Modal
        open={modalOpen}
        setOpen={setModalOpen}
        onOkClick={() => console.log("OK")}
        title="Тест"
        showButtons
        className="styled-modal"
        okLabel="Принять"
        cancelLabel="Отменить"
      >
        орморо
      </Modal>
    </div>
  );
};

export default Alex;
