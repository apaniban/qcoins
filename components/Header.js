import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Balance from './Balance';

const Header = (props) =>
  <StyledHeader> 
    <Logo />
    <Balance balance={120223}/>
  </StyledHeader>

export default Header;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  
  /* height: 100px; */
  /* margin-left: 15px;
  margin-right: 15px;
  padding-top: 20px; */
`;
