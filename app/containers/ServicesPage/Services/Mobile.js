import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

class Mobile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>Mobile</h1>
        <p>Having created several iOS and Android apps, designing for mobile is right up alley. We know every pixel is valuable on mobile devices and know how to make the most pretty and intuitive apps.</p>
      </div>
    );
  }
}

export default Mobile;

const Container = styled.div`
  text-align: center;
  display: flex;
  width:80%;
  position: absolute;
   border: 1px solid #666;
   height:40%;
 flex-direction: row;
`;
