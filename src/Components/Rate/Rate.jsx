
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
function Rate() {
    const [value, setValue] = useState(5);

    const renderStars = (ratingValue, onClick, readOnly, disabled) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <Button
            key={i}
            variant="link"
            onClick={() => !readOnly && !disabled && onClick(i)}
            style={{ color: i <= ratingValue ? '#ffc107' : '#e4e5e9', cursor: readOnly || disabled ? 'default' : 'pointer' }}
            disabled={disabled}
          >
            <FaStar />
          </Button>
        );
      }
      return stars;
    };
  
    return (
      <Container className="mt-4">
        <Row>
          <Col>
              {renderStars(value, setValue, false, false)}
          </Col>
        </Row>
        
      </Container>
    );
}

export default Rate
