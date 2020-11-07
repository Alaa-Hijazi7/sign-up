import React from "react";

import Form from "./form";
import Back from "../../../Components/BackBtn";
import "./style.css";

const RightSide = (props) => {
  const { handleClick } = props;
  return (
    <div className="App2">
      <Back />
      <div className="text-form">
        <h1 className="h1-form">Register Individual Account!</h1>
        <p className="p-form">
          For the purpose of gamers regulation, your
          <br /> details are required.
        </p>
        <div className="line" />
      </div>
      <Form handleClick={handleClick} />
    </div>
  );
};

export default RightSide;
