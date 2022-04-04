import styled from "styled-components";
import "../Navbar/index.css";

export const FirstBox = styled.div`
  display: block;
  left: 30%;
  bottom: 30%;
  width: 800px;
  height: 410px;
  position: absolute;
  border-left: 5px solid #119872;
  border-radius: 50px 20px;
  text-align: left;
  justify-content: left;
  align-items: center;
  z-index: 10;
  font-family: 'Jura', sans-serif;
  animation: fadeInLeft 2s forwards;
    animation-delay:6s;
    opacity:0;
  @keyframes fadeInLeft {
    0% {
       opacity: 0;
       transform: translateX(-100px);
    }
    100% {
       opacity: 1;
       transform: none;
    }
 }   
  
  @media screen and (max-width: 968px) {
    width: 500px;
    height: 350px;
    bottom: 27%;
    left: 25%;
  }
`;

export const Title = styled.h1`
  color: #119872;
  font-size: 3rem;
  margin-top: 20px;
  margin-right: 170px;
  margin-bottom: 20px;
  padding-left:20px;
  cursor: default;
  animation: glow-title 2s forwards;
  animation-delay: 9s;
  
  @keyframes glow-title {
    0%,
    18%,
    20%,
    30%,
    50%,
    60%,
    70%,
    80%,
    90%,
    92% {
      text-shadow: none;
    }
    18.1%,
    20.1%,
    30.1%,
    40.1%,
    90.1%,
    92.1%,
    100% {
      text-shadow: 0 0 1px #119872, 0 0 1px #119872,
        -0 0 1px #119872, 0 0 8px #119872, 0 0 15px  #119872;
    }
  }
  @media screen and (max-width: 968px) {
    font-size: 1.5rem;
    padding-left: 20px;

  }
`;
export const MyEducation = styled.div`
  color: #119872;
  font-size: 1.5rem;
  font-weight:900;
  cursor: default;
  padding-left:20px;
  animation: opac 1s forwards;
  animation-delay:6.75s;
  opacity:0;

@keyframes opac {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 968px) {
    font-size: 1.3rem;
    padding-top:10px;
    padding-left: 20px;
  }
`;
export const AnimateTitle=styled.div`
animation: fadeInUp 1s forwards;
animation-delay:6s;
opacity:0;
@keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  
    100% {
      opacity: 1;
      transform: none;
    }
  }
`
export const LastTitle=styled.h1`
color: #119872;
margin-top:60px;
padding-left:35px;
align-items:left;
justify-content:left;
position:absolute;
  font-size: 3rem;
  font-weight:900;
  cursor: default;
  animation: opac 1s forwards;
  animation-delay:17s;
  opacity:0;
  @media screen and (max-width: 968px) {
    font-size: 1.3rem;
    margin-top:30px;
    padding-left: 200px;
  }
`
