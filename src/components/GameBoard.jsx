import Card from "./Card";
import { useEffect, useState } from "react";

const GIPHY_API_KEY = "Uuv7CSHnVgjoO73jFt5wI8rfn5b9gAob";
const FETCH_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`;

const GameBoard = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    async function getGifsArray() {
      const response = await fetch(FETCH_URL);
      const gifData = await response.json();
      return gifData.data;
    }
    getGifsArray().then((data) => setGifs(data));
  }, []);

  return (
    <>
      <img src={gifs[0].src} alt="" />
    </>
  );
};

export default GameBoard;
