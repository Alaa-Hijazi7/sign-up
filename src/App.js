import React from "react";
import "./App.css";
import LeftSide from "./Components/register/LeftSide/index";
import RightSide from "./Components/register/RightSide";

function App() {
  return (
    <>
      <div className="App">
        <LeftSide />
        <RightSide />
      </div>
    </>
  );
}

export default App;
