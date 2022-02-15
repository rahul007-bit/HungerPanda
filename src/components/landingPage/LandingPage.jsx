import React from "react";
import Search from "./searchPart";
import "./cards.css";
const LandingPage = () => {
  const foods = [
    { image: "images/butterchicken.jpg", type: "Non-Vegiterian" },
    { image: "images/Dal.jpg", type: "Vegiterian" },
    { image: "images/pasta.jpg", type: "Continental" },
  ];
  return (
    <>
      <Search />
      <div className="outerdiv">
        {foods.map((food) => (
          <div className="main">
            <img src={food.image} alt="" className="image" />
            <div className="bottomdiv">{food.type}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LandingPage;
