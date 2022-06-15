import React, { useState } from "react";
import { Tabs, Tab } from "../components/Tabs";
import UsersPage from "../pages/Users";
import Modal from "../components/Modal";
import DropdownPage from "../pages/DropdownPage";
import TrafficLight from "../components/TrafficLight";

const Alex = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showInputsValues = () => {
    console.log();
  };

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Открыть модалку</button>
      <Tabs>
        <Tab title="Users" component={<UsersPage />} />
        <Tab title="tab2" component={<DropdownPage />} />
        <Tab
          title="Светофор"
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
