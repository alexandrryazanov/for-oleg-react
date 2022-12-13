import React from "react";
import "./styles.css";
import Button from "components/Button";
import useTheme from "hooks/useTheme";
import { StepWrapperProps } from "./types";
import { StepStatus } from "../Step/types";

const StepWrapper = ({
  children,
  title,
  status = StepStatus.INIT,
  num,
  isLast,
  onNextClick,
  onPrevClick,
}: StepWrapperProps) => {
  const { theme } = useTheme();
  const { INIT, ACTIVE, SUCCESSFUL } = StepStatus;

  return (
    <div>
      <div className={"step-title"}>
        <div
          className={"step-icon"}
          style={{
            backgroundColor: status !== INIT ? theme.colors.primary : "grey",
          }}
        >
          {status === SUCCESSFUL ? "✓" : num}
        </div>
        <span>{title}</span>
      </div>
      <div
        className={
          "step-content" +
          (status !== ACTIVE ? " step-hidden" : "") +
          (!isLast ? " step-path" : "") //TODO: clsx
        }
      >
        <p>{children}</p>
        <div className={"step-actions"}>
          <Button onClick={onNextClick}>
            {!isLast ? "CONTINUE" : "FINISH"}
          </Button>
          <Button onClick={onPrevClick} variant="outlined" disabled={num === 1}>
            BACK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepWrapper;
