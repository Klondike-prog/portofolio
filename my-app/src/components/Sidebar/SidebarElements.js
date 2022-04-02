import styled from "styled-components";
import "../Navbar/index.css";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

export const SidebarContainer = styled.aside`
position:fixed;
z-index: 999;
width:100%;
height:100%;
background:#119872;
display:grid;
align-items:center;
top:0;
left:0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")}
top: ${({ isOpen }) => (isOpen ? "0" : "-100%")}
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: #black;
`;
export const SidebarLink = styled(LinkScroll)`
display:flex;
align-items;center;
justify-content:center;
font-size:2rem;
text-decoration:none;
list-style:none;
transition: 0.2s ease-in-out;
text-decoration:none;
color: #fff;
cursor:pointer;

&:hover {
    color: #0b654c;
    transition: 0.2 ease-in-out; 
}
`;

export const SidebarMenu = styled.ul`
  font-family: "Minecraft", sans-serif;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 100px);
  text-align: center;
  @media screen and (max-width: 968px) {
    grid-template-rows: repeat (3, 60px);
  }
`;
