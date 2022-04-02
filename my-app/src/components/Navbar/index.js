import React from "react";
import {FaBars} from "react-icons/fa"
import { Nav, NavbarContainer, NavLogo,MobileIcon,NavMenu,NavItem,NavLinks } from "./navbarElements";

const Navbar = () => {
  return (
    <>
        <NavLogo to="/">Logo</NavLogo>
      <Nav>
        <NavbarContainer>
        
        <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">.About()</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="work">.Work()</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="work">.Contact()</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
