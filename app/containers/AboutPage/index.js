/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './AboutStyle.scss';

export default class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="about-container">
        <Helmet
          meta={[
            { name: 'description', content: 'Services page' },
          ]}
        />
        <div className="title-about">
          <FormattedMessage {...messages.header} />
        </div>
        <div><FormattedMessage {...messages.content} /></div>
      </div>
    );
  }
}
