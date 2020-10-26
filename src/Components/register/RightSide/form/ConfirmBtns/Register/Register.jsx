import React from "react";

import Line from "../../../../../../asset/img/line";
import GoogleLogo from "../../../../../../asset/img/GoogleLogo";

import "./style.css";

class Register extends React.Component {
  render() {
    return (
      <>
        <button type="submit" name="submit" id="submit" className="submit">
          Register Account
        </button>
        <div className="asda">
          <div className="first-line">
            <Line id="line1" />
          </div>

          <p className="or-text">Or</p>

          <div className="second-line">
            <Line id="line1" />
          </div>
          <div className="googleSs">
            <button className="googleS">
              <GoogleLogo />
              Register with Google
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default Register;
