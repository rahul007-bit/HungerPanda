import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="bg ">
      <div className="innerdiv">
        <form className="to_side flex" action="">
          <label className="text-Style title">Login with us</label>
          <label className="text-Style input-label">Email address</label>
          <input className="input_style" type="email" />
          <label className="text-Style input-label">Password</label>
          <input className="input_style" type="password" />
          <input className="checkbox" type="checkbox" />
          <span className="text-Style">Check me out</span>
          <input
            className="submit_btn text-Style"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
