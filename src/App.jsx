// src/App.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import bg from './assets/bg.jpg';
  
import Home from "./home";
import About from "./about";
import Education from "./education";
import Hobbies from "./hobbies";
import Contacts from "./contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg={bg} alt="Background">
          <Container>
            <h1 class="title">My Website :D</h1>
            <Nav className="me-auto" class="nav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/education">Education</Nav.Link>
              <Nav.Link href="/hobbies">Hobbies</Nav.Link>
              <Nav.Link href="/contacts">Contacts</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className="mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
