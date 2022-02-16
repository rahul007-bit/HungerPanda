import React from "react";
import "./signup.css";
const SignUp = () => {
  return (
    <div className="bg ">
      <div className="innerdiv">
        <form className="to_side flex" action="">
          <label className="text-Style title">Signup with us</label>
          <label className="text-Style input-label">Enter your name</label>
          <input
            className="input_style"
            type="text"
            placeholder="Enter the name"
          />
          <label className="text-Style input-label">Email address</label>
          <input className="input_style" type="email" />
          <label className="text-Style input-label">Password</label>
          <input className="input_style" type="password" />
          <label className="text-Style input-label">Contact Number</label>
          <input className="input_style" type="tel" pattern="[0-9]{10}" />
          <label className="text-Style input-label">Date of Birth</label>
          <input className="input_style" type="date" />
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

export default SignUp;
