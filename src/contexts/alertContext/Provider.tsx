import React from "react";
import alertContext from ".";
import Alert from "../../components/Alert";

const AlertProvider: React.FC = ({ children }) => {
  return (
    <alertContext.Provider value={{}}>
      {children}
      <Alert title="Наше всплывающее сообщение" isOpen={true} type="warning" />
    </alertContext.Provider>
  );
};

export default AlertProvider;
