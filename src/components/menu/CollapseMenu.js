import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
                <li><a href="/" onClick={props.handleNavbar}>Home</a></li>
                <li><a href="/about" onClick={props.handleNavbar}>About</a></li>
                <li><a href="/skills" onClick={props.handleNavbar}>Skills</a></li>
                <li><a href="/projects" onClick={props.handleNavbar}>Projects</a></li>
                <li><a href="/contact" onClick={props.handleNavbar}>Contact</a></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #000;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  @media (max-width:768px) {
    top: 5.5rem;
  }
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  
  & li {
    transition: all 300ms linear 0s;
  }
  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;