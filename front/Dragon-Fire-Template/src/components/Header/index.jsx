import React, { useState } from 'react';
import './styles.css';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
} from 'reactstrap';

import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Navbar className="background-Header container-nav" light expand="md">
      <div className="container ">
        <NavbarBrand tag={Link} to="/">
          {' '}
          <h3 className="text-light">Minhas Séries</h3>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink className="text-light" href="/generos">
                {' '}
                Gêneros
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" href="/series">
                {' '}
                Séries
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
