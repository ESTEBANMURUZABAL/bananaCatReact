import React from 'react';
import { FormattedMessage } from 'react-intl';
import './styles.scss';
import messages from '../messages';
import { Link } from 'react-router';

export default class SocialMedia extends React.Component {
  render() {
    return (
      <div>
        <h1><FormattedMessage {...messages.socialTitle} /></h1>
        <p><FormattedMessage {...messages.socialContent} /></p>
        <div className="snip1265">

        <div className="plan">
          <header><i className="ion-ios-navigate-outline"></i>
            <h4 className="plan-title">Package 1</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.socialPrice1} /></span><span className="plan-type">/month</span></div>
          </header>
          <ul className="plan-features">
          <li><FormattedMessage {...messages.socialPack1Feature1} /></li>
          <li><FormattedMessage {...messages.socialPack1Feature2} /></li>
          <li><FormattedMessage {...messages.socialPack1Feature3} /></li>
          <li><FormattedMessage {...messages.socialPack1Feature4} /></li>
          </ul>
          <div className="plan-select"><Link to="/services/socialPack1"><FormattedMessage {...messages.selectPlan} /></Link></div>
        </div>

        <div className="plan">
          <header><i className="ion-ios-world"></i>
            <h4 className="plan-title">Package 2</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.socialPrice2} /></span><span className="plan-type">/month</span></div>
          </header>
          <ul className="plan-features">
            <li><FormattedMessage {...messages.socialPack2Feature1} /></li>
            <li><FormattedMessage {...messages.socialPack2Feature2} /></li>
            <li><FormattedMessage {...messages.socialPack2Feature3} /></li>
            <li><FormattedMessage {...messages.socialPack2Feature4} /></li>
            <li><FormattedMessage {...messages.socialPack2Feature5} /></li>
            <li><FormattedMessage {...messages.socialPack2Feature6} /></li>
          </ul>
          <div className="plan-select"><Link to="/services/socialPack2"><FormattedMessage {...messages.selectPlan} /></Link></div>
        </div>

        <div className="plan">
          <header><i className="ion-ios-people"></i>
            <h4 className="plan-title">Package 3</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.socialPrice3} /></span><span className="plan-type">/month</span></div>
          </header>
          <ul className="plan-features">
            <li><FormattedMessage {...messages.socialPack3Feature1} /></li>
            <li><FormattedMessage {...messages.socialPack3Feature2} /></li>
            <li><FormattedMessage {...messages.socialPack3Feature3} /></li>
            <li><FormattedMessage {...messages.socialPack3Feature4} /></li>
            <li><FormattedMessage {...messages.socialPack3Feature5} /></li>
            <li><FormattedMessage {...messages.socialPack3Feature6} /></li>
          </ul>
          <div className="plan-select"><Link to="/services/socialPack3"><FormattedMessage {...messages.selectPlan} /></Link></div>
        </div>

        <div className="plan">
          <header><i className="ion-ios-speedometer"></i>
            <h4 className="plan-title">Custom</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.socialPrice4} /></span><span className="plan-type">/month</span></div>
          </header>
          <ul className="plan-features">
            <li><FormattedMessage {...messages.socialPack4Feature1} /></li>
            <li><FormattedMessage {...messages.socialPack4Feature2} /></li>
            <li><FormattedMessage {...messages.socialPack4Feature3} /></li>
            <li><FormattedMessage {...messages.socialPack4Feature4} /></li>
            <li><FormattedMessage {...messages.socialPack4Feature5} /></li>
            <li><FormattedMessage {...messages.socialPack4Feature6} /></li>
          </ul>
          <div className="plan-select"><Link to="/services/socialPack4"><FormattedMessage {...messages.selectPlan} /></Link></div>
        </div>

        </div>
      </div>
    );
  }
}
