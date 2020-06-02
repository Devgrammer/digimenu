import React from 'react'
import './footer.css'

function FooterRes() {
    return (
      <div className="Res-block">
        <div id="res-name-block">
          <p id="res-name">La Cocina de los Abuelos</p>
          <p id="res-description">
            Antojitos mexicanos y comida casera contamos con desayunos y comida
          </p>
          <hr id="hr-rule"/>
          <ul type="none">
            <li>
              <p id="res-address">
                Anillo Vial Fray Junípero Serra 10100, El Refugio, 76246
                Santiago de Querétaro Querétaro
              </p>
            </li>
            <li>
              <p id="res-phone">
                Llamanos:
                <a href="tel:+521 442 751 2141"> +521 442 751 2141</a>
              </p>
            </li>
            <li>
              <p id="res-fb">
                <a href="https://www.facebook.com/cocinadelosabuelosqro/ ">
                  Danos like en facebook
                </a>
              </p>
            </li>
            <li>
              <p id="res-insta">
                <a href="https://www.instagram.com/lacocinadelosabuelos/">
                 Regala tus corazones en nuestro Instagram
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
}
function FooterOwn() {
    return (
      <div className="Own-block">
        <ul type="none">
          <li>
            <p id="customer-query">
              ¿También quieres un menú digital para tu propio restaurante o
              cafetería? No dude en contactarnos en los detalles a continuación.
            </p>
          </li>
          <li>
            <p id="res-phone">
              <a href="tel:+521 5533336584"> +521 5533336584</a>
            </p>
          </li>
          <li>
            <p id="res-phone">
              <a href="mailto:ventas.digitalizatumenu@gmail.com">
                ventas.digitalizatumenu@gmail.com
              </a>
            </p>
          </li>
        </ul>
        <p id="reserved">
          All Right Reserved <br /> La Cocina de los Albuelos 2020
        </p>
      </div>
    );
}

export  {FooterRes, FooterOwn}
