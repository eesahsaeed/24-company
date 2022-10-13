import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      style={props.width ? { width: props.width } : null}
      className="btn animate-bounce"
    >
      {props.children}
    </button>
  );
};

export default Button;
