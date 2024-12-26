import Card from "./Card";
import { useEffect, useState } from "react";

const GIPHY_API_KEY = "Uuv7CSHnVgjoO73jFt5wI8rfn5b9gAob";
const FETCH_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`;

const GameBoard = () => {
  const [gifs, setGifs] = useState(null);
  const [haveGifs, setHaveGifs] = useState(false);

  useEffect(() => {
    const getGifs = async () => {
      const response = await fetch(FETCH_URL, { mode: "cors" });
      const gifData = await response.json();
      setGifs(gifData.data);
      setHaveGifs(true);
    };
    getGifs();
    console.log(gifs);
  }, []);

  return (
    <>
      {!haveGifs ? (
        <p>Loading gifs...</p>
      ) : (
        <img src={gifs[0].images.original.url} alt="" />
      )}
    </>
  );
};

export default GameBoard;
