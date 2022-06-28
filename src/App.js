import React from "react";
import "./App.css";
import { Input } from "./components/common/input";
import Logger from "./components/logger";
import Breadcrumb from './components/common/breadcrumb/breadcrumb'
const App = () => {
  return (
    <div className=" container-fluid" >
      <Breadcrumb />
      <hr/>
      <div className="d-flex justify-content-between ">
        <Input type="text" placeholder="e.g. Admin.User" label="Employee Name" />
        <Input type="text" placeholder="Action type" label="Action type" />
        <Input type="text" placeholder="Application Type" label="Application Type" />
        <Input type="text" placeholder="Select date" label="From Date" />
        <Input type="text" placeholder="Select date" label="To Date" />
        <Input type="text" placeholder="e.g.219841/2021" label="Application ID" />
        <div className="d-flex align-items-end ">
          <button type="submit" className=" btn btn-primary btn-sm  ">
            <div>Search Logger</div>
          </button>
        </div>
      </div>
      <div className="m-3 " style={{backGround:'#fff'}}>
        <Logger />
      </div>
    </div>
  );
};

export default App;
