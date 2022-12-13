import React, { useRef, useState } from "react";
import "./styles.css";
import { StepStatus } from "./Step/types";
import { StepperProps } from "./types";

const Stepper = ({
  children,
  onFinish,
  active: externalActive,
  setActive: setExternalActive,
}: StepperProps) => {
  const childrenArray = React.Children.toArray(children);
  const [internalActive, setInternalActive] = useState(1);

  const active = externalActive || internalActive;
  const setActive = setExternalActive || setInternalActive;

  const onNextClick = () => {
    if (active === childrenArray.length && onFinish) onFinish(active);
    setActive((prev) => prev + 1);
  };

  const onPrevClick = () => {
    setActive((prev) => prev - 1);
  };

  const getStatus = (num: number, active: number) => {
    if (num === active) return StepStatus.ACTIVE;
    if (num < active) return StepStatus.SUCCESSFUL;
    return StepStatus.INIT;
  };

  return (
    <div className={"stepper-wrapper"}>
      {childrenArray.map((stepComponent, i) => {
        const num = i + 1;
        const status = getStatus(num, active);
        return React.cloneElement(stepComponent as JSX.Element, {
          num,
          status,
          isLast: num === childrenArray.length,
          onNextClick,
          onPrevClick,
        });
      })}
    </div>
  );
};

export default Stepper;
