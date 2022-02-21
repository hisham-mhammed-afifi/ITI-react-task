import { NavLink } from "react-router-dom";
import NavTabs from "./NavTabs";
import { FaReact } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <FaReact />
        </NavLink>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <NavTabs />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
