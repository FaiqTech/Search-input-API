// Input.js
import React from "react";

function Input({ value, onChange }) {
  return (
    <input
      className="input"
      type="text"
      placeholder="Search..."
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
