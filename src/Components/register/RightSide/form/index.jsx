import React from "react";

import Register from "./ConfirmBtns/Register/Register";
import "./style.css";

const initialState = {
  email: "",
  password: "",
  passwordErrorMsg: "",
  re_password: "",
  re_passwordErrorMsg: "",
  isChecked: false,
};

class Form extends React.Component {
  state = initialState;

  handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    let _value = value;
    _value = type === "checkbox" ? checked : value;
    this.setState({ [name]: _value });
  };

  submit = (e) => {
    e.preventDefault();
    if (this.state.isChecked === true) {
      alert(
        `email : ${this.state.email} password: ${this.state.password} re_password: ${this.state.re_password}`
      );
      //clear
      this.setState(initialState);
    } else {
      alert("You must agree terms & conditions");
    }
  };

  render() {
    const { email, password, re_password, isChecked } = this.state;
    return (
      <>
        <div className="all-form">
          <form className="form" onSubmit={this.submit}>
            <label htmlFor="email">Email address*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={email}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Create password*</label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />

            <label htmlFor="re-password">Repeat password*</label>
            <input
              name="re_password"
              type="password"
              id="re-password"
              placeholder="Repeat password"
              value={re_password}
              onChange={this.handleChange}
            />
            <div className="cb1">
              <input
                type="checkbox"
                id="checkbox"
                name="isChecked"
                className="agree-checkbox"
                checked={isChecked}
                onChange={this.handleChange}
              />
              <label htmlfor="checkbox">I agree to terms & conditions</label>
            </div>
            <Register
              type="submit"
              name="submit"
              id="submit"
              className="submit"
              Button
            />
          </form>
        </div>
      </>
    );
  }
}
export default Form;
