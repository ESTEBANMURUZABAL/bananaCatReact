import React from 'react';

import Item from './Item';
import Section from './Section';
import Wrapper from './Wrapper';


export default class TextSwitcher extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return (
      <Wrapper>
        {children}
      </Wrapper>
    );
  }
}

TextSwitcher.propTypes = {
  children: React.PropTypes.element.isRequired
};
