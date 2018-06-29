import React from 'react';
import styled from 'styled-components';

const Label = ({text}) =>
  <StyledLabel> 
    {text}
  </StyledLabel>

export default Label;

Label.getInitialProps = () => ({text: ''});

const StyledLabel = styled.div`
  width: 89px;
  height: 15.5px;
  opacity: 0.5;
  font-family: Ciutadella;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
`;
