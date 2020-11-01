import React from "react";

// import Form from "../Login/Form";
import LoginLeft from "../Login/LoginLeft";
import LoginRight from "../Login/LoginRight";
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
