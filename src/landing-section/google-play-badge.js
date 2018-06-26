import React from 'react';
import googleplay from '../images/google-play-store-badge-2.png';

function GooglePlayBadge() {
  return (
    <a href="/">
      <img alt="Get it on Google Play" className="download-badge" src={googleplay} />
    </a>
  );
}

export default GooglePlayBadge;
