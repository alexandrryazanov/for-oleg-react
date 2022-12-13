import { SetStateAction } from "react";

export interface StepperProps {
  children: Array<JSX.Element>;
  onFinish?: (active: number) => void;
  active?: number;
  setActive?: (active: number | SetStateAction<number>) => void;
}
