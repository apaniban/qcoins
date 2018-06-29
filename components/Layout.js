import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Label from './Label';

const Layout = ({children}) =>
  <Container>
    <Header/>
    <Content>
      
    </Content>
    <Divider>
      <Label text={'Recent Activity'} />
      <Line />
    </Divider>
  </Container>

export default Layout;

const Container = styled.div`
  object-fit: contain;
  background-image: linear-gradient(209deg, #000000, #d4185b 58%, #b52323);
  height: 100vh;
  width: 100%;
  padding: 30px;
`;

const Content = styled.div`
  width: 100%;
  height: 209.5px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 2.5px 7.5px 0 rgba(0, 0, 0, 0.07);
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Line = styled.div`
  width: 220.5px;
  height: 0.5px;
  opacity: 0.5;
  border: solid 0.5px #ffffff;
`;

const Divider = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
`;