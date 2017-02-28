import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`

    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: #000;
    letter-spacing: 0.1rem;
		transition: all 0.5s ease;
		font-size: 1rem;
    	font-family: "Century Gothic", 'Lato', sans-serif;
      text-decoration:none;  
	  &:hover {
			color:white;
      background: rgba(102,177,241,0.8);
			transition: all 0.5s ease;
    }
`;
