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
  Img,
} from "./navbarElements";
import Image from "../../images/image.png";
import { motion } from "framer-motion";

const Navbar = ({ toggle }) => {
  return (
    <>
      
      <NavLogo to="/">
        <motion.div  initial={{ y: "-100vw" }}
        animate={{ y: "0" }}
        transition={{ delay:5,duration: 1, type: "spring", stiffness:35}}>
        <Img src={Image} id="#logo" />
        </motion.div>
      </NavLogo>
      <motion.div
        initial={{ y: "-100vw" }}
        animate={{ y: "0" }}
        transition={{delay:4, duration: 0.1, type: "spring", stiffness: 29}}
      >
        <Nav>
          <NavbarContainer>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <motion.div
                initial={{ x: "-5vw" }}
                animate={{ x: "0" }}
                transition={{delay:4.8, duration: 0.5, type: "spring", stiffness: 180, mass:1.5}}
              >
                <NavItem>
                  <NavLinks to="about">.About()</NavLinks>
                </NavItem>
              </motion.div>
              <motion.div initial={{ x: "+5vw" }}
                animate={{ x: "0" }}
                transition={{delay:4.8, duration: 0.5, type: "spring", stiffness: 200,mass:1.3 }}>
              <NavItem>
                <NavLinks to="work">.Work()</NavLinks>
              </NavItem>
              </motion.div>
              <motion.div initial={{ x: "+15vw" }}
                animate={{ x: "0" }}
                transition={{delay:4.8, duration: 0.5, type: "spring", stiffness: 170,mass:1.7 }}>
              <NavItem>
                <NavLinks to="work">.Contact()</NavLinks>
              </NavItem>
              </motion.div>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </motion.div>
    </>
  );
};

export default Navbar;
