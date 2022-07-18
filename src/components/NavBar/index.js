import React from "react";
import { Nav, NavLink, NavMenu, ExtLink, HomeLink } 
    from "./navbarElements";
  
// found syntax and usage of Nav, NavLink, NavMenu at https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
const Navbar = () => {
  return (
    <div className="navigation">
      <Nav className="navbar">
        {/* navigation bar container */}
        <NavMenu>
            {/* NavLink is a link that highlights the current place in navbar */}
          <HomeLink to="/" activeStyle>
            Ashley Liang
          </HomeLink>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/roadtrip" activeStyle>
            Roadtrip
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
          {/* link to resume pdf */}
          <a style={ExtLink} href="https://drive.google.com/file/d/18e8mhCWqqYPOPZ9rK_14-d-Gpi4nZBlW/view?usp=sharing">
            Resume
          </a>
        </NavMenu>
      </Nav>
    </div>
  );
};
  
export default Navbar;