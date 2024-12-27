import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleIncreaseScore = () => {
    setScore(score + 1);
    score > bestScore ? setBestScore(score) : null;
  };

  const handleResetScore = () => {
    setScore(0);
  };

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <GameBoard />
    </>
  );
}

export default App;
