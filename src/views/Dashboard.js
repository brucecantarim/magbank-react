import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons';

import './Dashboard.scss';

const Dashboard = () => (
  <Container className='dashboard py-5'>
    <Row>
      <Col xs={12} lg={4}>
        <Row className='align-items-center mb-5'>
          <Col xs={3}>
            <span className='dashboard__user-avatar'>
              <FontAwesomeIcon icon={faCircle} size='5x' color='#f8f9fa' />
              <FontAwesomeIcon
                className='dashboard__user-icon'
                icon={faUser}
                size='3x'
                color='#7c7d7d'
              />
            </span>
          </Col>
          <Col xs={9}>
            <h4>Bruce Cantarim</h4>
            <p className='text-muted'>ag: 1234 c/c: 4321-5</p>
          </Col>
        </Row>
        <Button
          className='dashboard__button dashboard__button--active text-left'
          variant='link'
          size='lg'
          block
        >
          Minha Conta
        </Button>
        <Button
          className='dashboard__button text-left'
          variant='link'
          size='lg'
          block
        >
          Pagamentos
        </Button>
        <Button
          className='dashboard__button text-left'
          variant='link'
          size='lg'
          block
        >
          Extrato
        </Button>
      </Col>
      <Col xs={12} lg={3} className='mt-lg-5 pt-lg-4'>
        <h3 className='my-5'>Conta Corrente</h3>
        <h6>
          <small>
            <strong>Saldo em conta corrente</strong>
          </small>
        </h6>
        <h4 className='text-success mb-4'>
          <small>R$ </small>3.500<small>,00</small>
        </h4>
        <h6>
          <small>
            <strong>Cheque especial</strong>
          </small>
        </h6>
        <p className='mb-0'>Limite disponível</p>
        <p className='mb-4'>R$ 5.000,00</p>
        <Button variant='secondary'>Ver extrato</Button>
      </Col>
      <Col xs={12} lg={5}></Col>
    </Row>
  </Container>
);

export default Dashboard;
