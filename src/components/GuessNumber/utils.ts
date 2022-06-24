import { Result } from "./constants";

export const getRandomNumber = (min: number, max: number) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const compareNumbers = (a: number, b: number) => {
  if (a > b) return Result.MORE;
  if (a < b) return Result.LESS;
  return Result.EQUAL;
};
