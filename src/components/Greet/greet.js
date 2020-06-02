import React from 'react'
import './greet.css'

function Greet() {
    return (
      <div id="greet-block">
        <div id='rest-logo'>
          <img src='./img/logo.png' 
           width={94*2}
           height={64*2}
          alt=" " />
        </div>
        <p id="quote1" >Comida de Tradición</p>
        <p id="quote2">Restaurante, comida a domicilio y para llevar </p>
      </div>
    );
}

function SeeOff(){
  return (
    <div id="seeoff-block">
      <p id="quote3">Los esperamos pronto de regreso</p>
      <p id="quote4">¡Gracias por venir!</p>
    </div>
  );
}

export {Greet, SeeOff};
