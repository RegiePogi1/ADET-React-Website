import React from 'react';
import Regie from './assets/Regie.jpg';

function About() {
  return (
    <div className="form2">
      <h1>About</h1>
      <img src={Regie} alt="Regie" className="logo1" />
      <p>I'm Regie Namora. I'm the creator of this Website.</p>
      <p>
        This Website is my Performance Task #9 for <strong>Application Development</strong>.
      </p>
      <p>
        I'm currently studying at Naga College Foundation, pursuing a course in Computer Science.
      </p>
      <p>My goal is to become a <strong>Programmer</strong>.</p>
    </div>
  );
}

export default About;
