import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import {Link} from '../../../routes';

class ProductNew extends Component {
  static async getInitialProps(props) {
    const {address, productId} = props.query;
    return {address, productId};
  }

  render() {
    return (
      <Layout>
        <Link route='/'><a>Back</a></Link>
        <div>{this.props.address}</div>
        <div>{this.props.productId}</div>
      </Layout>
    );
  }
}

export default ProductNew;
