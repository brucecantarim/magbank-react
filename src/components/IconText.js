import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconText = ({
  icon,
  size = 1,
  color = '#000',
  className = '',
  children,
}) => (
  <Row>
    <Col xs={size} className='d-flex justify-content-center'>
      <FontAwesomeIcon icon={icon} size={`${size}x`} color={color} />
    </Col>
    <Col xs={12 - size} className={className}>
      {children}
    </Col>
  </Row>
);

export default IconText;
