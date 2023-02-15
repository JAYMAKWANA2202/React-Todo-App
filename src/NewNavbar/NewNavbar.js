import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Route, Switch } from "react-router-dom";
import About from "../../component/About";
import Contact from "../../component/Contact";
import Home from "../../component/Home";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Login from "../../Login/Login";
import "./NewNavbar.css";
import Signup2 from "../../Signup/Signup2";
import Welcome from "../../Welcome/Welcome";

export default function NewNavbar() {
  return (
    <Route>
      <div>
        <Navbar bg="dark" expand="lg" variant={"dark"}>
          <Container>
            <Navbar.Brand as={Link} to={"/welcome"}>
              React-Bootstrap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/Home"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>
                  Contact
                </Nav.Link>
              </Nav>
              <Form className="d-flex ">
                <Link to={"/login"}>
                  <Button variant="outline-success mx-2">Login</Button>
                </Link>
              </Form>
              <Form className="d-flex">
                <Link to={"/signup2"}>
                  <Button variant="outline-success mx-2 ">Signup</Button>
                </Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Signup2">
            <Signup2 />
          </Route>
        </Switch>
      </div>
    </Route>
  );
}
