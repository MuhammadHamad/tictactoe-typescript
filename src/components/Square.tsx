import React from "react";

interface iSquareProps {
  onClick: () => void;
  value: "X" | "O" | null;
  winner: string | null;
}
const Square: React.FC<iSquareProps> = ({ onClick, value, winner }) => {
  if (!value) {
    return (
      <button className="board-square" onClick={onClick} disabled={Boolean(winner)}>
        {value}
      </button>
    );
  }

  return (
    <button className={`board-square border_${value}`} disabled>
      {value}
    </button>
  );
};

export default Square;
