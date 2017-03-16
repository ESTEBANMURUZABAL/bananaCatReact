import React from 'react';
import { FormattedMessage } from 'react-intl';
import './styles.scss';
import messages from '../messages';
import { Link } from 'react-router';

const Websites = function() {
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
            <li><FormattedMessage {...messages.webPack1Feature1} /></li>
            <li><FormattedMessage {...messages.webPack1Feature2} /></li>
            <li><FormattedMessage {...messages.webPack1Feature3} /></li>
            <li><FormattedMessage {...messages.webPack1Feature4} /></li>
          </ul>
          <div className="plan-select"><Link to="/services/webPack1"><FormattedMessage {...messages.selectPlan} /></Link></div>
        </div>

        <div className="plan">
          <header><i className="ion-ios-world"></i>
            <h4 className="plan-title">Admin</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.webPrice2} /></span><span className="plan-type"></span></div>
          </header>
          <ul className="plan-features">
            <li><FormattedMessage {...messages.webPack2Feature1} /></li>
            <li><FormattedMessage {...messages.webPack2Feature2} /></li>
            <li><FormattedMessage {...messages.webPack2Feature3} /></li>
            <li><FormattedMessage {...messages.webPack2Feature4} /></li>
            <li><FormattedMessage {...messages.webPack2Feature5} /></li>
            <li><FormattedMessage {...messages.webPack2Feature6} /></li>
          </ul>
          <div className="plan-select"><Link to="/services/webPack2"><FormattedMessage {...messages.selectPlan} /></Link></div>
        </div>

        <div className="plan">
          <header><i className="ion-ios-people"></i>
            <h4 className="plan-title">eCommerce</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.webPrice3} /></span><span className="plan-type"></span></div>
          </header>
          <ul className="plan-features">
            <li><FormattedMessage {...messages.webPack3Feature1} /></li>
            <li><FormattedMessage {...messages.webPack3Feature2} /></li>
            <li><FormattedMessage {...messages.webPack3Feature3} /></li>
            <li><FormattedMessage {...messages.webPack3Feature4} /></li>
            <li><FormattedMessage {...messages.webPack3Feature5} /></li>
            <li><FormattedMessage {...messages.webPack3Feature6} /></li>
          </ul>
          <div className="plan-select"><Link to="/services/webPack3"><FormattedMessage {...messages.selectPlan} /></Link></div>
        </div>

        <div className="plan">
          <header><i className="ion-ios-speedometer"></i>
            <h4 className="plan-title">Custom</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.webPrice4} /></span><span className="plan-type"></span></div>
          </header>
          <ul className="plan-features">
            <li><FormattedMessage {...messages.webPack4Feature1} /></li>
            <li><FormattedMessage {...messages.webPack4Feature2} /></li>
            <li><FormattedMessage {...messages.webPack4Feature3} /></li>
            <li><FormattedMessage {...messages.webPack4Feature4} /></li>
            <li><FormattedMessage {...messages.webPack4Feature5} /></li>
            <li><FormattedMessage {...messages.webPack4Feature6} /></li>
          </ul>
          <div className="plan-select"><Link to="/services/webPack4"><FormattedMessage {...messages.selectPlan} /></Link></div>
        </div>

      </div>
    </div>
  );
}

export default Websites;
