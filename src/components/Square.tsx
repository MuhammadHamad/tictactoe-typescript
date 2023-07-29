import React from "react";

interface iSquareProps {
  onClick: () => void;
  value: "X" | "O" | null;
}
const Square: React.FC<iSquareProps> = ({ onClick, value }) => {
  if (!value) {
    return (
      <button className="board-square" onClick={onClick}>
        {value}
      </button>
    );
  }

  return (
    <button className="board-square" disabled>
      {value}
    </button>
  );
};

export default Square;
