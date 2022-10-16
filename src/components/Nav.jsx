import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <Navbar>
      <LinkContainer>
        <NavLink end to='/'>
          Home
        </NavLink>
        <NavLink end to='/2'>
          Ejercicio 2
        </NavLink>
        <NavLink end to='/3'>
          Ejercicio 3
        </NavLink>
        <NavLink end to='/4'>
          Ejercicio 4
        </NavLink>
      </LinkContainer>
    </Navbar>
  );
}

const Navbar = styled.nav`
  margin-top: 20px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  & a {
    font-weight: 400;
    font-size: 20px;
    text-decoration: none;
    padding: 0 31px;
    color: #00000080;
    &:hover {
      color: #4184ff;
    }
  }
  & .active {
    font-weight: 600;
    color: #4184ff;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const LinkContainer = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
