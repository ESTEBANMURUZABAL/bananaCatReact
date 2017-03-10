import React from 'react';
import style from './style.scss';

export default class TextSwitcher extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    // This must be exactly one element or it will warn.
    const name = this.props.name;
    return (
      <div className="container">
        {name}
      </div>
    );
  }
}

TextSwitcher.propTypes = {
  name: React.PropTypes.string.isRequired
};
