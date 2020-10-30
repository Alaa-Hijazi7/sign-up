import React from "react";

import LoginLogo from "../../logo/LoginLogo";
import Quote from "../../../asset/img/Quote.jsx";
import "./style.css";
import joystick from "./joystick.png";

const LoginLeft = () => {
  return (
    <>
      <div className="login-left">
        <div className="logo">
          <LoginLogo height="100%" width="20em" />
        </div>
        <div className="login-quote">
          <Quote color="#BABABA" />
          <p className="login-quote-text">
            I always observe the people who pass by when I ride an escalator.
            I'll never see most of them again, so I imagine a lot of things
            about their lives... about the day ahead of them.
          </p>
          <div className="login-quotes-name">Hideo Kojima</div>
          <img src={joystick} alt="joystick" className="joystick" />
        </div>
      </div>
    </>
  );
};

export default LoginLeft;
