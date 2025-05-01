import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import Search from "../Search/Search";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="container">
        <Navbar expand="md">
          <NavbarBrand href="/" className="navbrand">
            My Blog
          </NavbarBrand>
          <NavbarToggler onClick={toggleHandle} />
          <Collapse navbar isOpen={isOpen}>
            <Nav className="navlist" navbar>
              <NavItem>
                <Link to="/" className="navlink">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/blog" className="navlink">
                  Blog
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="navlink">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" className="navlink">
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/write" className="navlink">
                  Write
                </Link>
              </NavItem>
            </Nav>

            <div>
              <Nav navbar>
                <NavItem>
                  <Link to="/login" className="navlink">
                    Login
                  </Link>
                </NavItem>
              </Nav>
            </div>
            <Search />
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
