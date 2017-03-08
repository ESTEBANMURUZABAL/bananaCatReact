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
                Starter
              </h4>
              <div className="plan-cost"><span className="plan-price">$19</span><span className="plan-type">/month</span></div>
            </header>
            <ul className="plan-features">
              <li>5GB Linux Web Space
              </li>
              <li>5 MySQL Databases
              </li>
              <li>Unlimited Email
              </li>
              <li>250Gb mo Transfer
              </li>
              <li>24/7 Tech Support
              </li>
              <li>Daily Backups
              </li>
            </ul>
            <div className="plan-select"><a href="">Select Plan</a></div>
          </div>
          <div className="plan">
            <header><i className="ion-ios-world"></i>
              <h4 className="plan-title">
                Basic
              </h4>
              <div className="plan-cost"><span className="plan-price">$29</span><span className="plan-type">/month</span></div>
            </header>
            <ul className="plan-features">
              <li>10GB Linux Web Space
              </li>
              <li>10 MySQL Databases
              </li>
              <li>Unlimited Email
              </li>
              <li>500Gb mo Transfer
              </li>
              <li>24/7 Tech Support
              </li>
              <li>Daily Backups
              </li>
            </ul>
            <div className="plan-select"><a href="">Select Plan</a></div>
          </div>
          <div className="plan">
            <header><i className="ion-ios-people"></i>
              <h4 className="plan-title">
                Professional
              </h4>
              <div className="plan-cost"><span className="plan-price">$49</span><span className="plan-type">/month</span></div>
            </header>
            <ul className="plan-features">
              <li>25GB Linux Web Space
              </li>
              <li>25 MySQL Databases
              </li>
              <li>Unlimited Email
              </li>
              <li>2000Gb mo Transfer
              </li>
              <li>24/7 Tech Support
              </li>
              <li>Daily Backups
              </li>
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
  display: flex;
  width:95%;
  position: absolute;
   height:40%;
`;

const BoxContainer = styled.div`
  width: 33%;
  font-family: Montserrat, Helvetica, Times, serif;
  padding:5%;
  flex: 1;
  display: flex;
   justify-content:top;
   align-content:center;
   text-align:left;
   border: 1px solid #666;
`;
