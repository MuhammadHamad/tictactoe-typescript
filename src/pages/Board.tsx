import React, { useState } from "react";
import Square from "../components/Square";
import { Grid } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

type Player = "X" | "O" | null;

const Board: React.FC = () => {
  const activePlayer = Math.round(Math.random()) === 0 ? "X" : "O";
  const [currentPlayer, setCurrentPlayer] = useState(activePlayer);
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));
  const [winner, setWinner] = useState<Player>(null);

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
      <p>Hey {currentPlayer}, it's my turn</p>
      <Grid columns={3} centered>
        {Array(9)
          .fill(null)
          .map((item, index) => (
            <Grid.Column className="board-column" key={index}>
              <Square onClick={() => setSquareValue(index)} value={squares[index]}/>
            </Grid.Column>
          ))}
      </Grid>
    </div>
  );
};

export default Board;
