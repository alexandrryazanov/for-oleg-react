import React, { useEffect, useState } from "react";
import "./styles.css";

const TrafficLight = ({ time }: { time: number }) => {
  const [colorLight, setColorLight] = useState("red");
  const [colorLightYellow, setColorLightYellow] = useState("none");

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (colorLight === "red") {
        setColorLightYellow("yellow");
        setTimeout(() => {
          setColorLightYellow("none");
          setColorLight("green");
        }, 2000);

        return;
      } else if (colorLight === "green") {
        setColorLightYellow("yellow");
        setTimeout(() => {
          setColorLightYellow("none");
          setColorLight("red");
        }, 2000);

        return;
      }
    }, time + 2000);
    return () => clearInterval(intervalID);
  }, [colorLight]);

  return (
    <div className={"traffic-light"}>
      <div
        className={
          colorLight === "red" ? "traffic-light-red" : "traffic-light-white"
        }
      />
      <div
        className={
          colorLightYellow === "yellow"
            ? "traffic-light-yellow"
            : "traffic-light-white"
        }
      />
      <div
        className={
          colorLight === "green" ? "traffic-light-green" : "traffic-light-white"
        }
      />
    </div>
  );
};

export default TrafficLight;
