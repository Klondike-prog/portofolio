import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./navbarElements";
import IntroSection from "../IntroSection";

const Navbar = ({ toggle }) => {
  return (
    <>
      <NavLogo to="/">Logo</NavLogo>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
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
      <IntroSection />
    </>
  );
};

export default Navbar;
