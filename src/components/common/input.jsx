import React, { Fragment } from "react";

export const Input = ({ type, placeholder, setInput, label }) => {
  return (
    <span >
      <span class=" d-block label label-default font-weight-bold ">{label}</span>
      <input
        className="form-control-sm mt-2 input-style "
        type={type}
        placeholder={placeholder}
        onChange={setInput}
      />
    </span>
  );
};
