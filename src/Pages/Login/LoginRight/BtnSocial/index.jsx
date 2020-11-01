import React from "react";

import "./style.css";
const BtnSocial = (props) => {
  const { children, className } = props;

  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <button className={className}>{children}</button>
    </a>
  );
};

export default BtnSocial;
