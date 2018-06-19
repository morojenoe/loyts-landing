import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import BaseGrid from '../landing-section/base-grid';
import GooglePlayBadge from './google-play-badge';
import AppStoreBadge from './app-store-badge';
import RegistrationSection from './registration-section';

import './landing-section.css';

class LandingSection extends Component {
  textLayout() {
    const { title, text } = this.props;
    return (
      <div className="content-text">
        <p className="content-text-title">{title}</p>
        <p className="content-text-subtitle">{text}</p>
      </div>
    );
  }

  imageLayout() {
    const { imageAlt, imageSrc } = this.props;
    return (
      <img
        src={imageSrc}
        alt={imageAlt}
        className="img-responsive center-block img-margin"
      />
    );
  }

  textWithBadgesLayout() {
    return (
      <div>
        <Row>
          <Col sm="12">
            {this.textLayout()}
          </Col>
        </Row>
        <Row className="row-margin-bottom">
          <Col sm="12">
            <div className="mui--pull-left">
              <GooglePlayBadge />
            </div>
            <div className="mui--pull-right">
              <AppStoreBadge />
            </div>
            <div className="mui--clear-fix" />
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    let firstColumn = this.textLayout();
    let secondColumn = this.imageLayout();
    if (this.props.sectionId === 0 || this.props.sectionId + 1 === this.props.numberOfSections) {
      firstColumn = this.textWithBadgesLayout();
      if (this.props.sectionId === 0) {
        secondColumn = (
          <RegistrationSection />
        );
      }
    }
    const sectionStyles = {
      backgroundColor: this.props.color,
    };
    return (
      <div className="landing-section" style={sectionStyles} id={this.props.id}>
        <BaseGrid
          firstColumn={firstColumn}
          secondColumn={secondColumn}
        />
      </div>
    );
  }
}

LandingSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  sectionId: PropTypes.number.isRequired,
  numberOfSections: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default LandingSection;
