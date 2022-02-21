import React from "react";
import { NavLink } from "react-router-dom";

function Tab({ children, path }) {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={path}>
        {children}
      </NavLink>
    </li>
  );
}

export default Tab;
