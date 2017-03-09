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

import styled from 'styled-components';
import Tab from './Tab';

export default class ServicesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (
      <Container>
        <Helmet
          title="Services Page"
          meta={[{ name: 'description', content: 'Services page' },]}/>

          <Tab/>
      </Container>
    );
  }
}

const Container = styled.div`
  text-align: center;
  display: flex;
  width:100%;
  height: 100%;
 flex-direction: column;
`;
