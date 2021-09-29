import React from 'react';
import {Card, Container} from 'react-bootstrap';

const AppBulletList = props => (
  <Container>
    <Card border="primary">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
      <Card.Text>Lista de bullets</Card.Text>
    </Card>
  </Container>
);

export default AppBulletList;
