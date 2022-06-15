import { useEffect, useState } from "react";
import { BoardType, Player } from "./types";
import { Sign } from "./constants";
import { getWinner } from "./utils";

export const usePlayer = (board: BoardType, gameStep: number) => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player>(Sign.CROSS);
  const [winner, setWinner] = useState<Sign>(Sign.EMPTY);

  useEffect(() => {
    if (gameStep > 4) {
      const playerWinner = getWinner(board, selectedPlayer);
      if (playerWinner !== Sign.EMPTY) return setWinner(playerWinner);
    }

    if (gameStep !== 0)
      setSelectedPlayer((prev) =>
        prev === Sign.ZERO ? Sign.CROSS : Sign.ZERO
      );
  }, [board, gameStep]);

  return { selectedPlayer, winner };
};

export const useBoard = () => {
  const [board, setBoard] = useState<BoardType>([
    [Sign.EMPTY, Sign.EMPTY, Sign.EMPTY],
    [Sign.EMPTY, Sign.EMPTY, Sign.EMPTY],
    [Sign.EMPTY, Sign.EMPTY, Sign.EMPTY],
  ]);
  const [step, setStep] = useState(0);
  const { selectedPlayer, winner } = usePlayer(board, step);

  const onChangeBoard = (indexRow: number, indexColumn: number) => {
    const changedBoard: BoardType = [...board];
    if (changedBoard[indexRow][indexColumn] === Sign.EMPTY) {
      changedBoard[indexRow][indexColumn] = selectedPlayer;
    }
    setBoard(changedBoard);
    setStep((prev) => prev + 1);
  };

  return { board, onChangeBoard, winner, step };
};
