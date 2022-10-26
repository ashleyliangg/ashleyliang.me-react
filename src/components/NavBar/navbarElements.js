import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
//styled components
export const Nav = styled.nav`
  background: #a9f5f2;
  height: 80px;
  display: flex;
  justify-content: space-between;
  //calculation of padding from https://www.youtube.com/watch?v=VzWBLj_CfpE and https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
  padding: 0.2rem calc((100vw - 1000px) / 2);
  //nav always at top
  z-index: 12;
`;
 
//css styled links
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  //means 0 padding top/bottom; 1rem padding left/right
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    font-weight: bold;
  }
`;

//home link with stylized "Ashley Liang"
export const HomeLink = styled(Link)`
  color: #FFFFFF;
  font-weight: bold;
  font-family: "Snell Roundhand", cursive;
  display: flex;
  align-items: center;
  text-decoration: none;
  //because text is at the edge of window when window is smaller
  margin-left: 10px;
  height: 100%;
  cursor: pointer;
`;
  
//menu container
export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  //tutorial gave -24px, added 10px to compensate for the right edge
  margin-right: -14px;
// only display if browser width is less than or equal to 650px, otherwise make dropdown
  @media screen and (max-width: 650px) {
    display: none;
  }
`;


// //styled ext hyperlink, removed for now, perhaps will use later
// export const ExtLink = {
//   color: '#808080',
//   display: 'flex',
//   alignItems: 'center',
//   textDecoration: 'none',
//   lineHeight: '100%',
//   padding: '0 1rem',
// };

//FaBars (3 bar icon) for mobile usage
export const BarsIcon = styled(FaBars)`
  display: none;
  color: #808080;

  @media screen and (max-width: 650px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 70%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;



