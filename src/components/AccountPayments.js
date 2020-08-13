import React from 'react';
import { Col, Button, Tabs, Tab, Form } from 'react-bootstrap';

const AccountPayments = () => (
  <Col xs={12} lg={8} className='mt-lg-5 pt-lg-5'>
    <h3 className='mt-4'>Pagamentos</h3>
    <Tabs className='mt-5 pt-lg-2' defaultActiveKey='boleto'>
      <Tab eventKey='boleto' title='Boleto'>
        <Form>
          <Form.Group controlId='formBarCode' className='my-5'>
            <Form.Label>Código de barras</Form.Label>
            <Form.Control
              type='number'
              placeholder='Insira o código de barras'
            />
          </Form.Group>
          <Form.Group controlId='formPaymentType' className='mb-5'>
            <Form.Label>Forma de Pagamento</Form.Label>
            <div className='d-flex'>
              <Form.Check
                type='radio'
                id='debit'
                label='Débito em Conta Corrente'
                name='paymentType'
              />
              <Form.Check
                type='radio'
                id='credit'
                className='ml-4'
                label='Cartão de Crédito'
                name='paymentType'
              />
            </div>
          </Form.Group>
          <Button variant='success'>Continuar</Button>
        </Form>
      </Tab>
      <Tab eventKey='transfer' title='Transferência'></Tab>
    </Tabs>
  </Col>
);

export default AccountPayments;
