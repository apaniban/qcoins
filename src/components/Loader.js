import React from 'react';
import styled, {keyframes} from 'styled-components';

const animation = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }

  40% {
    transform: scale(1);
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 100px;
  width: 170px;

  > span {
    position: absolute;
    display: block;
    bottom: 0;

    height: 10px;
    width: 10px;
    border-radius: 50%;

    background-color: white;
    opacity: 0.8;

    animation: ${animation} 1.4s ease-in-out infinite both;
  }

  > :nth-child(1) {
    left: 65px;
  }

  > :nth-child(2) {
    left: 85px;
    animation-delay: 0.16s;
  }

  > :nth-child(3) {
    left: 105px;
    animation-delay: 0.32s;
  }
`;

const Loader = ({message}) => (
  <Container>
    <Wrapper>
      <span />
      <span />
      <span />
    </Wrapper>
    {message && <p>{message}</p>}
  </Container>
);

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  > p {
    font-size: 17px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;
  }
`;

export default Loader;
