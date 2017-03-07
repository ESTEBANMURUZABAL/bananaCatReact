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
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import Form from './Form';
import AtPrefix from './AtPrefix';
import Input from './Input';
import Container from './Container';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';

import TextSwitcher from 'components/TextSwitcher';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)

    this.state = {
      words: [
        '\xa0dank memes',
        '\xa0design mockups',
        '\xa0social content',
        '\xa0blogs & themes',
        '\xa0eCommerce sites',
        '\xa0Open Source Software',
        '\xa0social media strategies',
        '\xa0Photoshops of stuff',
        '\xa0infographics & charts',
        '\xa0guides & tutorials',
        '\xa0product concepts',
        '\xa0logos & branding assets',
        '\xa0original content',
        '\xa0real shit happen'
      ],
      currentWord: '\xa0websites',
      i: 0,
    }
    this.changeWord();
  }

  changeWord() {
      let wordsLenght = this.state.words.length;
      setInterval(()=>{
      if (this.state.i <= wordsLenght) {
          this.setState({
            currentWord: this.state.words[this.state.i]
          })
          this.state.i == wordsLenght ? this.state.i = 1 : this.state.i++;
      }
    }, 2000)
  }

  render() {

    const text = {...messages.startProjectHeader};
    return (
          <Container>
            <Helmet
              title="Home Page"
              meta={[
                { name: 'description', content: 'Banana Cat Ideas & Solutions' },
              ]}
            />

          <FormattedMessage {...messages.startProjectHeader} />
          <TextSwitcher name={this.state.currentWord} />
        </Container>
    );
  }
}


export function mapDispatchToProps(dispatch) {
  return {
  };
}

const mapStateToProps = createStructuredSelector({

});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
