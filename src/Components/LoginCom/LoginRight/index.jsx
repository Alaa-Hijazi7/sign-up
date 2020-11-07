import React from "react";

import Google from "../../../asset/img/google.svg";
import Twitter from "../../../asset/img/twitter.svg";
import Linkedin from "../../../asset/img/linkedin.svg";
import Github from "../../../asset/img/Github.svg";
import BtnSocial from "./BtnSocial";
import Line from "../../../asset/img/line";
import LoginForm from "./Form";

import "./style.css";
import "./../../RegisterCom/RightSide/form/ConfirmBtns/Register/style.css";

const LoginRight = (props) => {
  const { handleLogin, handleClick } = props;
  return (
    <>
      <div className="login-right">
        <h1>Welcome Back!</h1>
        <p>Go inside the best gamers social network!</p>
        <div className="social-media">
          <BtnSocial href="https://google.com" className="social-btn">
            <img src={Google} alt="Google" />
          </BtnSocial>
          <BtnSocial href="https://Twitter.com" className="Twitter-btn">
            <img src={Twitter} alt="Twitter" />
          </BtnSocial>
          <BtnSocial href="https://Linkedin.com" className="LinkedIn-btn">
            <img src={Linkedin} alt="LinkedIn" />
          </BtnSocial>
          <BtnSocial href="https://Github.com" className="Github-btn">
            <img src={Github} alt="Github" />
          </BtnSocial>
        </div>
        <div className="asdawd">
          <div className="first-line">
            <Line id="line1" />
          </div>
          <p className="or-text or-text-login">Or</p>
          <div className="second-line">
            <Line id="line1" />
          </div>
        </div>
        <LoginForm handleLogin={handleLogin} handleClick={handleClick} />
      </div>
    </>
  );
};

export default LoginRight;
