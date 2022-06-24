import React, { ChangeEvent, useState } from "react";
import { compareNumbers, getRandomNumber } from "./utils";
import { Result } from "./constants";
import { delayInSec } from "../../utils";

export default function GuessNumber() {
  const [randomValue] = useState(getRandomNumber(1, 10));
  const [value, setValue] = useState(0);
  const [result, setResult] = useState<Result | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(Number(e.target.value));

  const askHandler = async () => {
    setResult(Result.THINK);
    await delayInSec(getRandomNumber(0, 3));
    setResult(compareNumbers(randomValue, value));
  };

  return (
    <div>
      <input type="number" value={value} onChange={onChange} />
      <button onClick={askHandler}>Спросить</button>
      <div>{result}</div>
    </div>
  );
}
