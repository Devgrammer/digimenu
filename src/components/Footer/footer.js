import React from "react";
import "./footer.css";

function FooterRes() {
  return (
    <div className="Res-block">
      <div id="res-name-block">
        <div id="res-name">
          La Cocina de los Abuelos
          <div>
            <div id="res-description">
              Antojitos mexicanos y comida casera contamos con desayunos y
              comida
            </div>
            <div>
              <hr id="hr-rule" />
            </div>
            <div id="res-address">
              Anillo Vial Fray Junípero Serra 10100, El Refugio, 76246 Santiago
              de Querétaro Querétaro
            </div>
            <a href="tel:+521 442 751 2141" className="fa fa-phone-square" id="res-phone">
              &nbsp; &nbsp;+521 442 751 2141
            </a>
            <div>
              <a href="https://www.facebook.com/cocinadelosabuelosqro/"
                className="fa fa-facebook-square icon">
              </a> &nbsp;
              <a href="https://www.instagram.com/lacocinadelosabuelos/"
                className="fa fa-instagram icon">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterOwn() {
  return (
    <div className="Own-block">
      <div id="customer-query">
        ¿También quieres un menú digital para tu propio restaurante o cafetería?
        No dude en contactarnos en los detalles a continuación.
      </div>
      <a
        href="tel:+521 5533336584"
        className="fa fa-phone-square"
        id="res-phone"
      >
        &nbsp; &nbsp;+521 5533336584
      </a>{" "}
      <br />
      <a
        href="mailto:ventas.digitalizatumenu@gmail.com"
        className="	fa fa-paper-plane"
        id="res-phone"
      >
        &nbsp;ventas.digitalizatumenu@gmail.com
      </a>
      <div>
        <a href="https://www.facebook.com/digitalizatumenu" className="fa fa-facebook-square icon">
        </a>&nbsp;&nbsp;&nbsp;
        <a href="# " className="fa fa-instagram icon"></a>
      </div>
    </div>
  );
}

export { FooterRes, FooterOwn };
