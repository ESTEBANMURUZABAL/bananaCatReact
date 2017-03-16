import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './style.scss';

export default class PropousalPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  shouldComponentUpdate() {
    return false;
  }


  render() {

    return (
      <section id="contact">
        <Helmet
          meta={[
            { name: 'description', content: 'Services page' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ]}
        />
          <h1 className="section-header">Elejiste {this.props.params.packNum}, rellena tus datos y te contactaremos!</h1>
          <div className="contact-wrapper">

            <form className="form-horizontal" role="form" method="post" action="https://formspree.io/estebannmuruzabal@gmail.com">

              <div className="form-group">
                <div className="col-sm-12">
                  <input type="text" className="form-control" id="name" placeholder="NAME" name="name"/>
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-12">
                  <input type="numbers" className="form-control" id="phone" placeholder="PHONE" name="phone"/>
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-12">
                  <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email"/>
                </div>
              </div>

              <textarea className="form-control" rows="10" placeholder="COMMENTS AND INQUIRES" name="message"></textarea>

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
