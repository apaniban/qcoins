import React, { Component } from 'react';
import Layout from '../../components/Layout';

class PartnerNew extends Component {
  static getInitialProps(props) {
    return { message: 'New partner' };
  }

  render() {
    return <Layout>{this.props.message}</Layout>;
  }
}

export default PartnerNew;
