/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import Services from './Services';
import Container from './Container';
import ServicesInfo from './ServicesInfo';

import Websites from './Services/Websites';
import SocialMedia from './Services/SocialMedia';
import Mobile from './Services/Mobile';

export default class ServicesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
    const service = this.state.serviceId;
    let serviceInfo;
    if (service==1) {
      serviceInfo = <Websites/>
    } else if(service==2){
      serviceInfo = <SocialMedia/>
    } else if(service==3){
      serviceInfo = <Mobile/>
    }
    return (
      <Container>
        <Helmet
          title="Services Page"
          meta={[
            { name: 'description', content: 'Services page' },
          ]}
        />
        <Services>
            <H1>
              <FormattedMessage {...messages.header} />
            </H1>
            <div onClick={this.handleClick1} style={{fontWeight: this.state.isWebsiteActive ? 'bold' : 'normal'}}>
              Websites
            </div>
            <div onClick={this.handleClick2} style={{fontWeight: this.state.isSocialActive ? 'bold' : 'normal'}}>
              Social Media Management
            </div>
            <div onClick={this.handleClick3} style={{fontWeight: this.state.isMobileActive ? 'bold' : 'normal'}}>
              Mobile Applications
            </div>
        </Services>
        <ServicesInfo>
            {serviceInfo}
        </ServicesInfo>
      </Container>
    );
  }
}
