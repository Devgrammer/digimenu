import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/nav";
import Menu from "./components/Menu/menu";
import {Greet, SeeOff }from "./components/Greet/greet";
import {FooterRes, FooterOwn} from "./components/Footer/footer";
import BreakMenu from "./components/Breakfast/break";
import { Container, Row, Col } from "react-bootstrap";
import ChatBot from './chat'

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Greet />
        </Row>
        <Row className="justify-content-center">
          <div id="heading">
            <p id="head-txt">Menu</p>
          </div>
        </Row>
        <Row>
          {/* <ChatBot /> */}
        </Row>
        <Row></Row>
        <Row className="justify-content-center">
          <Col>
            <Menu />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <div id="heading">
            <p id="head-txt">Desayunos</p>
          </div>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <BreakMenu />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <SeeOff />
        </Row>
        <footer>
          <Row className="footer-block justify-content-center ">
            <Col xs={6}>
              <FooterRes />
            </Col>
            <Col xs={6}>
              <FooterOwn />
            </Col>
            <div id="reserved">
              All Right Reserved <br /> La Cocina de los Albuelos © 2020
            </div>
          </Row>
        </footer>
      </Container>
    </>
  );
}

export default App;
