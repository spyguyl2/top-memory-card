import Card from "./Card";
import _, { shuffle } from "lodash";
import { useEffect, useState } from "react";

const GIPHY_API_KEY = "Uuv7CSHnVgjoO73jFt5wI8rfn5b9gAob";
const FETCH_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`;

const GameBoard = ({ handleIncreaseScore, handleResetScore }) => {
  const [gifs, setGifs] = useState(null);
  const [haveGifs, setHaveGifs] = useState(false);

  const handleShuffle = () => {
    const newArray = shuffle(gifs);
    setGifs(newArray);
  };

  useEffect(() => {
    const getGifs = async () => {
      const response = await fetch(FETCH_URL, { mode: "cors" });
      const gifData = await response.json();
      setGifs(gifData.data);
      setHaveGifs(true);
    };
    getGifs();
    handleShuffle();
  }, []);
  return (
    <div id="gameBoard">
      {haveGifs ? (
        gifs.map((gif) => {
          return (
            <Card
              src={gif.images.fixed_width.url}
              key={gif.index}
              handleIncreaseScore={handleIncreaseScore}
              handleResetScore={handleResetScore}
              handleShuffle={handleShuffle}
            />
          );
        })
      ) : (
        <p>Loading gifs...</p>
      )}
    </div>
  );
};

export default GameBoard;
