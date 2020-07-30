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
          <h2 className='institutional-title my-5'>Já nascemos digital</h2>
          <p className='mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim.
            Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et
            porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque.
            Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat
            ultrices. Proin purus ante, congue vel arcu ac, porta condimentum
            mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim
            nec diam.
          </p>
          <div className='px-2'>
            <IconText icon={faMobileAlt} color='#FFF' className='mb-2'>
              Sem fila e sem burocracia
            </IconText>
            <IconText icon={faMobile} color='#FFF' className='mb-2'>
              Simples e prático
            </IconText>
            <IconText icon={faGlobe} color='#FFF' className='mb-2'>
              Abertura de conta 100% online
            </IconText>
            <IconText icon={faShieldAlt} color='#FFF' className='mb-2'>
              Transações mais seguras
            </IconText>
          </div>
          <Button variant='outline-light' className='mt-5'>
            Abra sua conta
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Institutional;
