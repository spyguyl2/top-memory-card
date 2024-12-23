import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

const PEXELS_API_KEY =
  "uErC2aasX3Qt65W2XmTgxaGigjB1JRYmHwTJEi5Dk98pl0xENCZcPcgB";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleIncreaseScore = () => {
    setScore(score + 1);
    score > bestScore ? setBestScore(score) : null;
  };

  return (
    <>
      <Header score={score} bestScore={bestScore} />
    </>
  );
}

export default App;

//generate images with pexels. search for floral images
