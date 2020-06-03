import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, img  } from 'react-bootstrap';

const NavBar = () => {
    return (
       <Navbar bg="light" expand="lg" className="navBar">
        <Navbar.Brand href="#home"><img className="logo" src="https://cdn0.iconfinder.com/data/icons/education-148/595/SVG-EDUCATION-11-512.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
           
            </Nav>
            {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          
            </Form> */}
        </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;