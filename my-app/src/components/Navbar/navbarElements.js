import styled from "styled-components";
import "./index.css";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
export const Nav = styled.nav`
  top: 0;
  left: 27%;
  height: 70px;
  background: #119872;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10rem;
  border-bottom-right-radius: 10rem;
  max-width: 900px;
  position: sticky;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:10;

  @media screen and (max-width: 968px) {
    transition: 0.8s all ease;
    max-width:100px;
    left:100%;
    border-bottom-right-radius: 0rem;
    border-bottom-left-radius:3rem;
    border-top-left-radius:0rem;
    

  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkRouter)`
  left: 3%;
  top: 2%;
  position: absolute;
  color: black;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  font-weight: bold;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 968px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-60%, 20%);
    font-size: 2.5rem;
    cursor: pointer;
    color: #black;
  }
`;
export const NavMenu = styled.ul`
  padding-left: 12%;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 10px;
  @media screen and (max-width: 968px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  padding-left: 10px;
  font-family: "Minecraft", sans-serif;
  height: 80px;
  font-size: 2.1rem;
`;

export const NavLinks = styled(LinkScroll)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
