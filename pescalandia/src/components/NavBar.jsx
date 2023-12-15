import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";


const categorias = productos.map((item) => item.category);
const uniqueCategories = new Set(categorias);

export const NavBar = () => {
    return ( 
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <NavLink to="/">
        <Navbar.Brand>Pescalandia</Navbar.Brand>
        </NavLink>
      <Nav className="me-auto">
        {[...uniqueCategories].map(item => <Nav.Link as={NavLink} key={item} to={`/category/${item}`}>{item}</Nav.Link>)}
      </Nav>
      <CartWidget/>
    </Container>
  </Navbar>
    
           
    );
};