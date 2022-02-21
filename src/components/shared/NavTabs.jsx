import { BsHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

import NavTab from "./NavTab";

function NavTabs() {
  const favoritesArr = useSelector((state) => state.favorites);
  return (
    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
      <NavTab path="/dayone">Day one</NavTab>
      <NavTab path="/daytwo">Day two</NavTab>
      <NavTab path="/daythree">Day three</NavTab>
      <NavTab path="/dayfour">
        Day four <BsHeartFill className="text-warning" /> {favoritesArr.length}
      </NavTab>

      {/* <NavDropdown /> */}
    </ul>
  );
}

export default NavTabs;
