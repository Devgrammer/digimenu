import React, { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import './nav.css'


  function NavBar() {
  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        fixed="top"
        className="nav-bar"
        expand="lg"
      >
        <Navbar.Brand id="nav-brand" href="#home">
          LA COCINA DE LOS ABUELOS
        </Navbar.Brand>
        <Navbar.Toggle id="nav-toggle" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link id="nav-link" href="#caldos">
              Caldos
            </Nav.Link>
            <Nav.Link id="nav-link" href="#tostadas">
              Tostadas
            </Nav.Link>
            <Nav.Link id="nav-link" href="#quesadillas">
              Quesadillas
            </Nav.Link>
            <Nav.Link id="nav-link" href="#flautas">
              Flautas
            </Nav.Link>
            <Nav.Link id="nav-link" href="#enchiladas">
              Enchiladas
            </Nav.Link>
            <Nav.Link id="nav-link" href="#gordiats">
              Gordiats
            </Nav.Link>
            <Nav.Link id="nav-link" href="#sopes">
              Sopes
            </Nav.Link>
            <Nav.Link id="nav-link" href="#milanesa">
              Milanesa
            </Nav.Link>
            <Nav.Link id="nav-link" href="#carnes">
              Carnes
            </Nav.Link>
            <Nav.Link id="nav-link" href="#bebidas">
              Bebidas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

export default NavBar;
