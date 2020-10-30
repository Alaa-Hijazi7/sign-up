import React from "react";
import Button from "../../../Btns";
import Input from "../../../Input/Input";
import Label from "../../../Input/Label";
import Eye from "../../../../asset/img/eye.svg";

import "./style.css";

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
          <Label htmlFor="email" className="login-label">
            Email
          </Label>
          <Input
            className="login-input1"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            value={email}
            onChange={this.handleChange}
          />
          <div className="password-div">
            <Label htmlFor="password" className="login-label">
              Password
            </Label>
            <Input
              type={`${showPassword ? "text" : "password"}`}
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
              className="remember-checkbox "
              checked={RememberMe}
              onChange={this.handleChange}
            />
            <Label htmlfor="checkbox">Remember me</Label>
          </div>

          <Button className="login-Btn">Login</Button>
          <p className="account-go-register">
            Don't have account Create now{" "}
            <a href="/Register" className="go-register">
              Click here
            </a>
          </p>
        </form>
      </>
    );
  }
}

export default LoginForm;
