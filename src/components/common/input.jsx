import React from "react";

export const Input = ({ type, placeholder, label,onSetInput }) => {
  return (
    <span className="col">
      <span className=" d-block label label-default font-weight-bold ">{label}</span>
      <input
        className="form-control-sm mt-2 input-style "
        type={type}
        placeholder={placeholder}
        onChange={onSetInput}
      />
    </span>
  );
};
