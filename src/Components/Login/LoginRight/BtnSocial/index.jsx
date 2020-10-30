import React from "react";

import "./style.css";
const BtnSocial = (props) => {
  return (
    <a href={props.href} target="_blank">
      <button className={props.className}>{props.children}</button>
    </a>
  );
};

export default BtnSocial;
