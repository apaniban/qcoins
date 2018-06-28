import React, { Component } from 'react';
import Layout from '../../../components/Layout';

class ProductIndex extends Component {
  static async getInitialProps(props) {
    return { message: 'List of products' };
  }

  render() {
    return <Layout>{this.props.message}</Layout>;
  }
}

export default ProductIndex;
