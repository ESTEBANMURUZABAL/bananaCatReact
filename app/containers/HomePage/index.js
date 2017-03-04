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
import Section from './Section';
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

  }

  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
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
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };


    const text = {...messages.startProjectHeader};
    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'Banana Cat Ideas & Solutions' },
          ]}
        />
        <div>
          <Section>
            <FormattedMessage {...messages.startProjectHeader} />
            <TextSwitcher name={this.state.currentWord} />
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
