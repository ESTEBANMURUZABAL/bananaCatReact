

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Link } from 'react-router';
import style from './index.scss';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

export default class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: null
    }
  }

  handleClick(index) {
    this.setState({activeIndex: index})
  }

  render() {

    return (
        <div className="navbar">
          <HeaderLink to="" index={0} isActive={this.state.activeIndex===0} onClick={this.handleClick.bind(this)}>
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="features" index={1} isActive={this.state.activeIndex===1} onClick={this.handleClick.bind(this)}>
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <HeaderLink to="services" index={2} isActive={this.state.activeIndex===2} onClick={this.handleClick.bind(this)}>
            <FormattedMessage {...messages.services} />
          </HeaderLink>
          <HeaderLink to="contact" index={3} isActive={this.state.activeIndex===3} onClick={this.handleClick.bind(this)}>
            <FormattedMessage {...messages.contact} />
          </HeaderLink>
          <HeaderLink to="about" index={4} isActive={this.state.activeIndex===4} onClick={this.handleClick.bind(this)}>
            <FormattedMessage {...messages.about} />
          </HeaderLink>
          <LocaleToggle />
        </div>
    );
  }
}

class HeaderLink extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.onClick(this.props.index)
  }

  render () {
    return (
      this.props.isActive
      ?
      <Link to={this.props.to} className="active" onClick={this.handleClick.bind(this)}>
        <div className="container-header">
          <div className="left"><div className="image" /></div>
          <div className="title">
            {this.props.children}
          </div>
        </div>
      </Link>
      : <Link to={this.props.to} className="normal" onClick={this.handleClick.bind(this)}>
          {this.props.children}
        </Link>
    )
  }
}
