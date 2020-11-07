import React from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import * as yup from "yup";

import Button from "../../../../Components/Btns";
import Input from "../../../../Components/Input/Input";
import Label from "../../../../Components/Input/Label";
import Eye from "../../../../asset/img/eye.svg";

import "./style.css";
import "../../../RegisterCom/RightSide/form/style.css";

const initialState = {
  email: "",
  password: "",
  RememberMe: false,
  showPassword: false,
  errors: {
    email: "",
    password: "",
  },
  error: "",
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

  validateForm = (data) => {
    yup
      .object()
      .shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(20).required(),
      })

      .validate(data, { abortEarly: false })
      .then(() => {})
      .catch((err) => {
        const errors = {};
        err.inner.forEach(({ message, params }) => {
          errors[params.path] = message;
        });
        this.setState({ errors });
      });
  };

  submit = (e) => {
    e.preventDefault(); //no refresh

    const { email, password, isChecked, error } = this.state;
    this.validateForm({ email, password, isChecked, error });
    if (!error) {
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/login", {
          email,
          password,
        })
        .then((res) => {
          this.props.handleLogin();
          this.props.history.push("/");
        })
        .catch((err) => {
          let error = err.response.data.error;
          console.log(error);
          if (error.includes("duplicate")) {
            error = "Try another email !";
          }
          if (error.includes("invalid ")) {
            error = "You have entered an invalid email or password";
          }
          this.setState({ error });
        });
    }
  };
  render() {
    const {
      email,
      password,
      RememberMe,
      showPassword,
      errors,
      error,
    } = this.state;

    return (
      <>
        <form className="login-form" onSubmit={this.submit} novalidate>
          <Input
            children="Email"
            htmlFor="email"
            classNameLabel="login-label"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            value={email}
            onChange={this.handleChange}
            error={errors.email}
            className={`login-input1 ${errors.email && "error"}`}
          />
          <div className="password-div">
            <Input
              children="Password"
              classNameLabel="login-label"
              htmlFor="password"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={this.handleChange}
              error={errors.password}
              className={`login-input1 ${errors.email && "error"}`}
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
          {error && (
            <span style={{ color: "red", marginBottom: "10px" }}>{error}</span>
          )}

          <Button className="login-Btn" type="submit">
            Login
          </Button>

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

export default withRouter(LoginForm);
