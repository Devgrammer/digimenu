import React from "react";
import { Card, Accordion, Button, Media, Image } from "react-bootstrap";
import "./break.css";

function BreakMenu() {
  return (
    <div className="bcard-block">
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
                JUGOS
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
                      src="./img/naranja.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Naranja</p>
                      <p id="dish-content">Jugo fresco de Naranja</p>
                      <p id="dish-price"> $20</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/zanahoria.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Zanahoria</p>
                      <p id="dish-content">Jugo fresco de Zanahoria</p>
                      <p id="dish-price"> $20</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/mixto.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Mixto</p>
                      <p id="dish-content">Jugo mixto (naranja y zanahoria)</p>
                      <p id="dish-price"> $20</p>
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
                HUEVOS
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
                      src="./img/huevosestrellados.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Estrellados</p>
                      <p id="dish-content">
                        Huevos estrellados tradicionales de los abuelos
                      </p>
                      <p id="dish-price"> $50</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/huevos-rancheros.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Rancheros</p>
                      <p id="dish-content">
                        Huevos estrellados bañados con salsa roja o verde
                      </p>
                      <p id="dish-price"> $60</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/huevos divorciados.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Divorciados</p>
                      <p id="dish-content">
                        Huevos estrellados bañados con salsa roja y verde verde
                      </p>
                      <p id="dish-price"> $60</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/huevos poblanos.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Poblanos</p>
                      <p id="dish-content">Sincronizada con Mole</p>
                      <p id="dish-price"> $70</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/huevos-revueltos.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Revueltos</p>
                      <p id="dish-content">Jamon, Chorizo, Champiñon, Tocino</p>
                      <p id="dish-price"> $70</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Omelette.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Omelette</p>
                      <p id="dish-content">Jamon, Chorizo, Champiñon, Tocino</p>
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
                eventKey="3"
                id="card-heading"
              >
                CHILAQUILES
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
                      src="./img/chilaquiles sencillos.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Sencillos</p>
                      <p id="dish-content">
                        Los tradicionales chilaquiles de los abuelos
                      </p>
                      <p id="dish-price"> $60</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/chilaquiles pollo-o-bistec.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Pollo o Bisteck</p>
                      <p id="dish-content">
                        Los tradicionales chilaquiles de los abuelos acompañados
                        de Pollo o Bistec
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
                      src="./img/chilaquiles- cecina.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Cecina</p>
                      <p id="dish-content">
                        Los tradicionales chilaquiles de los abuelos acompañados
                        de Cecina.
                      </p>
                      <p id="dish-price"> $90</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/chilaquiles tecolotes.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Tecolotes</p>
                      <p id="dish-content">
                        Los tradicionales chilaquiles de los abuelos acompañados
                        de Tecolotes
                      </p>
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
                eventKey="4"
                id="card-heading"
              >
                "TORTA DE LA ABUELA"
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
                      <p id="dish-heading">Torta de la Abuela</p>
                      <p id="dish-content">
                        Torta de chilaquiles con milanesa de pollo
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
                MOLLETES
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/molletes sencillos.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Sencillos</p>
                      <p id="dish-content">Molletes sencillos de los abuelos</p>
                      <p id="dish-price"> $55</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/molletes - jamon tocino.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Jamon, Tocino o Chorizo</p>
                      <p id="dish-content">Acompaña tus molletes al gusto</p>
                      <p id="dish-price"> $70</p>
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
                OTROS
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
                      src="./img/hotcakes.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Hot Cakes</p>
                      <p id="dish-content">Hot Cakes sencillos de los abuelos</p>
                      <p id="dish-price"> $50</p>
                    </Media.Body>
                  </Media>
                  <hr />
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
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/descarga.jpeg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Café o Té</p>
                      <p id="dish-content">Cafe americano o té de manzanilla</p>
                      <p id="dish-price"> $25</p>
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

export default BreakMenu;
