import React from "react";
import { Card, Accordion, Button, Media, Image } from "react-bootstrap";
import "./menu.css";

function Menu() {
  return (
    <div className="card-block">
      <div>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="1"
                id="card-heading"
              >
                CALDOS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Birria.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Birria</p>
                      <p id="dish-content">
                        Birria para adentrarnos en la cocina tradicional de
                        Jalisco
                      </p>
                      <p id="dish-price"> $80</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Pancita.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Pancita</p>
                      <p id="dish-content">
                        Nuestro tradicional Pancita de los abuelos
                      </p>
                      <p id="dish-price"> $80</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/pozole.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Pozole</p>
                      <p id="dish-content">
                        Delicioso Pozole de Maciza, Surtida o Pollo
                      </p>
                      <p id="dish-price"> $80</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="2"
                id="card-heading"
              >
                TOSTADAS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/pata.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Pata</p>
                      <p id="dish-content">Tostadas de Pata de los Abuelos</p>
                      <p id="dish-price"> $28</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/tingadepollo.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Tinga de Pollo</p>
                      <p id="dish-content">
                        Tostadas de Tinga de Pollo de los Abuelos
                      </p>
                      <p id="dish-price"> $28</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/tingaderes.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Tinga de Res</p>
                      <p id="dish-content">
                        Tostadas de Tinga de Res de los Abuelos
                      </p>
                      <p id="dish-price"> $28</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="3"
                id="card-heading"
              >
                QUESADILLAS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/chicharron.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Chicharron Prensado</p>
                      <p id="dish-content">
                        Quesadillas de chicharrón prensado
                      </p>
                      <p id="dish-price"> $28</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/queso.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Queso</p>
                      <p id="dish-content">Quesadillas de queso</p>
                      <p id="dish-price"> $28</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/quesadilla champiñones.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Champinones</p>
                      <p id="dish-content">Quesadillas de champiñones</p>
                      <p id="dish-price"> $28</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/tingadepollo.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Tinga de Pollo</p>
                      <p id="dish-content">Quesadillas de tinga de pollo</p>
                      <p id="dish-price"> $28</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/tingaderes.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Tinga de Res</p>
                      <p id="dish-content">Quesadillas de tinga de res</p>
                      <p id="dish-price"> $28</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/quesadilla-papasconchorizo.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Papas con Chorizo</p>
                      <p id="dish-content">Quesadillas de tinga de pollo</p>
                      <p id="dish-price"> $28</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/queso.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Con Queso Extra</p>
                      <p id="dish-content">
                        Nuestras quesadillas son estilo CDMX agrega queso al
                        gusto
                      </p>
                      <p id="dish-price"> $5</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="4"
                id="card-heading"
              >
                FLAUTAS 4 PZAS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/flautas.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Pollo</p>
                      <p id="dish-content">Orden de 4 flautas de pollo</p>
                      <p id="dish-price"> $75</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/flautasderes.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Res</p>
                      <p id="dish-content">Orden de 4 flautas de res</p>
                      <p id="dish-price"> $75</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="5"
                id="card-heading"
              >
                ENCHILADAS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/enchiladasverdes.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Verdes</p>
                      <p id="dish-content">
                        Tradicionales enchiladas verdes de los abuelos
                      </p>
                      <p id="dish-price"> $80</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/enchiladasrojas.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Rojas</p>
                      <p id="dish-content">
                        Tradicionales enchiladas rojas de los abuelos
                      </p>
                      <p id="dish-price"> $80</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/enchiladasdemole.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Mole</p>
                      <p id="dish-content">
                        Tradicionales enchiladas de mole de los abuelos
                      </p>
                      <p id="dish-price"> $90</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="6"
                id="card-heading"
              >
                GORDITAS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body >
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/chicharron.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Chicharron</p>
                      <p id="dish-content">
                        Nuestras favoritas Gorditas de Chicharrón
                      </p>
                      <p id="dish-price"> $28</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="7"
                id="card-heading"
              >
                SOPES
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/sopes.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Friijol, Crema y Queso</p>
                      <p id="dish-content">Fabulosos Sopes Sencillos</p>
                      <p id="dish-price"> $28</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="8"
                id="card-heading"
              >
                MILANESA
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="8">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/milanesa.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Pollo</p>
                      <p id="dish-content">Milanesa empanizada de Pollo</p>
                      <p id="dish-price"> $80</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/milanesaderes.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Res</p>
                      <p id="dish-content">Milanesa empanizada de Res</p>
                      <p id="dish-price"> $80</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="9"
                id="card-heading"
              >
                CARNES
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="9">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/cecina.jpeg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Cecina</p>
                      <p id="dish-content">
                        Deliciosa Cecina Clásica de los abuelos acompañada de
                        papas fritas o ensalada
                      </p>
                      <p id="dish-price"> $100</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/carnes.jpeg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Arrachera</p>
                      <p id="dish-content">
                        Deliciosa Arrachera acompañada de papas fritas o
                        ensalada
                      </p>
                      <p id="dish-price"> $100</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="11"
                id="card-heading"
              >
                BEBIDAS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="11">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/refresco.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Refresco</p>
                      <p id="dish-content">
                        Coca, Coca Light, Sin Azucar, Sidral, Sprite, Fanta,
                        Fresca y Ciel
                      </p>
                      <p id="dish-price"> $20</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

export default Menu;
