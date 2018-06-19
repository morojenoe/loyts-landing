import React, { Component } from 'react';
import PropTypes from 'prop-types';

import navigationItems from './nav-items';
import './vertical-nav-stepper.css';

class VerticalNavigationStepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: undefined,
    };
  }

  onMouseLeave() {
    this.setState({ hover: undefined });
  }

  onMouseEnter(i) {
    this.setState({ hover: i });
  }

  isHover(i) {
    return !this.isActive(i) && i === this.state.hover;
  }

  isActive(i) {
    return i === this.props.item;
  }

  navigationItemClassNames(id) {
    if (this.isActive(id)) {
      return 'navigation-item navigation-item-active';
    } else if (this.isHover(id)) {
      return 'navigation-item navigation-item-hover';
    }
    return 'navigation-item';
  }

  layout(navItem, id) {
    return (
      <div
        className={this.navigationItemClassNames(id)}
        key={navItem.text}
        onMouseEnter={() => this.onMouseEnter(id)}
        onMouseLeave={() => this.onMouseLeave()}
      >
        <div
          className="navigation-link"
          onClick={() => this.props.onClick(id)}
          onKeyDown={() => this.props.onClick(id)}
        >
          <img src={navItem.imgSrc} alt={navItem.text} className="navigation-link-img" />
          <div
            className="navigation-link-text"
            style={{ display: (this.isActive(id) || this.isHover(id) ? 'block' : 'none') }}
          >
            {navItem.text}
          </div>
        </div>
        <div className={id + 1 === navigationItems.length ? '' : 'navigation-link-border'} />
      </div>
    );
  }

  render() {
    return (
      <div className="vertical-navigation-stepper-bar hidden-xs hidden-sm">
        {
          navigationItems.map((item, i) => this.layout(item, i))
        }
      </div>
    );
  }
}

VerticalNavigationStepper.propTypes = {
  item: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VerticalNavigationStepper;
