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

  > span {
    position: absolute;
    display: block;
    top: 0;

    height: 10px;
    width: 10px;
    border-radius: 50%;

    background-color: white;
    opacity: 0.8;

    animation: ${animation} 1.4s ease-in-out infinite both;
  }

  > :nth-child(1) {
    left: -20px;
  }

  > :nth-child(2) {
    left: 0;
    animation-delay: 0.16s;
  }

  > :nth-child(3) {
    left: 20px;
    animation-delay: 0.32s;
  }
`;

const Loader = () => (
  <Container>
    <Wrapper>
      <span />
      <span />
      <span />
    </Wrapper>
  </Container>
);

const Container = styled.div`
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export default Loader;
