import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Label from './Label';

import RecentActivities from '../recentActivities';

const Layout = ({children}) =>
  <Container>
    <Header/>
    <Content>
      {children}
    </Content>

    <RecentActivities />
  </Container>

export default Layout;

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'activities';

  background-image: linear-gradient(140deg, #000000, #d4185b 70%, #b52323);
  padding: 30px;
`;

const Content = styled.div`
  grid-area: content;

  height: 220px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 2.5px 7.5px 0 rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  margin: 20px 0;
  padding: 20px;
  font-size: 16px;
  overflow-x: scroll;
`;
