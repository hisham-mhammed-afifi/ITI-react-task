import { NavLink } from "react-router-dom";

function NavTab({ children, path }) {
  return (
    <li className="nav-item">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to={path}
      >
        {children}
      </NavLink>
    </li>
  );
}

NavTab.defaultProps = {
  children: "New tab",
};

export default NavTab;
