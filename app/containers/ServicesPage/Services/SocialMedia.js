import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

class SocialMedia extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>SocialMedia</h1>
        <p>Manage your entire social lifecycle. From one dashboard you’ll schedule Tweets and Facebook posts, monitor conversations, and more. When you need to prove your social ROI, quickly create and customize ready-to-present analytics reports.</p>
        <iframe src="https://docs.google.com/spreadsheets/d/1-TwW4Ah9hI22w4JAk6W4Px8uBjPZgrhOEOU9tG6uupM/pubhtml?widget=true&amp;headers=false"></iframe>
      </div>
    );
  }
}

export default SocialMedia;

const Container = styled.div`
  text-align: center;
  display: flex;
  width:80%;
  position: absolute;
   border: 1px solid #666;
   height:40%;
 flex-direction: row;
`;
