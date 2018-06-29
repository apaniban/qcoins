import React from 'react';
import styled from 'styled-components';

const Button = ({label}) =>
  <StyledButton> 
    {label}
  </StyledButton>

export default Button;

Button.getInitialProps = () => ({label: ''});

const StyledButton = styled.div`
  width: 275px;
  height: 58.7px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 2.5px 7.5px 0 rgba(0, 0, 0, 0.07);
`;
