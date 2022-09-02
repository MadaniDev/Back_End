import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, Outlet } from "react-router-dom";
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
          <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Binar Gamehub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className="container">
     <Outlet/>
      </div>
    </div>
  );
}

export default App;
