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
        <p id="quote1" className='gradient-text'>Comida de Tradición</p>
        <p id="quote2">Restaurante, comida a domicilio y para llevar </p>
      </div>
    );
}

export default Greet
