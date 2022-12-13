import { ReactNode } from "react";

export enum StepStatus {
  INIT,
  ACTIVE,
  SUCCESSFUL,
}

export interface StepProps {
  title: string;
  children: ReactNode;
}

export interface StepHiddenProps {
  num: number;
  status: StepStatus;
  isLast: boolean;
  onNextClick: () => void;
  onPrevClick: () => void;
}
