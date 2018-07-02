import React, {PureComponent} from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

class Retrieved extends PureComponent {
  render() {
    return (
      <Layout>
        <Navigation withCancel />
        <Content>Payment received</Content>
      </Layout>
    );
  }
}

const Content = styled.div`
  height: 80%;
  font-size: 20px;
  letter-spacing: 2px;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export default Retrieved;
