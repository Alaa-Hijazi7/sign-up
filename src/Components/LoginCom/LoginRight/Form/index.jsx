import React from "react";
import Button from "../../../../Components/Btns";
import Input from "../../../../Components/Input/Input";
import Label from "../../../../Components/Input/Label";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Eye from "../../../../asset/img/eye.svg";

import "./style.css";
import "../../../RegisterCom/RightSide/form/style.css";

const initialState = {
  email: "",
  password: "",
  RememberMe: false,
  showPassword: false,
};

class LoginForm extends React.Component {
  state = initialState;

  handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    let _value = value;
    _value = type === "checkbox" ? checked : value;
    this.setState({ [name]: _value });
  };

  togglePasswordVisibility = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };
  submit = (e) => {
    e.preventDefault();
    alert(`email : ${this.state.email} password: ${this.state.password}`);
    //clear
    this.setState(initialState);
  };
  render() {
    const { email, password, RememberMe, showPassword } = this.state;

    return (
      <>
        <form className="login-form" onSubmit={this.submit}>
          <Input
            children="Email"
            htmlFor="email"
            classNameLabel="login-label"
            className="login-input1"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            value={email}
            onChange={this.handleChange}
          />
          <div className="password-div">
            <Input
              children="Password"
              classNameLabel="login-label"
              className="login-input1"
              htmlFor="password"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={this.handleChange}
            />
            <img
              src={Eye}
              alt="Eye"
              className="Eye"
              onClick={this.togglePasswordVisibility}
            />
          </div>
          <div className="remember-me">
            <Input
              type="checkbox"
              id="checkbox"
              name="RememberMe"
              className="remember-checkbox"
              checked={RememberMe}
              onChange={this.handleChange}
            />
            <Label htmlFor="checkbox">Remember me</Label>
          </div>

          <Button className="login-Btn">Login</Button>
          <p className="account-go-register">
            Don't have account Create now{" "}
            <Link to="/Register" className="go-register">
              Click here
            </Link>
          </p>
        </form>
      </>
    );
  }
}

export default LoginForm;
