/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';

export default class ContactPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div style={container}>
        <Helmet
          title="Contact Page"
          meta={[
            { name: 'description', content: 'Services page' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

      </div>
    );
  }
}

const container = {
  height: 740
};
