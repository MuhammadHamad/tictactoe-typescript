import React from "react";
import Square from '../components/Square'
import { Grid } from "semantic-ui-react";
import {Button} from "semantic-ui-react";

const Board: React.FC = () => {
  return (
    <div className="board-wrapper">
      <p>Its my turn</p>
      <Grid columns={3} centered>
        {Array(9)
          .fill(null)
          .map((item, index) => (
            <Grid.Column className="board-column" key={index}>
                <Square />
            </Grid.Column>
          ))}
      </Grid>
    </div>
  );
};

export default Board;
