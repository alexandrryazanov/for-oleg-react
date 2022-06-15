import React from "react";
import { Sign } from "./constants";
import "./styles.css";
import { useBoard } from "./hooks";

const TicTacToe = () => {
  const { board, onChangeBoard, winner, step } = useBoard();

  return (
    <div>
      <table className={"o-tic-tac-toe-table"}>
        <tbody>
          {board.map((item, indexRow) => (
            <tr key={indexRow} className={"o-tic-tac-toe-row-container"}>
              {item.map((element, indexColumn) => (
                <td
                  key={indexColumn}
                  className={"o-tic-tac-toe-column"}
                  onClick={() =>
                    winner === Sign.EMPTY &&
                    onChangeBoard(indexRow, indexColumn)
                  }
                >
                  {element}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {winner !== Sign.EMPTY && (
        <span>
          Победил {winner} на шаге {step}
        </span>
      )}
    </div>
  );
};

export default TicTacToe;
