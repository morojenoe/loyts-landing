import React from 'react';
import PropTypes from 'prop-types';
import arrowDown from './images/arrow-down.png';
import arrowDownFirstSlide from './images/arrow-down-first-slide.svg';
import './link-section.css';

function LinkSection(props) {
  const { firstSlide, onClick } = props;
  return (
    <div
      className="link-next-slide"
      onClick={() => onClick()}
      onKeyDown={() => onClick()}
    >
      <img
        src={firstSlide ? arrowDownFirstSlide : arrowDown}
        alt="arrow down"
        width={50}
        style={{ fill: 'white' }}
      />
    </div>
  );
}

LinkSection.propTypes = {
  firstSlide: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LinkSection;
