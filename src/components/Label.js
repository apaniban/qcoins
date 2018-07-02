import React from 'react';
import styled from 'styled-components';

const Label = ({text}) =>
  <StyledLabel>
    {text}
  </StyledLabel>

export default Label;

const StyledLabel = styled.div`
  padding-bottom: 5px;
  opacity: 0.5;
  font-size: 12px;
  text-transform: uppercase;
  color: white;
`;
