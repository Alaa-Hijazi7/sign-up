import React from "react";

const Input = (props) => {
  const { type, name, id, placeholder, value, onChange, className } = props;
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </>
  );
};

export default Input;
