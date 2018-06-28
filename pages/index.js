import React, { Component } from 'react';
import Layout from '../components/Layout';

class LandingPage extends Component {
  static getInitialProps(props) {
    return { message: 'Landing page' };
  }

  render() {
    return <Layout>{this.props.message}</Layout>;
  }
}

export default LandingPage;
