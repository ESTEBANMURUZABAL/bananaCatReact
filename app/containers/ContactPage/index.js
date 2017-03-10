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
import s from './index.scss';

export default class ContactPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <section id="contact">
        <Helmet
          title="Contact Page"
          meta={[
            { name: 'description', content: 'Services page' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ]}
          link={[
            {"rel": "stylesheet", "href": "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"},
            {"rel": "stylesheet", "type":"text/css" ,"href": "https://fonts.googleapis.com/css?family=Lato:400,100,300"},
            {"rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=Raleway:100,400,700"},
            {"rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=Oswald:200,400,700"},
          ]}
          script={[
             {src: "https://use.fontawesome.com/20ab91acc4.js", type: "text/javascript"},
         ]}
        />
          <h1 className="section-header">GET IN TOUCH & FOLLOW US</h1>
          <div className="contact-wrapper">

            <form className="form-horizontal" role="form" method="post" action="https://formspree.io/estebannmuruzabal@gmail.com">

              <div className="form-group">
                <div className="col-sm-12">
                  <input type="text" className="form-control" id="name" placeholder="NAME" name="name"/>
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-12">
                  <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email"/>
                </div>
              </div>

              <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message"></textarea>

              <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                <div className="button">
                  <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                </div>

              </button>
              <input type="hidden" name="_next" value="http://localhost:3000/contact" />
            </form>



              <div className="direct-contact-container">

                <ul className="contact-list">
                  <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Chaco-Argentina</span></i></li>

                  <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:9-362-420-1230" title="Give me a call">(3624) 20-1230</a></span></i></li>

                  <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">BananaCatCo@gmail.com</a></span></i></li>

                </ul>

                <hr></hr>
                <ul className="social-media-list">
                  <li><a href="#" target="_blank" className="contact-icon">
                    <i className="fa fa-github-alt" aria-hidden="true"></i></a>
                  </li>
                  <li><a href="#" target="_blank" className="contact-icon">
                    <i className="fa fa-twitter" aria-hidden="true"></i></a>
                  </li>
                  <li><a href="#" target="_blank" className="contact-icon">
                    <i className="fa fa-instagram" aria-hidden="true"></i></a>
                  </li>
                  <li><a href="#" target="_blank" className="contact-icon">
                    <i className="fa fa-facebook" aria-hidden="true"></i></a>
                  </li>
                </ul>
                <hr></hr>

                <div className="copyright">&copy; 2016 ALL RIGHTS RESERVED</div>

              </div>
          </div>
        </section>
    );
  }
}
