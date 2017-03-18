/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './style.scss';

export default class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <section id="about-container">
        <Helmet
          meta={[
            { name: 'description', content: 'Services page' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ]}
        />

        <div className="about-wrapper">
          <div><FormattedMessage {...messages.content} /></div>
        </div>
      </section>
    );
  }
}
