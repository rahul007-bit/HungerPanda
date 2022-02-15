import React from "react";
import "./cards.css";
const Card = ({ image, diskType }) => {
  return (
    <>
      <div className="main">
        <img src={image} alt="" className="topdiv" />
        <div className="bottomdiv"></div>
      </div>
    </>
  );
};
export default Card;
