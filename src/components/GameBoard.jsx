import Card from "./Card";
import { useEffect } from "react";

const GIPHY_API_KEY = "Uuv7CSHnVgjoO73jFt5wI8rfn5b9gAob";
const FETCH_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`;

const GameBoard = () => {
  useEffect(() => {
    const getGifs = async () => {
      const response = await fetch(FETCH_URL);
      const gifData = await response.json();
    };
  }, []);

  return (
    <>
      <img src="" alt="" />
    </>
  );
};

export default GameBoard;
