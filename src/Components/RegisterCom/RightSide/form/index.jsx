import React from "react";
import axios from "axios";

import Input from "../../../Input/Input";
import Register from "./ConfirmBtns/Register/Register";
import "./style.css";
import singUpSchema from "./val";
import { Redirect, withRouter } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  rePassword: "",
  isChecked: false,
  errors: {
    email: "",
    password: "",
    rePassword: "",
  },
  error: "",
};

class Form extends React.Component {
  state = initialState;

  handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    let _value = value;
    _value = type === "checkbox" ? checked : value;
    this.setState({ [name]: _value }, () => {
      const { email, password, rePassword, isChecked } = this.state;

      singUpSchema(name)
        .validate(
          { email, password, rePassword, isChecked },
          { abortEarly: false }
        )
        .then(() => {
          this.setState((prevState) => {
            const { errors } = prevState;
            return {
              errors: { ...errors, [name]: "" },
            };
          });
        })
        .catch((err) => {
          this.setState((prevState) => {
            const errors = {};
            err.inner.forEach(({ message, params }) => {
              errors[params.path] = message;
            });
            return { errors: { ...prevState.errors, [name]: errors[name] } };
          });
        });
    });
  };

  validateForm = (data) => {
    singUpSchema()
      .validate(data, { abortEarly: false })
      .then(() => {
        console.log("Register successfully");
      })
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

    const { email, password, rePassword, isChecked, error } = this.state;
    this.validateForm({ email, password, rePassword, isChecked });
    if (!error) {
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/signup", {
          email,
          password,
        })
        .then((res) => {
          this.props.history.push("/login");
        })
        .catch((err) => {
          let error = err.response.data.error;
          if (error.includes("duplicate")) {
            error = "Try another email !";
          }
          this.setState({ error });
        });
    }
  };

  render() {
    const {
      email,
      password,
      rePassword,
      isChecked,
      errors,
      error,
    } = this.state;
    return (
      <>
        <div className="all-form">
          <form className="form" onSubmit={this.submit}>
            <Input
              children="email*"
              classNameLabel="login-label"
              htmlFor="email"
              type="text"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={email}
              onChange={this.handleChange}
              error={errors.email}
              className={`register-input ${errors.email && "error"}`}
            />
            <Input
              children="password*"
              classNameLabel="login-label"
              htmlFor="password"
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
              error={errors.password}
              className={`register-input ${errors.password && "error"}`}
            />
            <Input
              children="Repeat password*"
              classNameLabel="login-label"
              htmlFor="rePassword"
              name="rePassword"
              type="password"
              id="re-password"
              placeholder="Repeat password"
              value={rePassword}
              onChange={this.handleChange}
              error={errors.rePassword}
              className={`register-input ${errors.rePassword && "error"}`}
            />
            <div className="cb1">
              <Input
                type="checkbox"
                id="checkbox"
                className="agree-checkbox"
                name="isChecked"
                checked={isChecked}
                onChange={this.handleChange}
              />
              <label
                htmlFor="checkbox"
                className={errors.isChecked && "error-checkbox"}
              >
                I agree to terms & conditions
              </label>
            </div>
            {error && <span style={{ color: "red" }}>{error}</span>}
            <Register
              type="submit"
              name="submit"
              id="submit"
              className="submit"
            />
          </form>
        </div>
      </>
    );
  }
}
export default withRouter(Form);
