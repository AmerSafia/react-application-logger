import React from "react";

const SelectMenu = ({ label, options,onSelectedValue }) => {

  return (
    <span className="col">
      <span className=" d-block label label-default font-weight-bold ">
        {label}
      </span>
      <select className="custom-select form-control-sm mt-2 input-style " onChange={onSelectedValue}>
      <option hidden defaultValue ></option>
        {options &&
          options.map((option) => {
            return <option value={option} key={option}>{option}</option>;
          })}
      </select>
    </span>
  );
};

export default SelectMenu;
