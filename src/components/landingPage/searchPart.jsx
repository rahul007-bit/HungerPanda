import React from "react";
import "./search.css";
const Search = () => {
  return (
    <div className="Outerdiv">
      <div className="InnerDiv textStyle ">
        <h1 className="Tile">HungerPanda</h1>
        <span className="quots">One Solution for all your bunge</span>
        <div className="searchBox">
          <input
            className="input-style short-input"
            type="text"
            placeholder="Select City"
          />
          <input
            className="input-style long-input"
            type="text"
            placeholder="Search for the Restraunt"
          />
        </div>
      </div>
    </div>
  );
};
export default Search;
