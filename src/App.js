import React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import LeftSide from "./Components/register/LeftSide/index";
import RightSide from "./Components/register/RightSide";

function App() {
  return (
    <>
      <div className="App">
        {/* <LeftSide />
        <RightSide /> */}
        <Login />
      </div>
    </>
  );
}

export default App;
