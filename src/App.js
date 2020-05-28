import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/nav";
import Menu from "./components/Menu/menu";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <NavBar />
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Menu />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
