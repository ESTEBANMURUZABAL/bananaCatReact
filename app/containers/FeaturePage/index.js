import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import './index.scss';

export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="feature-container">
        <Helmet
          meta={[
            { name: 'description', content: 'Feature page of React.js Boilerplate application' },
          ]}

        />
        <h1><FormattedMessage {...messages.header} /></h1>
      
      </div>
    );
  }
}
