import React, { useState } from "react";
import Square from "../components/Square";
import { Grid } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

const Board: React.FC = () => {
  const activePlayer = Math.round(Math.random()) === 0 ? "X" : "O";
  console.log(activePlayer);
  
  const [currentPlayer, setCurrentPlayer] = useState(activePlayer);
  return (
    <div className="board-wrapper">
      <p>Hey {currentPlayer}, it's my turn</p>
      <Grid columns={3} centered>
        {Array(9)
          .fill(null)
          .map((item, index) => (
            <Grid.Column className="board-column" key={index}>
              <Square 
                // onClick={() => setSquareValue()}
              />
            </Grid.Column>
          ))}
      </Grid>
    </div>
  );
};

export default Board;
