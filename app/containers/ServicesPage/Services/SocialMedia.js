import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import './Websites.scss';

class SocialMedia extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>Social Media</h1>
        <p>Manage your entire social lifecycle. From one dashboard you’ll schedule Tweets and Facebook posts, monitor conversations, and more. When you need to prove your social ROI, quickly create and customize ready-to-present analytics reports.</p>
        <div className="snip1265">
        <div className="plan">
          <header><i className="ion-ios-navigate-outline"></i>
            <h4 className="plan-title">Package 1</h4>
            <div className="plan-cost"><span className="plan-price">$19</span><span className="plan-type">/month</span></div>
          </header>
          <ul className="plan-features">
            <li>Until 5 tabs or views</li>
            <li>1 custom form</li>
            <li>Design from templates</li>
            <li>Custom text/colors</li>
          </ul>
          <div className="plan-select"><a href="">Select Plan</a></div>
        </div>
        <div className="plan">
          <header><i className="ion-ios-world"></i>
            <h4 className="plan-title">Package 2</h4>
            <div className="plan-cost"><span className="plan-price">$29</span><span className="plan-type">/month</span></div>
          </header>
          <ul className="plan-features">
            <li>Until 15 tabs or views</li>
            <li>2 custom form</li>
            <li>User registration</li>
            <li>Custom design</li>
            <li>Google AdWords campaign</li>
            <li>1 months support</li>
          </ul>
          <div className="plan-select"><a href="">Select Plan</a></div>
        </div>
        <div className="plan">
          <header><i className="ion-ios-people"></i>
            <h4 className="plan-title">Package 3</h4>
            <div className="plan-cost"><span className="plan-price">$49</span><span className="plan-type">/month</span></div>
          </header>
          <ul className="plan-features">
            <li>Until 30 tabs or views</li>
            <li>3 custom form</li>
            <li>User registration and management</li>
            <li>Custom design</li>
            <li>Google AdWords campaign</li>
            <li>3 months support</li>
          </ul>
          <div className="plan-select"><a href="">Select Plan</a></div>
        </div>
        </div>
      </div>
    );
  }
}

export default SocialMedia;
