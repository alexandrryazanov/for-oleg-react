import React, { useEffect, useState } from "react";
import "./styles.css";

const CookieModal = () => {
  const [visibility, setVisibility] = useState(
    localStorage.getItem("cookieVisibility") === null
  );

  useEffect(() => {
    if (!visibility) {
      localStorage.setItem("cookieVisibility", "false");
    }
  }, [visibility]);

  return (
    <>
      {visibility && (
        <div className={"o-cookie"}>
          <img
            className={"o-cookie-img"}
            src={"http://cdn.onlinewebfonts.com/svg/img_566379.png"}
          />
          <div>
            Мы тоже используем куки, потому что
            <a
              className={"o-cookie-a"}
              href={"https://tproger.ru/about/cookies/"}
            >
              без них вообще ничего не работает
            </a>
          </div>

          <button
            className={"o-cookie-button"}
            onClick={() => {
              setVisibility(!visibility);
            }}
          >
            Хорошо
          </button>
        </div>
      )}
    </>
  );
};

export default CookieModal;
