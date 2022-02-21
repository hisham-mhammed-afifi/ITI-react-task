import React from "react";
import Tab from "./Tab";

function Tabs({ children }) {
  return <ul className="nav nav-pills mb-3">{children}</ul>;
}

export default Tabs;
