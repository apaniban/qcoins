import React from 'react';
import styled from 'styled-components';
import Label from './Label';

const Balance = ({balance}) =>
  <StyledBalance>
    <Label text={'Wallet Balance'} />
    {balance}
  </StyledBalance>

Balance.getInitialProps = () => ({ balance: 0 })

export default Balance;

const StyledBalance = styled.div`
  /* width: 85.5px; */
  height: 14px;
  opacity: 0.5;
  font-family: Ciutadella-Rg;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
`
