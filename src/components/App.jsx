import '../styles/App.css';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';

import React, { useState } from 'react'

function App() {
  const [squares, setSquares] = useState([
    {
      id: 1,
      value: "",
      enabled: true
    },
    {
      id: 2,
      value: "",
      enabled: true
    },
    {
      id: 3,
      value: "",
      enabled: true
    },
    {
      id: 4,
      value: "",
      enabled: true
    },
    {
      id: 5,
      value: "",
      enabled: true
    },
    {
      id: 6,
      value: "",
      enabled: true
    },
    {
      id: 7,
      value: "",
      enabled: true
    },
    {
      id: 8,
      value: "",
      enabled: true
    },
    {
      id: 9,
      value: "",
      enabled: true
    },
  ]);
  const [currentTurn, setCurrentTurn] = useState(false);
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const possibleWins = [[1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7]]

  const handleClick = (id) => {
    const squaresCopy = [...squares];

    squaresCopy.forEach(square => {
      if (square.id === id && square.value === "") {
        square.value = currentTurn ? "O" : "X";
        setCurrentTurn(!currentTurn);
      }
    })

    setSquares(squaresCopy);

    checkForWin();
  }

  const checkForWin = () => {
    possibleWins.forEach(possibleWin => {
      const squaresToCheck = [];
      possibleWin.forEach((idToCheck, index) => {
        squares.forEach(square => {
          if (square.id === idToCheck) squaresToCheck[index] = square.value;
        });
      });
      if (squaresToCheck.every(value => value === "X")) return handleWin("X");
      if (squaresToCheck.every(value => value === "O")) return handleWin("O");
      if (squares.every(value => value.value !== "")) return handleWin("Draw");
    });
  }

  const handleWin = (winner) => {
    if (winner === "X") setXWins(xWins + 1);
    if (winner === "O") setOWins(oWins + 1);
    if (winner === "Draw") setDraws(draws + 1);


    const squaresCopy = [...squares];
    squaresCopy.forEach(square => {
      square.value = "";
    });
    setSquares(squaresCopy);

  }

  return (
    <div className="App">
      <h2 className="Turn">Next move: {currentTurn ? "O" : "X"}</h2>
      <div className="Game">
        <GameBoard squares={squares} handleClick={handleClick} />
        <ScoreBoard xWins={xWins} oWins={oWins} draws={draws} />
      </div>
    </div>
  );
}

export default App;
