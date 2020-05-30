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
                      src="./img/Birria.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Naranja</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $0</p>
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
                      <p id="dish-heading">Zanahoria</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                      src="./img/pozole.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Mixto</p>
                      <p id="dish-content">Maczia, Surtida o Pollo</p>
                      <p id="dish-price"> $0</p>
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
                      src="./img/pata.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Estrellados</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                      src="./img/tingadepollo.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Rancheros</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                      src="./img/tingaderes.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Divorciados</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                      <p id="dish-heading">Poblanos</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $70</p>
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
                      <p id="dish-heading">(Sincronizada C/Mole)</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $0</p>
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
                      <p id="dish-heading">Revueltos</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $70</p>
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
                      <p id="dish-heading">
                        (Jamón, Chorizo, Champiñon, Tocino)
                      </p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                      <p id="dish-heading">Omelette</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                      src="./img/chicharron.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Sencillos</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                      src="./img/queso.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Pollo</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                      src="./img/quesadilla champiñones.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Bisteck</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                      src="./img/tingadepollo.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Cecina</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                      src="./img/tingaderes.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Tecolotes</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                      <p id="dish-heading">
                        Torta de chilaquiles con milanesa de pollo
                      </p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                      src="./img/chicharron.jfif"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Sencillos</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $55</p>
                    </Media.Body>
                  </Media>
                  <hr />
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
                      <p id="dish-heading">Jamón</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $70</p>
                    </Media.Body>
                  </Media>
                  <hr />
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
                      <p id="dish-heading">Tocino</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $70</p>
                    </Media.Body>
                  </Media>
                  <hr />
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
                      <p id="dish-heading">Chorizo</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
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
                      src="./img/sopes.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Hot Cakes</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                      src="./img/sopes.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Refresco</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
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
                      src="./img/sopes.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Café</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $25</p>
                    </Media.Body>
                  </Media>
                  <hr />
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
                      <p id="dish-heading">Te</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
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
