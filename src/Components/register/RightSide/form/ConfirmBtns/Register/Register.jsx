import React from "react";

import Line from "../../../../../../asset/img/line";
import GoogleLogo from "../../../../../../asset/img/GoogleLogo";

import "./style.css";
import Button from "../../../../../Btns";

class Register extends React.Component {
  render() {
    return (
      <>
        <Button
          type="submit"
          name="submit"
          id="submit"
          className="submit"
          Button
        >
          Register Account
        </Button>
        <div className="asda">
          <div className="first-line">
            <Line id="line1" />
          </div>
          <p className="or-text">Or</p>
          <div className="second-line">
            <Line id="line1" />
          </div>
          <div className="googleSs">
            <Button className="btn2" name="register_G" id="register_G">
              <GoogleLogo />
              <span className="btn_box">Register with Google</span>
            </Button>
          </div>
        </div>
      </>
    );
  }
}
export default Register;
