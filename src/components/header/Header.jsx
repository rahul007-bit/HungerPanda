import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left">
          <h1 className="text">HungerPanda</h1>
          <h1 className="text get__app">Get App</h1>
        </div>
        <div className="right">
          <div>
            <a className="link" href="/login">
              Login
            </a>
          </div>
          <div className="link">
            <a className="link" href="/signup">
              Signup
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
