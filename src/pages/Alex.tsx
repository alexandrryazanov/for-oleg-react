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

const Alex = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const isAuth = useAuth();

  const showInputsValues = () => {
    console.log();
  };

  const loginHandler = async () => {
    await usersAPI.login("admin", "admin");
  };

  return (
    <div>
      <div>
        <Link to={"/products"}>Products</Link>
        {isAuth && <Link to={"/customers"}>Users</Link>}
        <button onClick={loginHandler}>LOGIN</button>
      </div>
      <button onClick={() => setModalOpen(true)}>Открыть модалку</button>
      <Tabs>
        <Tab title="Users" component={<UsersPage />} />
        <Tab title="Dropdown" component={<DropdownPage />} />
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
