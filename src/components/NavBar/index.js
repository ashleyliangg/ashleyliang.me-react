import React from "react";
import { Nav, NavLink, NavMenu, HomeLink, BarsIcon } 
    from "./navbarElements";
  
// found syntax and usage of Nav, NavLink, NavMenu at https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <HomeLink to="/" activestyle="true">
          Ashley Liang
        </HomeLink>
        {/* clicking on bars icon changes whether the sidebar is open or not (aka opens sidebar) */}
        <BarsIcon onClick={toggle}/>
        <NavMenu>
          <NavLink to="/" activestyle="true">
            Home
          </NavLink>
          <NavLink to="/roadtrip" activestyle="true">
            Roadtrip
          </NavLink>
          <NavLink to="/resume" activestyle="true">
            Resume
          </NavLink>
          <NavLink to="/contact" activestyle="true">
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;