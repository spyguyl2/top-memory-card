import { useEffect, useState } from "react";
import "./App.css";
import { createClient } from "pexels";
import Header from "./components/Header";

const GIPHY_API_KEY = "Uuv7CSHnVgjoO73jFt5wI8rfn5b9gAob";

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
    </>
  );
}

export default App;
