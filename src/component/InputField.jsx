import React from "react";

const InputField = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="form-group">
    <input
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default InputField;
