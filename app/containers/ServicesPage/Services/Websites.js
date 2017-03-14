import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Websites.scss';
import messages from '../messages';

class Websites extends React.Component {
  render() {
    return (
      <div>
        <h1><FormattedMessage {...messages.webTitle} /></h1>
        <p><FormattedMessage {...messages.webContent} /></p>
        <div className="snip1265">

        <div className="plan">
          <header><i className="ion-ios-navigate-outline"></i>
            <h4 className="plan-title">Landing Page</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.webPrice1} /></span><span className="plan-type"></span></div>
          </header>
          <ul className="plan-features">
            <li>Until 5 tabs or views</li>
            <li>1 custom form</li>
            <li>Design from templates</li>
            <li>Custom text/colors</li>
          </ul>
          <div className="plan-select"><a href=""><FormattedMessage {...messages.selectPlan} /></a></div>
        </div>

        <div className="plan">
          <header><i className="ion-ios-world"></i>
            <h4 className="plan-title">Admin</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.webPrice2} /></span><span className="plan-type"></span></div>
          </header>
          <ul className="plan-features">
            <li>Until 15 tabs or views</li>
            <li>2 custom forms</li>
            <li>User registration</li>
            <li>Custom design</li>
            <li>Google AdWords</li>
            <li>1 months support</li>
          </ul>
          <div className="plan-select"><a href=""><FormattedMessage {...messages.selectPlan} /></a></div>
        </div>

        <div className="plan">
          <header><i className="ion-ios-people"></i>
            <h4 className="plan-title">eCommerce</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.webPrice3} /></span><span className="plan-type"></span></div>
          </header>
          <ul className="plan-features">
            <li>Until 30 tabs or views</li>
            <li>3 custom form</li>
            <li>Users management</li>
            <li>Custom design</li>
            <li>Google AdWords</li>
            <li>3 months support</li>
          </ul>
          <div className="plan-select"><a href=""><FormattedMessage {...messages.selectPlan} /></a></div>
        </div>

        <div className="plan">
          <header><i className="ion-ios-speedometer"></i>
            <h4 className="plan-title">Custom</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.webPrice4} /></span><span className="plan-type"></span></div>
          </header>
          <ul className="plan-features">
            <li>Custom design!</li>
            <li>? tabs or views</li>
            <li>? custom forms</li>
            <li>? user registration</li>
            <li>Google AdWords</li>
            <li>? months support</li>
          </ul>
          <div className="plan-select"><a href=""><FormattedMessage {...messages.selectPlan} /></a></div>
        </div>

        </div>
      </div>
    );
  }
}

export default Websites;
