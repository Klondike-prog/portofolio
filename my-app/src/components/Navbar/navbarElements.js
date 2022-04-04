import styled from "styled-components";
import "./index.css";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
export const Bg = styled.div`
  background-image: url(../../videos/video.mp4);
`;
export const Nav = styled.nav`
  top: 0;
  left: 28.5%;
  height: 80px;
  background: #119872;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10rem;
  border-bottom-right-radius: 10rem;
  max-width: 900px;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  overflow: hidden;

  @media screen and (max-width: 968px) {
    transition: 0.8s all ease;
    max-width: 100px;
    left: 100%;
    border-bottom-right-radius: 0rem;
    border-bottom-left-radius: 3rem;
    border-top-left-radius: 0rem;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  z-index: 2;
  width: 100%;
`;
export const NavLogo = styled(LinkRouter)`
  left: 6%;
  top: 2%;
  height: 150px;
  width: 150px;
  position: fixed;
  color: black;
  cursor: pointer;
  z-index: 10;
  transform-origin: top left;
  &:hover {
    animation: fall 2s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }
  @keyframes fall {
    20%,
    60% {
      opacity: 1;
      transform: rotate(10deg);
    }
    40%,
    80% {
      opacity: 1;
      transform: rotate(80deg);
    }
    90% {
      opacity: 0;
      transform: translateY(1000px);
    }
    100% {
      opacity: 0;
    }
  }
  @media screen and (max-width: 968px) {
    display: block;
    position: fixed;
    width: 15rem;
    height: 15rem;
    top: 0;
    right: 0;
    transform: translate(0%, 5%);
    cursor: pointer;
    &:hover {
      animation: none;
    }
  }
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
  padding-left: 8%;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 10px;
  overflow: hidden;
  @media screen and (max-width: 968px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  font-family: "Minecraft", sans-serif;
  height: 80px;
  font-size: 2.1rem;

  &:hover {
    background-color: #fff;
    transition-duration: 0.6s;
    transition-timing-function: cubic-bezier(0, 0, 100, 100);
    height: 90px;
    width: 100%;
    border-top-left-radius: 10rem;
    border-top-right-radius: 10rem;
  }
`;

export const NavLinks = styled(LinkScroll)`
  color: hsl(166, 100%, 16%);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2.5rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    animation: scale 0.5s ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.2);
    }
  }
`;

export const Img = styled.img`
  left: 10%;
  heigth: 100%;
  width: 80%;
  border-bottom-right-radius: 5rem;
  border-bottom-left-radius: 5.5rem;
  border-top-left-radius: 5.5rem;
  border-top-right-radius: 2rem;
  animation: glow 5s ease-in-out infinite;

  @keyframes glow {
    0%,18%,20%,50.1%,60%,65.1%,80%,90.1%,92% {
      box-shadow: none;
    }18.1%,20.1%,30%,50%,60.1%,65%,80.1%,90%,92.1%,100% {
      box-shadow: inset 0 0 10px #119872, -10px 0 10px #119872,
        inset 0 0 20px  #119872, -10px 0 20px #119872, 
        inset 0 0 20px #119872,-10px 0 40px #119872, 
        inset 0 0 20px #119872, -20px 0 80px #119872,
        inset 0 0 20px #119872, -15px 0 160px #119872;
       
    }
  }
`;
