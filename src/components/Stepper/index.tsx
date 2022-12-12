import React from "react";
import Step from "./Step";
import "./styles.css";

const Stepper = () => {
  return (
    <div className={"stepper-wrapper"}>
      <Step />
      <Step />
    </div>
  );
};

export default Stepper;
