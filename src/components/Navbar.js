import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Navbar,
  Nav,
  ButtonGroup,
  Button,
  NavDropdown,
} from 'react-bootstrap';
import './Navbar.scss';
import logo from '../assets/logo.svg';

const Navigation = ({ handleCreateAcc }) => (
  <Navbar variant='dark' expand='lg'>
    <Container>
      <Navbar.Brand href='#home'>
        <Link to='/'>
          <img
            src={logo}
            height='30'
            className='d-inline-block align-top'
            alt='Magbank logo'
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#cartao'>Cartão</Nav.Link>
          <Nav.Link href='#quemsomos'>Quem Somos</Nav.Link>
          <Nav.Link href='#faq'>FAQ</Nav.Link>
        </Nav>
        <ButtonGroup aria-label='Basic example'>
          <Button variant='outline-light'>
            <NavDropdown title='Acessar minha conta' id='basic-nav-dropdown'>
              <NavDropdown.Item>
                <Link to='/login'>Pessoa Física</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Pessoa Jurídica</NavDropdown.Item>
            </NavDropdown>
          </Button>
          <Button variant='outline-light' onClick={handleCreateAcc}>
            abra sua conta
          </Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
