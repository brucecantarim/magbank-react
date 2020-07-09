import React from 'react';
import { Container } from 'react-bootstrap';

// prop = {
//     title: 'Bem vindo ao Magbank!',
//     subtitle: 'Sinta-se em casa! O seu dinheiro está seguro aqui.'
// }

// prop.title
// prop.subtitle

const H1 = ({ title = 'Olá React', subtitle = 'Olá de novo!' }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </Container>
  );
};

export default H1;
