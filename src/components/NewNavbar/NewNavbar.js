import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Route } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./NewNavbar.css";
import { useLocation } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../utils/firebase";

export default function NewNavbar() {
  const location = useLocation();
  const auth = getAuth(app);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <Route>
      <div>
        <Navbar bg="dark" expand="lg" variant={"dark"}>
          <Container>
            <Navbar.Brand>TodoApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                {/* <Nav.Link as={Link} to={"/about/jay/makwana"}> */}
                <Nav.Link as={Link} to={"/about"}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>
                  Contact
                </Nav.Link>
              </Nav>

              {location.pathname === "/todo" ? (
                <Button onClick={handleLogout} variant="outline-success mx-2">
                  Logout
                </Button>
              ) : (
                <Form className="d-flex ">
                  <Link to={"/login"}>
                    <Button variant="outline-success mx-2">Login</Button>
                  </Link>
                  <Link to={"/signup2"}>
                    <Button variant="outline-success mx-2 ">Signup</Button>
                  </Link>
                </Form>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Route>
  );
}
