import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavbarElements';

const Navbar = () => {
  return (
    <>
    <Nav>
    <NavbarContainer>
    <NavLogo to='/'>Movies</NavLogo>
    <h1>Movie Test</h1>
    </NavbarContainer>
    </Nav>
    </>
  );
};

export default Navbar