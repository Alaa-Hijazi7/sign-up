import React from "react";

import LoginLeft from "../../Components/LoginCom/LoginLeft";
import LoginRight from "../../Components/LoginCom/LoginRight";
import "./style.css";
class Login extends React.Component {
  render() {
    return (
      <>
        <div className="login-App">
          <LoginLeft />
          <LoginRight />
        </div>
      </>
    );
  }
}
export default Login;
