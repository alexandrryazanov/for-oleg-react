import { Sign } from "./constants";

export type BoardType = [
  [Sign, Sign, Sign],
  [Sign, Sign, Sign],
  [Sign, Sign, Sign]
];

export type Player = Sign.ZERO | Sign.CROSS;
