import React from "react";

const Label = (props) => {
  return (
    <label htmlFor={props.htmlFor} className={props.className}>
      {props.children}
    </label>
  );
};

export default Label;