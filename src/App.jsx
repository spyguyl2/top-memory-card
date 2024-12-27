import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleIncreaseScore = () => {
    setScore(score + 1);
    //"manually" adding 1 to score since it isn't updated from the above increase until next render.
    //is there a better way to handle this?
    score + 1 > bestScore ? setBestScore(score + 1) : null;
  };

  const handleResetScore = () => {
    setScore(0);
  };

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <GameBoard
        handleIncreaseScore={handleIncreaseScore}
        handleResetScore={handleResetScore}
      />
    </>
  );
}

export default App;
