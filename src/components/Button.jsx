import React from "react";
import "../styles/Button.css";

const Button = ({ label, onClick, type }) => {
  return (
    <div className="btn-main">
      <button type={type} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
