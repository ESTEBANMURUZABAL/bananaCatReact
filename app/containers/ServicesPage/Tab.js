import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Websites from './Services/Websites';
import SocialMedia from './Services/SocialMedia';
import Mobile from './Services/Mobile';

export default class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    this.state = {
      serviceId: '1',
      isWebsiteActive: true,
      isSocialActive: false,
      isMobileActive: false
    }
  }

  handleClick1() {
      this.setState({serviceId: 1, isWebsiteActive: true, isSocialActive: false, isMobileActive: false});
 }

 handleClick2() {
     this.setState({serviceId: 2, isSocialActive: true, isWebsiteActive: false, isMobileActive: false});
}

handleClick3(){
    this.setState({serviceId: 3, isMobileActive: true, isWebsiteActive: false, isSocialActive: false});

}
  render() {
    const serviceId = this.state.serviceId;

    let tabInfo;
    let tabTitle;
    if (serviceId==1) {
      tabInfo = <Websites/>
      tabTitle = <div><Service selected onClick={this.handleClick1}>Websites</Service>
      <Service onClick={this.handleClick2}>Social Media Management</Service>
      <Service onClick={this.handleClick3}>Mobile Applications</Service></div>
    } else if(serviceId==2){
      tabInfo = <SocialMedia/>
      tabTitle = <div><Service onClick={this.handleClick1}>Websites</Service>
      <Service selected onClick={this.handleClick2}>Social Media Management</Service>
      <Service onClick={this.handleClick3}>Mobile Applications</Service></div>
    } else {
      tabInfo = <Mobile/>
      tabTitle = <div><Service onClick={this.handleClick1}>Websites</Service>
      <Service onClick={this.handleClick2}>Social Media Management</Service>
      <Service selected onClick={this.handleClick3}>Mobile Applications</Service></div>
    }

    return (
      <Container>
        <TabList>
          {tabTitle}
        </TabList>
        <TabInfo>
            {tabInfo}
        </TabInfo>
      </Container>
    );
  }
}

const Container = styled.div`
  text-align: center;
  display: flex;
  width:100%;
  height: 100%;
 flex-direction: row;
`;

const Service = styled.div`
  background: ${props => props.selected ? '#0091EA' : '#263238'};
  font-family: "Open Sans", sans-serif;

  color:white;

  display: inline-block;
  width: 100%;
  padding: 1rem 2rem;


  font-family: inherit;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;

&:hover {
  background: #37474F;
  transition: all 0.5s ease;
}
`;

const TabList = styled.div`
position: absolute;
left: 0px;
width: 20%;
height: 100%;

  background: #263238;


display: flex;
 justify-content:top;
 align-content:center;
 flex-direction:column;
 text-align:left;

`;

const TabInfo = styled.div`
position: absolute;
right: 0px;
width: 80%;
height: 100%;
font-family: Montserrat, Helvetica, Times, serif;
padding-top:1%;
padding-left:3%;
padding-right:3%;

   justify-content:top;
   align-content:center;
   flex-direction:column;
   text-align: left;
`;