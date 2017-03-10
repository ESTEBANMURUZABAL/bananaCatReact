/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import AboutStyle from './AboutStyle.scss';

export default class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="about-container">
        <Helmet
          title="About Page"
          meta={[
            { name: 'description', content: 'Services page' },
          ]}
        />
        <div className="title">
          <FormattedMessage {...messages.header} />
        </div>
        <div>We are BananaCatCo, a company that makes clean, modern websites and applications
        with the most kickass technology. I focus on User Experience and desiging intuitive, enjoyable
        products. More broadly, I provide Graphic Design, Social Media, Video Editing, Web Design & Development,
         Advertising and many other creative solutions for businesses large & small as well as non-profits and individuals.</div>
      </div>
    );
  }
}
