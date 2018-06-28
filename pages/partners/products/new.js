import React, { Component } from 'react';
import Layout from '../../../components/Layout';

class ProductNew extends Component {
  static async getInitialProps(props) {
    return { message: 'New product' };
  }

  render() {
    return <Layout>{this.props.message}</Layout>;
  }
}

export default ProductNew;
