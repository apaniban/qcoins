import React, { Component } from 'react';
import Layout from '../../components/Layout';

class PartnerIndex extends Component {
  static getInitialProps(props) {
    return { message: 'List of partners' };
  }

  render() {
    return <Layout>{this.props.message}</Layout>;
  }
}

export default PartnerIndex;
