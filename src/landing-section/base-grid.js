import React from 'react';
import PropTypes from 'prop-types';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import './base-grid.css';

function BaseGrid(props) {
  const { firstColumn, secondColumn } = props;
  return (
    <Container>
      <Row className="row-margin-top">
        <Col xs-offset="1" xs="10" md-offset="2" md="8" lg-offset="2" lg="4">
          {firstColumn}
        </Col>
        <Col xs-offset="1" xs="10" md-offset="2" md="8" lg-offset="0" lg="6">
          {secondColumn}
        </Col>
      </Row>
    </Container>
  );
}

BaseGrid.propTypes = {
  firstColumn: PropTypes.object.isRequired,
  secondColumn: PropTypes.object.isRequired,
};

export default BaseGrid;
