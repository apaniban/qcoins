import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Balance from './Balance';

const Header = (props) =>
  <StyledHeader>
    <Logo />
    <Balance />
  </StyledHeader>

export default Header;

const StyledHeader = styled.div`
  grid-area: header;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  padding-bottom: 20px;
`;
