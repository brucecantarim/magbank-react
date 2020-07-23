import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  faMobileAlt,
  faMobile,
  faGlobe,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import IconText from './IconText';
import './Institutional.scss';

const Institutional = () => (
  <section className='institutional text-light py-5'>
    <Container>
      <Row>
        <Col xs={12} lg={5} />
        <Col xs={12} lg={7}>
          <h2 className='display-4'>Já nascemos digital</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim.
            Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et
            porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque.
            Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat
            ultrices. Proin purus ante, congue vel arcu ac, porta condimentum
            mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim
            nec diam.
          </p>
          <IconText icon={faMobileAlt} color='#FFF'>
            Sem fila e sem burocracia
          </IconText>
          <IconText icon={faMobile} color='#FFF'>
            Simples e prático
          </IconText>
          <IconText icon={faGlobe} color='#FFF'>
            Abertura de conta 100% online
          </IconText>
          <IconText icon={faShieldAlt} color='#FFF'>
            Transações mais seguras
          </IconText>
          <Button variant='outline-light'>Abra sua conta</Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Institutional;
