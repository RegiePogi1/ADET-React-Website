import React from 'react';
import Catto from './assets/catto.png';

function Contacts() {
  return (
    <div class="form">
      <h1>Contact Me</h1>
      <div class="container1">
      <a href="https://www.facebook.com/namora.regie1">Facebook - Regie Namora</a> <img src={Catto} class="logo"></img><br></br>
      <a href="https://github.com/RegiePogi1">Github - RegiePogi1 <img src='assets/catto.png' class="logo"></img> </a>
      </div>
    </div>
  );
}

export default Contacts;
