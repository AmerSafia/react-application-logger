import React from "react";
import "./App.css";
import Logger from "./components/logger";
import Breadcrumb from "./components/common/breadcrumb/breadcrumb";
import {BrowserRouter as Router} from "react-router-dom";
const App = () => {
 
  return (
      <Router>
          <div className=" container-fluid">
              <Breadcrumb />
              <hr />
              <Logger />
          </div>
      </Router>
  );
};

export default App;
