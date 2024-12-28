import { useState } from "react";

const Card = ({
  src,
  alt,
  handleIncreaseScore,
  handleShuffle,
  handleResetScore,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    if (clicked) {
      handleResetScore();
    } else {
      handleIncreaseScore();
      setClicked(true);
    }
    handleShuffle();
  };

  return (
    <div className="card" onClick={handleClicked}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Card;
