import React from "react";
import "./App.css";
import Logger from "./components/logger";
import Breadcrumb from "./components/common/breadcrumb/breadcrumb";
const App = () => {
 
  return (
    <div className=" container-fluid">
      <Breadcrumb />
      <hr />
        <Logger />
    </div>
  );
};

export default App;
