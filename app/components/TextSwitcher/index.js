import React from 'react';

import Item from './Item';
import Section from './Section';
import Wrapper from './Wrapper';


export default class TextSwitcher extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      words: [
        '\xa0websites',
        '\xa0social media',
        '\xa0mobile apps'
      ],
      currentWord: '',
      i: 0,
    }

  }


  render() {
    // This must be exactly one element or it will warn.
    const name = this.props.name;
    return (
      <Wrapper>
        {name}
      </Wrapper>
    );
  }
}

TextSwitcher.propTypes = {
  name: React.PropTypes.string.isRequired
};
