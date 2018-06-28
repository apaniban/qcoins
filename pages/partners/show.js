import React, { Component } from 'react';
import Layout from '../../components/Layout';

class PartnerShow extends Component {
  static getInitialProps(props) {
    return { message: 'Show partner' };
  }

  render() {
    return <Layout>{this.props.message}</Layout>;
  }
}

export default PartnerShow;
