import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left">
          <a className="deco" href="/">
            <h1 className="text">HungerPanda</h1>
          </a>
          <h1 className="text get__app">Get App</h1>
        </div>
        <div className="right">
          <div>
            <a className="link deco" href="/login">
              Login
            </a>
          </div>
          <div>
            <a className="link deco" href="/signup">
              Signup
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
