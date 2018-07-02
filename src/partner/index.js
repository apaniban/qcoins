import React, {PureComponent} from 'react';
import styled from 'styled-components';
import {map} from 'ramda';

import Loader from '../components/Loader';
import Navigation from '../components/Navigation';
import Layout from '../components/Layout';
import partner from '../ethereum/partner';
import {format} from '../utils/number';

class Partner extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: []
    };
  }

  async componentDidMount() {
    const {address} = this.props;
    const numberOfProducts = await partner(address).methods.noOfProducts().call();

    Promise.all(map(getProductInfo(address), generateList()(numberOfProducts)))
      .then(products => this.setState({products, loading: false}))
  }

  render() {
    const {address} = this.props;
    const {loading, products} = this.state;

    if (loading) {
      return <Layout><Loader /></Layout>;
    }

    return (
      <Layout>
        <Navigation withCancel />
        <Content>
          {
            map((p) => (
              <Item key={p.id}>
                <span href={`${address}/products/${p.id}`}>{p.name}</span>
                <div>{format(p.price)}</div>
                <Link href={`${address}/products/${p.id}`}>PAY</Link>
              </Item>
            ), products)
          }
        </Content>
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

const Content = styled.ul`
  margin: 0;
  padding: 10px 0 0 0;
  list-style-type: none;
  text-transform: uppercase;
  opacity: 0.8;
  letter-spacing: 1px;
  font-size: 13px;
`;

const Item = styled.li`
  padding: 7px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  > a {
    color: white;
    text-decoration: none;
  }

  > a:visited {
    color: white;
    text-decoration: none;
  }

  > div {
    justify-self: flex-end;
  }
`;

const Link = styled.a`
  margin: 0 15px;
  color: white;
  border: none;
  text-align: center;
  padding: 7px 5px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 2.5px 7.5px 0 rgba(0, 0, 0, 0.07);
  font-family: Ciutadella-Bold;
`

export default Partner;
