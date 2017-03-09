import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import s from './Websites.scss';

class Websites extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>Desarrollo Web Profesional</h1>
        <p>BananaCatCo. ofrece servicios de Diseño Web, Desarrollo Web, y Aplicaciones Web. Ofrecemos planes de Diseño Web a los mejores precios del mercado, nuestras diferentes soluciones web permiten a las empresas contar con una página web desde U$300. Todos nuestros planes de diseño web Incluyen: Registro de Dominio, Diseño Web, Aplicaciones Web, Hosting y Soporte Técnico Especializado. Utilizamos las ultimas tecnologías para el desarrollo y diseño de cada página web, ofreciendo a nuestros clientes páginas de Internet funcionales y modernas.</p>
        <Container>
          <div className="snip1265">
          <div className="plan">
            <header><i className="ion-ios-navigate-outline"></i>
              <h4 className="plan-title">
                Landing Page
              </h4>
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
              <h4 className="plan-title">
                Administrable
              </h4>
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
              <h4 className="plan-title">
                eCommerce
              </h4>
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
        </Container>
      </div>
    );
  }
}

export default Websites;

const Container = styled.div`
  width: 95%;

`;
