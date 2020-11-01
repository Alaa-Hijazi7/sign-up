import React from "react";
import "./App.css";
import Login from "./Pages/Login/Login";
import LeftSide from "./Pages/Register/LeftSide";
import RightSide from "./Pages/Register/RightSide";

function App() {
  return (
    <>
      <div className="App">
        <LeftSide />
        <RightSide />
        {/* <Login /> */}
      </div>
    </>
  );
}

export default App;
