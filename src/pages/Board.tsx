import React, { useState, useEffect } from "react";
import Square from "../components/Square";
import { Grid } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

type Player = "X" | "O" | null;

const Board: React.FC = () => {
  const activePlayer = Math.round(Math.random()) === 0 ? "X" : "O";
  const [currentPlayer, setCurrentPlayer] = useState(activePlayer);
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    const winnerPlayer = calculateWinner(squares);
    if (winnerPlayer) {
      setWinner(`${winnerPlayer} is the winner`);
    } else if(!winnerPlayer && !squares.filter(square => !square).length) {
      setWinner("Its a Draw. Reload to restart.");
    }
  });

  const calculateWinner = (squares: Player[]) => {
    const possibleWinningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return possibleWinningCombinations
      .map((combo) => {
        const [a, b, c] = combo;
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          return squares[a];
        }
        return null;
      })
      .filter((data) => data)[0];
  };

  const setSquareValue = (index: number) => {
    const data = squares.map((item, ind) => {
      if (index === ind) return currentPlayer;
      return item;
    });
    setSquares(data as Player[]);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return (
    <div className="board-wrapper">
      {
       winner ? <p>{winner}</p> : <p>Hey {currentPlayer}, it's my turn</p>
      }
      <Grid columns={3} centered>
        {Array(9)
          .fill(null)
          .map((item, index) => (
            <Grid.Column className="board-column" key={index}>
              <Square
                onClick={() => setSquareValue(index)}
                value={squares[index]}
                winner={winner}
              />
            </Grid.Column>
          ))}
      </Grid>
    </div>
  );
};

export default Board;
