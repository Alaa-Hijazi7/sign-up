import React from "react";

import Register from "./ConfirmBtns/Register/Register";
import "./style.css";

const initialState = {
  email: "",
  password: "",
  passwordErrorMsg: "",
  re_password: "",
  re_passwordErrorMsg: "",
};

class Form extends React.Component {
  state = initialState;

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  submit = (e) => {
    e.preventDefault();

    alert(
      `email : ${this.state.email} password: ${this.state.password} re_password: ${this.state.re_password}`
    );

    //clear
    // this.setState(initialState);
  };

  render() {
    const { email, password, re_password } = this.state;
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

            <div className="agree">
              <input type="checkbox" className="agree-checkbox" />
              <label className="i-agree">I agree to terms & conditions</label>
            </div>
            <Register />
          </form>
        </div>
      </>
    );
  }
}
export default Form;
