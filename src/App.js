import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <>
      {/* <Route> */}
      <div className="App">
        {/* <Login /> */}
        <Register></Register>
      </div>
      {/* </Route> */}
    </>
  );
}

export default App;
