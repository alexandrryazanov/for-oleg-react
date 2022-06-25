import React, { useState } from "react";
import "./styles.css";
import { getRandomInt } from "../../utils";
import { Result } from "./constants";

const GuessTheNumber = () => {
  const [randomNumber, setRandomNumber] = useState(getRandomInt(10));
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState("");

  const changeHandler = (event: any) => {
    setNumber(event.target.value);
  };

  const onChangeRandomNumber = () => {
    setRandomNumber(getRandomInt(10));
  };

  const onNumberCheck = () => {
    setTimeout(() => {
      if (randomNumber === number) {
        setMessage(Result.EQUALS);
        onChangeRandomNumber();
      } else if (randomNumber > number) {
        setMessage(Result.MORE);
      } else if (randomNumber < number) {
        setMessage(Result.LESS);
      }
    }, getRandomInt(3000));
  };

  return (
    <div>
      <div>
        <span>{message}</span>
      </div>
      <input type={"number"} value={number} onChange={changeHandler} />
      <button className={"o-button-guess-the-number"} onClick={onNumberCheck}>
        Проверить
      </button>
      <button
        className={"o-button-guess-the-number"}
        onClick={onChangeRandomNumber}
      >
        Начить заново
      </button>
    </div>
  );
};

export default GuessTheNumber;
