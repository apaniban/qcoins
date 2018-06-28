import React from 'react';
import styled from 'styled-components';

const Header = styled.div``;
const Footer = styled.div``;

const Container = styled.div``;
const Content = styled.div``;

const Layout = ({children}) =>
  <Container>
    <Header>Header</Header>
    <Content>{children}</Content>
    <Footer>Footer</Footer>
  </Container>

export default Layout;
