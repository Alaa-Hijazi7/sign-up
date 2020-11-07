import React from "react";

function Button(props) {
  const { className, name, type, id, children } = props;
  return (
    <button className={className} name={name} type={type} id={id}>
      {children}
    </button>
  );
}
export default Button;
