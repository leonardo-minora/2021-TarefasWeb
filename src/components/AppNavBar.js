import React from 'react';
import {Container, Navbar} from 'react-bootstrap';

const AppNavBar = props => (
  <Container>
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#">{props.title}</Navbar.Brand>
      </Container>
    </Navbar>
  </Container>
);

export default AppNavBar;
