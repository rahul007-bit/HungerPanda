import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <Link className="deco" to="/">
          <h1 className="text">HungerPanda</h1>
        </Link>
        <h1 className="text get__app">Get App</h1>
      </div>
      <div className="right">
        <div>
          <Link className="link deco" to="/login">
            Login
          </Link>
        </div>
        <div>
          <Link className="link deco" to="/signup">
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
