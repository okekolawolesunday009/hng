import React, { useState, useEffect } from "react";
import "./colorGame.css"; // Import the CSS file

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function ColorGame() {
  const [targetColor, setTargetColor] = useState("");
  const [colorOptions, setColorOptions] = useState([]);
  const [gameStatus, setGameStatus] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    
    const newTargetColor = getRandomColor();
    const options = [
      newTargetColor,
      getRandomColor(),
      getRandomColor(),
      getRandomColor(),
      getRandomColor(),
      getRandomColor(),
    ];
    setColorOptions(shuffleArray(options));
    setTargetColor(newTargetColor);
    setScore(0)
    setGameStatus("Guess the correct color!");
    
  };

  const nextColorGame = () => {
    const newTargetColor = getRandomColor();
    const options = [
      newTargetColor,
      getRandomColor(),
      getRandomColor(),
      getRandomColor(),
      getRandomColor(),
      getRandomColor(),
    ];
    setColorOptions(shuffleArray(options));
    setTargetColor(newTargetColor);
   
  }

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleGuess = (color) => {
    if (color === targetColor) {
      setScore(score + 1);
      setGameStatus("Correct! 🎉");

    } else {
      setGameStatus("Wrong! Try again. ❌");
    }
    setTimeout(() => {
      nextColorGame()
      
    }, 5000);
  };

  return (
    <div className="game-container">
      <h1 className="game-instructions" data-testid="gameInstructions">
        Guess the correct color!
      </h1>
      <div
        className="color-box"
        style={{ backgroundColor: targetColor }}
        data-testid="colorBox"
      ></div>
      <div className="color-options">
        {colorOptions.map((color, index) => (
          <button
            key={index}
            className="color-button"
            style={{ backgroundColor: color }}
            onClick={() => handleGuess(color)}
            data-testid="colorOption"
          ></button>
        ))}
      </div>
      <p className="game-status" data-testid="gameStatus">{gameStatus}</p>
      <p className="score" data-testid="score">Score: {score}</p>
      <button
        className="new-game-button"
        onClick={startNewGame}
        data-testid="newGameButton"
      >
        New Game
      </button>
    </div>
  );
}
