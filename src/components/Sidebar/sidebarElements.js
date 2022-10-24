import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

//whole sidebar container
export const SidebarContainer = styled.aside`
  position: fixed;
  //highest z-index so always show up at the top
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #60B6A4;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  //if sidebar is open, opacity is 80%, is sidebar is closed, it is invisible
  opacity: ${({ isOpen }) => (isOpen ? "85%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

//icon to close sidebar
export const CloseIcon = styled(FaTimes)`
  color: #ffffff;
`;

//div for closeIcon icon
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

//wrapper for sidebar menu with turqoise color
export const SidebarWrapper = styled.div`
  color: ##60B6A4;
`;

//sidear menu
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows(4, 60px);
    }
`;

//links for different pages in sidebar
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  //just to make the bolding look nicer
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    transition: 0.2s ease-in-out;
  }
`;

//styled ext hyperlink
// export const SideExtLink = {
//   color: '#ffffff',
//   display: 'flex',
//   alignItems: 'center',
//   textDecoration: 'none',
//   lineHeight: '100%',
//   padding: '0 1rem',
// };

