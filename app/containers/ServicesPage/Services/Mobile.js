import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import './styles.scss';
import messages from '../messages';

export default class Mobile extends React.Component {
  render() {
    return (
      <div>
        <h1><FormattedMessage {...messages.mobileTitle} /></h1>
        <p><FormattedMessage {...messages.mobileContent} /></p>
        <div className="snip1265">

        <div className="plan">
          <header><i className="ion-ios-navigate-outline"></i>
            <h4 className="plan-title">Package 1</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.mobilePrice1} /></span><span className="plan-type"></span></div>
          </header>
          <ul className="plan-features">
            <li><FormattedMessage {...messages.mobilePack1Feature1} /></li>
            <li><FormattedMessage {...messages.mobilePack1Feature2} /></li>
            <li><FormattedMessage {...messages.mobilePack1Feature3} /></li>
            <li><FormattedMessage {...messages.mobilePack1Feature4} /></li>
          </ul>
          <div className="plan-select"><Link to="/services/mobilePack1"><FormattedMessage {...messages.selectPlan} /></Link></div>
        </div>

        <div className="plan">
          <header><i className="ion-ios-world"></i>
            <h4 className="plan-title">Package 2</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.mobilePrice2} /></span><span className="plan-type"></span></div>
          </header>
          <ul className="plan-features">
            <li><FormattedMessage {...messages.mobilePack2Feature1} /></li>
            <li><FormattedMessage {...messages.mobilePack2Feature2} /></li>
            <li><FormattedMessage {...messages.mobilePack2Feature3} /></li>
            <li><FormattedMessage {...messages.mobilePack2Feature4} /></li>
            <li><FormattedMessage {...messages.mobilePack2Feature5} /></li>
            <li><FormattedMessage {...messages.mobilePack2Feature6} /></li>
          </ul>
          <div className="plan-select"><Link to="/services/mobilePack2"><FormattedMessage {...messages.selectPlan} /></Link></div>
        </div>

        <div className="plan">
          <header><i className="ion-ios-people"></i>
            <h4 className="plan-title">Package 3</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.mobilePrice3} /></span><span className="plan-type"></span></div>
          </header>
          <ul className="plan-features">
            <li><FormattedMessage {...messages.mobilePack3Feature1} /></li>
            <li><FormattedMessage {...messages.mobilePack3Feature2} /></li>
            <li><FormattedMessage {...messages.mobilePack3Feature3} /></li>
            <li><FormattedMessage {...messages.mobilePack3Feature4} /></li>
            <li><FormattedMessage {...messages.mobilePack3Feature5} /></li>
            <li><FormattedMessage {...messages.mobilePack3Feature6} /></li>
          </ul>
          <div className="plan-select"><Link to="/services/mobilePack3"><FormattedMessage {...messages.selectPlan} /></Link></div>
        </div>

        <div className="plan">
          <header><i className="ion-ios-speedometer"></i>
            <h4 className="plan-title">Custom</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.mobilePrice4} /></span><span className="plan-type"></span></div>
          </header>
          <ul className="plan-features">
            <li><FormattedMessage {...messages.mobilePack4Feature1} /></li>
            <li><FormattedMessage {...messages.mobilePack4Feature2} /></li>
            <li><FormattedMessage {...messages.mobilePack4Feature3} /></li>
            <li><FormattedMessage {...messages.mobilePack4Feature4} /></li>
            <li><FormattedMessage {...messages.mobilePack4Feature5} /></li>
            <li><FormattedMessage {...messages.mobilePack4Feature6} /></li>
          </ul>
          <div className="plan-select"><Link to="/services/mobilePack4"><FormattedMessage {...messages.selectPlan} /></Link></div>
        </div>

        </div>
      </div>
    );
  }
}
