import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const BrowserRouterWrapper = ({ children }) => {
  return <Router>{children}</Router>;
};

export default BrowserRouterWrapper;
