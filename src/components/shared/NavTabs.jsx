import { NavLink } from "react-router-dom";

import NavDropdown from "./NavDropdown";
import NavTab from "./NavTab";

function NavTabs() {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
      <NavTab path="/dayone">Day one</NavTab>
      <NavTab path="/daytwo">Day two</NavTab>
      <NavTab path="/daythree">Day three</NavTab>

      {/* <NavDropdown /> */}
    </ul>
  );
}

export default NavTabs;
