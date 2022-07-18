// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
//styled components
export const Nav = styled.nav`
  background: #a9f5f2;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    font-weight: bold;
  }
`;

export const HomeLink = styled(Link)`
  color: #FFFFFF;
  font-weight: bold;
  font-family: "Snell Roundhand", cursive;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-right: 400px;
  height: 100%;
  cursor: pointer;
`;
  
//menu container
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
// only display if browser width is less than or equal to 768px
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

//styled hyperlink
export const ExtLink = {
  color: '#808080',
  dispay: 'flex',
  textAlign: 'center',
  textDecoration: 'none',
  lineHeight: '100%',
  padding: '1rem',
}
