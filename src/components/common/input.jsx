import React from "react";

export const Input = ({ type, placeholder, label,onSetInput, name, value }) => {
  return (
    <div className="col-Custom">
      <label  className=" d-block font-weight-bold ">{label}</label>
      <input
        className="form-control-sm input-style w-100 "
        type={type}
        placeholder={placeholder}
        onChange={onSetInput}
        name={name}
        value={value}
      />
    </div>
  );
};
