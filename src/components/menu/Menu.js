import React from 'react';
import './Menu.scss';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

        const Navbar = (props) => {
            const barAnimation = useSpring({
              from: { transform: 'translate3d(0, -10rem, 0)' },
              transform: 'translate3d(0, 0, 0)',
            });
          
            const linkAnimation = useSpring({
              from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
              to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
              delay: 800,
              config: config.wobbly,
            });
          
        return (
            <>
            <NavBar style={barAnimation}>
                <FlexContainer>
                    <NavLinks style={linkAnimation}>
                        <nav>
                            <ul className="menu">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/skills">Skills</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </NavLinks>
                    <BurgerWrapper>
                        <BurgerMenu
                        navbarState={props.navbarState} 
                        handleNavbar={props.handleNavbar}
                        />
                    </BurgerWrapper>
                </FlexContainer>
            </NavBar>
            <CollapseMenu 
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
            </>
        )
    }

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0rem;
  left: 0;
  margin-left: 5rem;
  z-index: 1;
  font-size: 1.4rem;
  @media (max-width: 768px) {
    top: 0;
  }
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
  margin-top: 2rem;
  & p {
    font-family: 'Open Sans';
    font-size: 20px;
    color: #868797;
    font-weight: 400;
    margin-top: 0rem;
    margin-right: 13rem;
  }
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  
  & button {
    color: #868797;
    font-weight: 400;
    font-size: 20px;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    border: none;
    background-color:transparent;
    &:hover {
      color: #0F1018;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  & img {
    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    }
  }
  & p {
    color: transparent;
    @media (max-width: 768px) {
      font-size: 25px;
      font-weight: 800;
      margin-left: 12rem; 
      color: #868797; 
    }
  }

`;
 
const BurgerWrapper = styled.div`
  margin: auto 0;
  @media (min-width: 769px) {
    display: none;
  }
`;    


