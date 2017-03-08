import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Link } from 'react-router';

import A from './A';
import Img from './Img';
import Banner from './banner.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <HeaderLink to="/services">
            <FormattedMessage {...messages.services} />
          </HeaderLink>
          <HeaderLink to="/contact">
            <FormattedMessage {...messages.contact} />
          </HeaderLink>
          <HeaderLink to="/about">
            <FormattedMessage {...messages.about} />
          </HeaderLink>
        </NavBar>
    );
  }
}

export default Header;

const HeaderLink = styled(Link)`

    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: #000;
    letter-spacing: 0.1rem;
		transition: all 0.5s ease;
		font-size: 1rem;
    	font-family: 'Open Sans', 'Lato', sans-serif;
      text-decoration:none;
      color:white;
	  &:hover {
      background: rgba(102,177,241,0.8);
			transition: all 0.5s ease;
    }
`;

const NavBar = styled.div`
  text-align: center;
  display: flex;
    width:100%;
   position:fixed;

   background-color: #2A2C39;
   height:60px;

   margin:0px auto;
   flex-direction: row;
   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);


   &--top {
       position: fixed;
       top: 0;
   }
`;
