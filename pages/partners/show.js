import React, {Component} from 'react';
import {map} from 'ramda';

import Layout from '../../components/Layout';
import {Link} from '../../routes';
import partner from '../../ethereum/partner';

class PartnerShow extends Component {
  static getInitialProps(props) {
    return {
      address: props.query.address
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    const {address} = this.props;
    const numberOfProducts = await partner(address).methods.noOfProducts().call();

    Promise.all(map(getProductInfo(address), generateList()(numberOfProducts)))
      .then(products => this.setState({products}))
  }

  render() {
    return (
      <Layout>
        <Link route='/'><a>Back</a></Link>
        {this.state.products.map(p => (
          <div>
            <Link route={`${this.props.address}/products/${p.id}`}><a>{p.name}</a></Link>
            <div>{p.price}</div>
          </div>
        ))}
      </Layout>
    );
  }
}

const getProductInfo = (address) => (number) =>
  partner(address).methods.getProduct(number).call()
    .then(product => ({id: number, name: product[0], price: product[1]}));

/* Sorry */
const generateList = (floor = 1) => (ceiling) => {
  let list = [];
  let index = floor;

  while(index <= ceiling) {
    list.push(index);
    index = index + 1;
  }

  return list;
}

export default PartnerShow;
