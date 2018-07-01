import React from 'react';
import styled from 'styled-components';

const Label = ({text}) =>
  <StyledLabel>
    {text}
  </StyledLabel>

export default Label;

const StyledLabel = styled.div`
  height: 15px;
  opacity: 0.5;
  font-size: 14px;
  text-transform: uppercase;
  color: #ffffff;
`;
