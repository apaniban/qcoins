import React, {PureComponent} from 'react';
import styled from 'styled-components';
import {map} from 'ramda';

import Navigation from '../components/Navigation';
import Layout from '../components/Layout';
import partner from '../ethereum/partner';

class Partner extends PureComponent {
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
        <Navigation label='STORES' location='/' />
        <Content>
          {
            this.state.products.map(
              p => (
                <Item>
                  <span href={`${this.props.address}/products/${p.id}`}>{p.name}</span>
                  <div>{p.price}</div>
                  <Link href={`${this.props.address}/products/${p.id}`}>PAY</Link>
                </Item>
              )
            )
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
`

export default Partner;
