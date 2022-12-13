import React from "react";
import { StepProps } from "./types";
import StepWrapper from "components/Stepper/StepWrapper";
import { StepWrapperProps } from "components/Stepper/StepWrapper/types";

const Step = (props: StepProps) => {
  return (
    <StepWrapper {...(props as StepWrapperProps)}>{props.children}</StepWrapper>
  );
};

export default Step;
