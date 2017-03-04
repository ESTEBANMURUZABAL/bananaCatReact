/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';
import { StickyContainer, Sticky } from 'react-sticky';

const AppWrapper = styled.div`
  max-width: %100;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  padding-top: 60px;
  background-color: #2A2C39;
`;


export function App(props) {
  return (
    <div>
    <StickyContainer>

        <Sticky>
          <Header />
        </Sticky>

      </StickyContainer>

      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application' },
          ]}
        />

        {React.Children.toArray(props.children)}
      </AppWrapper>
      </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);