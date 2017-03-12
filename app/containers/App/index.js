import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from 'components/Header';
import withProgressBar from 'components/ProgressBar';
import { StickyContainer, Sticky } from 'react-sticky';

const AppWrapper = styled.div`
  max-width: %100;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  height:100vh;
  width:100vw;
  flex-direction: column;
  padding-top: 60px;
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
