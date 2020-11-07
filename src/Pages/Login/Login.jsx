import React from "react";

import LoginLeft from "../../Components/LoginCom/LoginLeft";
import LoginRight from "../../Components/LoginCom/LoginRight";
import "./style.css";

function Login(props) {
  const { handleLogin, handleClick } = props;
  return (
    <div className="login-App">
      <LoginLeft />
      <LoginRight handleLogin={handleLogin} handleClick={handleClick} />
    </div>
  );
}
export default Login;
