import React from 'react';
import Catto from './assets/catto.png';

function Contacts() {
  return (
    <div className="form">
      <h1>Contact Me</h1>
      <div className="container1">
        <p>
          <a href="https://www.facebook.com/namora.regie1" target="_blank" rel="noopener noreferrer">
            Facebook - Regie Namora
          </a>
        </p>
        <img src={Catto} alt="Cat icon" className="logo" />
        <p>
          <a href="https://github.com/RegiePogi1" target="_blank" rel="noopener noreferrer">
            Github - RegiePogi1
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contacts;
