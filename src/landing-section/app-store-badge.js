import React from 'react';
import appstore from '../images/appstore.svg';

function AppStoreBadge() {
  return (
    <a href="/">
      <img alt="Get it on AppStore" className="download-badge" src={appstore} />
    </a>
  );
}

export default AppStoreBadge;
