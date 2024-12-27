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
    <div className="card">
      <img src={src} alt={alt} onClick={handleClicked} />
    </div>
  );
};

export default Card;
