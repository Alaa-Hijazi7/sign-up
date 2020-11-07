import LeftSide from "../../Components/RegisterCom/LeftSide";
import RightSide from "../../Components/RegisterCom/RightSide";
import React from "react";

function Register(props) {
  const { handleClick } = props;
  return (
    <>
      <div className="login-App">
        <LeftSide />
        <RightSide handleClick={handleClick} />
      </div>
    </>
  );
}

export default Register;
