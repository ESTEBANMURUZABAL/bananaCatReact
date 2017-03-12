/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import messages from './messages';
import styled from 'styled-components';
import { Link } from 'react-router';

import TextSwitcher from 'components/TextSwitcher';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)

    this.state = {
      words: [
        '\xa0social content',
        '\xa0blogs & themes',
        '\xa0eCommerce sites',
        '\xa0guides & tutorials',
        '\xa0product concepts',
        '\xa0logos & branding assets',
        '\xa0design mockups',
        '\xa0social media strategies',
        '\xa0original content',
        '\xa0real shit happen'
      ],
      currentWord: '\xa0websites',
      i: 0,
    }
  }

  changeWord() {
    let wordsLenght = this.state.words.length;
      if (this.state.i <= wordsLenght) {
          this.setState({
            currentWord: this.state.words[this.state.i]
          })
          this.state.i == wordsLenght ? this.state.i = 1 : this.state.i++;
      }
  }

  componentDidMount() {
      this.timerID = setInterval(
      () => this.changeWord(),
      2000
    );
  }

  componentWillUnmount () {
       clearInterval(this.timerID);
  }

  render() {
    let changeWord = this.state.currentWord || '';
    const text = {...messages.startProjectHeader};
    return (
          <Container>
            <Helmet
              title="Home Page"
              meta={[
                { name: 'description', content: 'Banana Cat Ideas & Solutions' },
              ]}
            />
          <TitleLink to="/services">
            <FormattedMessage {...messages.startProjectHeader} />
            <TextSwitcher name={changeWord} />
          </TitleLink>
        </Container>
    );
  }
}

const TitleLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Container = styled.div`
text-align: center;
height:100%;
display: flex;
justify-content: center;
align-items: center;
flex: 1;
background-color: #2A2C39;
  color: #fafafa;
  width:100%;

    text-shadow: -2px 1px rgba(0, 0, 0, 0.1);
  font-family: Montserrat, Helvetica, Times, serif;
  	letter-spacing: -.45rem;
  	font-size: 6.853em;
    font-weight: 900;
    box-sizing: border-box;
`;
