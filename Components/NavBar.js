import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function NavBar() {
  return (
    <div>
      <Navbar
        expand="lg"
        variant="dark"
        fixed="top"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Navbar.Brand href="#Home" style={{ color: "white" }}>
          DevMiygos Studio
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ color: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#Home" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" style={{ color: "white" }}>
              About Us
            </Nav.Link>
            <Nav.Link href="#subscribe" style={{ color: "white" }}>
              Contact Us
            </Nav.Link>
            <Nav.Link href="#subscribe" style={{ color: "white" }}>
              Subscribe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
