import React, { Component } from 'react';
import googleplay from '../images/google-play-store-badge-2.png';

class GooglePlayBadge extends Component {
  componentDidMount() {
    this.badge.focus();
  }

  render() {
    return (
      <a href="/" ref={(badge) => { this.badge = badge; }}>
        <img alt="Get it on Google Play" className="download-badge" src={googleplay} />
      </a>
    );
  }
}

export default GooglePlayBadge;
