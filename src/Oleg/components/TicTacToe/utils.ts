import { IS_WIN, Sign } from "./constants";
import { BoardType } from "./types";

export const getWinner = (board: BoardType, player: Sign.CROSS | Sign.ZERO) => {
  const stringifyArray = JSON.stringify(
    board.map((itemStr) => itemStr.map((item) => (item === player ? 1 : 0)))
  );
  for (let i = 0; i < IS_WIN.length; i++) {
    const stringifyWinnerArray = JSON.stringify(IS_WIN[i]);
    if (stringifyWinnerArray === stringifyArray) return player;
  }

  return Sign.EMPTY;
};
