import React from "react";

const SelectMenu = ({ label, options, onSelectedValue, name, value }) => {
  return (
    <span className="col">
      <label  id="inputState" className="font-weight-bold ">{label}</label>
      <select
        value={value}
        name={name}
        className="form-control-sm  input-style w-100 "
        onChange={onSelectedValue}
      >
        <option hidden defaultValue />
        {options &&
          options.map((option) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
      </select>
    </span>
  );
};

export default SelectMenu;
