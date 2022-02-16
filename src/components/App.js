import Header from "./header/Header";
import "./App.css";
import LandingPage from "./landingPage/LandingPage";
import Login from "./login/login";
import SignUp from "./signup/signup";

const App = () => {
  return (
    <div>
      <Header />

      <SignUp />
    </div>
  );
};

export default App;
