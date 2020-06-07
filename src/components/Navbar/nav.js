import React, { Fragment } from "react";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import './nav.css'


  function NavBar() {
  return (
    <Fragment>
      <Navbar collapseOnSelect fixed="top" className="nav-bar" expand="lg">
        <Navbar.Brand id="nav-brand" href="#home">
          La Cocina de los Abuelos
        </Navbar.Brand>
        <Navbar.Toggle id="nav-toggle" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Menu" id="nav-link">
              <NavDropdown.Item id="nav-link" href="#tostadas">
                Tostadas
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-link" href="#quesadillas">
                Quesadillas
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-link" href="flautas">
                Flautas
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-link" href="#enchiladas">
                Enchiladas
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-link" href="#gordiats">
                Gordiats
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-link" href="#sopes">
                Sopes
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-link" href="#milanesa">
                Milanesa
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-link" href="#carnes">
                Carnes
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-link" href="#bebidas">
                {" "}
                Bebidas
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Desayunos" id="nav-link">
              <NavDropdown.Item id="nav-link" href="#jugos">
                Jugos
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-link" href="#chilaquiles">
                Huevos
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-link" href="#torta">
                Torta de la Abuela
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-link" href="#molletes">
                Molletes
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-link" href="#otros">
                Otros
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="nav-link" href="#Res-block">
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

export default NavBar;
