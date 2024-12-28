import { useState } from "react";

const Card = ({ src, alt, id, handleClick }) => {
  return (
    <div className="card" id={id} onClick={handleClick}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Card;
