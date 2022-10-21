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



          {/* link to resume pdf
          <a className='extlink' href="https://drive.google.com/file/d/18e8mhCWqqYPOPZ9rK_14-d-Gpi4nZBlW/view?usp=sharing">
            Resume
          </a> */}

        // {/* navigation bar container */}
        // <NavMenu>
        //   {/* NavLink is a link that highlights the current place in navbar */}
        //   <HomeLink to="/" activestyle>
        //   Ashley Liang
        //   </HomeLink>
        //   <NavLink to="/" activestyle>
        //     Home
        //   </NavLink>
        //   <NavLink to="/roadtrip" activestyle>
        //     Roadtrip
        //   </NavLink>
        //   <NavLink to="/contact" activestyle>
        //     Contact
        //   </NavLink>
        //   {/* link to resume pdf */}
        //   <a style={ExtLink} href="https://drive.google.com/file/d/18e8mhCWqqYPOPZ9rK_14-d-Gpi4nZBlW/view?usp=sharing">
        //     Resume
        //   </a>
        // </NavMenu>