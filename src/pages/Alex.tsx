import React, { useState } from "react";
import { Tabs, Tab } from "../components/Tabs";
import UsersPage from "../pages/Users";
import Modal from "../components/Modal";
import DropdownPage from "../pages/DropdownPage";
import TrafficLight from "../components/TrafficLight";
import UnlockIos from "../components/UnlockIOs";
import { Link } from "react-router-dom";
import * as usersAPI from "../api/users";
import useAuth from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/users/actions";
import GuessNumber from "../components/GuessNumber";

const Alex = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const isAuth = useAuth();
  const users = useSelector((store: any) => store.users);
  const dispatch = useDispatch();
  console.log(users);

  const showInputsValues = () => {
    console.log();
  };

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
