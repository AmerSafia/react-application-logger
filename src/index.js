import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./index.css";

import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);