import { React, useState } from "react";
import "./signup.css";
const SignUp = () => {
  const [ageVaild, setVaild] = useState(false);
  const [showMessage, setShow] = useState(false);
  const enableBtn = (event) => {
    const today = new Date();
    const DOB = new Date(event.target.value);
    const age_now = today.getFullYear() - DOB.getFullYear();
    console.log(age_now);
    if (age_now > 14) {
      setVaild(true);
      setShow(false);
    } else {
      setVaild(false);
      setShow(true);
    }
  };
  const checkValidity = () => {
    console.log("submited");
  };
  return (
    <div className="bg ">
      <div className="innerdiv">
        <form className="to_side flex" onSubmit={checkValidity}>
          <label className="text-Style title">Signup with us</label>
          <label className="text-Style input-label">Enter your name</label>
          <input
            className="input_style"
            type="text"
            placeholder="Enter the name"
          />
          <label className="text-Style input-label">Email address</label>
          <input className="input_style" type="email" required />
          <label className="text-Style input-label">Password</label>
          <input className="input_style" type="password" />
          <label className="text-Style input-label">Contact Number</label>
          <input
            className="input_style"
            type="tel"
            pattern="[0-9]{10}"
            required
          />
          <label className="text-Style input-label">Date of Birth</label>
          <input onChange={enableBtn} className="input_style" type="date" />
          <label className={`${!showMessage ? "hide" : "show"}`}>
            Age should be above 14 years
          </label>
          <input id="check" className="checkbox" type="checkbox" />
          <label className="text-Style">Check me out</label>
          <input
            disabled={!ageVaild}
            className={`submit_btn text-Style ${!ageVaild ? "disabled" : ""}`}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
