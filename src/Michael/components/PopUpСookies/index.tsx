import React, { useState } from "react";
import "./style.css";

const KEY_ACCEPT = "accept";
const PopUpСookies = () => {
  const [showEnterCookies, setShowEnterCookies] = useState(true);

  const clickHandler = () => {
    setShowEnterCookies(false);
    localStorage.setItem(KEY_ACCEPT, "true");
  };
  return (
    <>
      {!(localStorage.getItem(KEY_ACCEPT) === "true") && showEnterCookies && (
        <div className={"m-position-enter-cookies"}>
          <div className={"m-wrapper-text-enter-cookies"}>
            Мы используем Cookies
          </div>
          <div className={"m-wrapper-buttons-enter-cookies"}>
            <button onClick={clickHandler} className={"m-button-enter-cookies"}>
              Подтвердить
            </button>
            <button
              onClick={clickHandler}
              className={"m-button-reject-cookies"}
            >
              Отклонить
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpСookies;
