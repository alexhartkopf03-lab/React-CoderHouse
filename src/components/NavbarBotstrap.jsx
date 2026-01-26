import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavbarBotstrap = ()=>{
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to={'/'}>
          <img style={{height:'70px'}} src='../logo.png' alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={'/categoria/almacen'}>Almacen</Nav.Link>
            <Nav.Link as={NavLink} to={'/categoria/lacteos'}>Lacteos</Nav.Link>
            <Nav.Link as={NavLink} to={'/categoria/verduleria'}>Verduleria</Nav.Link>
            <Nav.Link as={NavLink} to={'/categoria/ofertas'}>Ofertas</Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBotstrap;


