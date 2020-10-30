import React from "react";

function Button(props) {
  return (
    <button
      className={props.className}
      name={props.name}
      type={props.type}
      id={props.id}
    >
      {props.children}
    </button>
  );
}
export default Button;
