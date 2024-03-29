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
import Avatar from "../components/VKAvatar";
import useTheme from "../hooks/useTheme";
import Button from "../components/Button";
import useAlert from "../hooks/useAlert";
import HookahComponent from "../components/Hookah";
import Morse from "../components/Morse";
import SelectIconTab from "../components/SelectIconTab";
import BankComponent from "../components/Bank";
import ChatCards from "components/ChatCards";
import Filters from "components/Filters";
import Stepper from "components/Stepper";
import Step from "components/Stepper/Step";

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

  const reset = () => {
    setActive(1);
  };

  const [active, setActive] = useState(1);

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
        <Tab title={"Filters"} component={<Filters />} />
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
        <Tab title={"IconSelector"} component={<SelectIconTab />} />
        <Tab title={"Bank"} component={<BankComponent />} />
        <Tab
          title={"Chat Cards"}
          component={
            <ChatCards
              list={[
                {
                  title: "test1",
                  lastMsg: "test1",
                  avatarUrl:
                    "https://kartinkin.net/uploads/posts/2022-03/1647426651_1-kartinkin-net-p-krasivie-kartinki-dlya-vk-1.jpg",
                },
                {
                  title: "test2",
                  lastMsg: "test1",
                  avatarUrl:
                    "https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042660_10.jpg",
                },
                {
                  title: "test3",
                  lastMsg: "test1",
                  avatarUrl:
                    "https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042660_10.jpg",
                },
              ]}
            />
          }
        />
        <Tab
          title={"Stepper"}
          component={
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Stepper active={active} setActive={setActive}>
                <Step title="Первый шаг">test 1</Step>
                <Step title="Второй шаг">test 2</Step>
                <Step title="Третий шаг">test 3</Step>
                <Step title="Третий шаг">test 4</Step>
              </Stepper>

              <Button onClick={reset} variant="outlined">
                RESET
              </Button>
            </div>
          }
        />
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
