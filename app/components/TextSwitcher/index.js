import React from 'react';
import './style.scss';

export default class TextSwitcher extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.name}
      </div>
    );
  }
}

TextSwitcher.propTypes = {
  name: React.PropTypes.string.isRequired,
};
