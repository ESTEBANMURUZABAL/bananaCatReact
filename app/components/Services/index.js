import React from 'react';
import './styles.scss';

export default class Services extends React.Component {

  handleClick() {
    this.props.onClick(this.props.index);
  }

  render () {
    return (
      this.props.isActive
      ? <div className="active-service" onClick={this.handleClick.bind(this)}>{this.props.children}</div>
      : <div className="normal-service" onClick={this.handleClick.bind(this)}>{this.props.children}</div>
    );
  }
}
