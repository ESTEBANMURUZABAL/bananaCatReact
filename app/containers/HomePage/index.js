/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import styled from 'styled-components';
import TextSwitcher from 'components/TextSwitcher';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import Helmet from 'react-helmet';
import messages from './messages';
import './styles.scss';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      words: [
        '\xa0social content',
        '\xa0mobile applications',
        '\xa0social media strategies',
        '\xa0eCommerce sites',
        '\xa0guides & tutorials',
        '\xa0product concepts',
        '\xa0logos & branding assets',
        '\xa0design mockups',
        '\xa0original content',
        '\xa0real shit happen',
      ],
      currentWord: '\xa0websites',
      i: 0,
    }
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.changeWord(),
      2000
    );
  }

  componentWillUnmount () {
    clearInterval(this.timerID);
  }

  changeWord() {
    let wordsLenght = this.state.words.length;
      if (this.state.i <= wordsLenght) {
        this.setState({
          currentWord: this.state.words[this.state.i]
        })
        this.state.i === wordsLenght ? this.state.i = 0 : this.state.i++;
      }
  }

  render() {
    const changeWord = this.state.currentWord || '';

    return (
      <div className="home-container">
        <Helmet
          meta={[
            { name: 'description', content: 'Banana Cat Ideas & Solutions' },
          ]}
        />
        <TitleLink to="/services">
          <FormattedMessage {...messages.word0} />
          <TextSwitcher name={changeWord} />
        </TitleLink>
      </div>
    );
  }
}


const TitleLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
