import React from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import Websites from './Services/Websites';
import SocialMedia from './Services/SocialMedia';
import Mobile from './Services/Mobile';
import MobileApps from './Services/MobileApps';
import messages from './messages';
import Services from '../../components/Services';
import './index.scss';

export default class ServicesPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      activeIndex: 'Websites',
    };
  }

  handleClick(index) {
    this.setState({ activeIndex: index });
  }

  render() {
    const Components = {
      'Websites': Websites,
      'Mobile': Mobile,
      'SocialMedia': SocialMedia,
      'MobileApps': MobileApps
    };

    const Component = Components[this.state.activeIndex];
    return (
      <div>
        <Helmet
          meta={[{ name: 'description', content: 'Services page' },
        ]}/>
        <div className="service-tabs">
          <Services index="Websites" isActive={this.state.activeIndex==='Websites'} onClick={this.handleClick.bind(this)}><FormattedMessage {...messages.websitesTab} /></Services>
          <Services index="SocialMedia" isActive={this.state.activeIndex==='SocialMedia'} onClick={this.handleClick.bind(this)}><FormattedMessage {...messages.socialTab} /></Services>
          <Services index="Mobile" isActive={this.state.activeIndex==='Mobile'} onClick={this.handleClick.bind(this)}><FormattedMessage {...messages.mobileTab} /></Services>
          <Services index="MobileApps" isActive={this.state.activeIndex==='MobileApps'} onClick={this.handleClick.bind(this)}><FormattedMessage {...messages.mobileAppsTab} /></Services>
        </div>
        <div className="service-info">
          <Component />
        </div>
      </div>
    );
  }
}
