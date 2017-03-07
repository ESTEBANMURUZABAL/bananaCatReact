import React from 'react';
import { FormattedMessage } from 'react-intl';
import BoxContainer from './BoxContainer';
import Container from './Container';


class Websites extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>Desarrollo Web Profesional</h1>
        <p>BananaCatCo. ofrece servicios de Diseño Web, Desarrollo Web, y Aplicaciones Web. Ofrecemos planes de Diseño Web a los mejores precios del mercado, nuestras diferentes soluciones web permiten a las empresas contar con una página web desde U$300. Todos nuestros planes de diseño web Incluyen: Registro de Dominio, Diseño Web, Aplicaciones Web, Hosting y Soporte Técnico Especializado. Utilizamos las ultimas tecnologías para el desarrollo y diseño de cada página web, ofreciendo a nuestros clientes páginas de Internet funcionales y modernas.</p>
        <Container>
          <BoxContainer>
            Landing page
            <ul>
              <li>Hasta 5 Páginas (Links).</li>
              <li>1 Formulario de Contacto.</li>
              <li>Registro de Usuarios.</li>
              <li>Solicitar Cotización</li>
            </ul>
          </BoxContainer>
          <BoxContainer>
            Web administrable
          </BoxContainer>
          <BoxContainer>
            eCommerce
          </BoxContainer>
        </Container>
      </div>
    );
  }
}

export default Websites;
