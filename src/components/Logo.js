import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const Logo = (props) => <StyledLogo src={logo} />

const StyledLogo = styled.img`
  grid-column: 1 / span 1;
`

export default Logo;
