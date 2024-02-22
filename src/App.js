import * as React from "react";
//import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
//import Navbar from "react-bootstarp/Navbar";
import Navbar from 'react-bootstrap/Navbar';
//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import "bootstrap/dist/css/bootstrap.css";
import Nav from 'react-bootstrap/Nav';
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Contact from "./Contact";
// import Api from "./Api";
import Button from 'react-bootstrap/Button';


import './App.css';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Navbar bg="black" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="home"></Navbar.Brand>
            <Nav className="me-auto">
              <Button as={Link} to={"/home"} variant="link" className="text-decoration-none me-3" style={{ backgroundColor: 'black', color: 'white', border: '1px solid white' }}>Home</Button>
              <Button as={Link} to={"/about"} variant="link" className="text-decoration-none me-3" style={{ backgroundColor: 'black', color: 'white', border: '1px solid white' }}>About</Button>
              <Button as={Link} to={"/education"} variant="link" className="text-decoration-none me-3" style={{ backgroundColor: 'black', color: 'white', border: '1px solid white' }}>Education</Button>
              <Button as={Link} to={"/contact"} variant="link" className="text-decoration-none" style={{ backgroundColor: 'black', color: 'white', border: '1px solid white' }}>Contact</Button>
              {/* <Button as={Link} to={"/api"} variant="link" className="text-decoration-none" style={{ backgroundColor: 'black', color: 'white', border: '1px solid white' }}>Api</Button> */}
            </Nav>
          </Container>
        </Navbar>
        <Container className="mt-5">
          <Row>
            <Col md={12}>
              <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/contact" element={<Contact/>}/>
                {/* <Route path="/api" element={<Api/>}/> */}
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
      <div>

     
      </div>
    </div> 
  );
}


export default App;

