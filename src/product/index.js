import React, {PureComponent} from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

import partner from '../ethereum/partner';

class Product extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      loading: true,
      price: ''
    }
  }
  async componentDidMount() {
    const {address, id} = this.props;
    const name = await partner(address).methods.name().call();
    const product = await partner(address).methods.getProduct(id).call();

    this.setState({
      name,
      price: product[1]
    });

  }

  render() {
    const {name, price} = this.state;

    return (
      <Layout>
        <Navigation />
        <Content>
          <div>You are sending</div>
          <div>{price} QCoins to {name}</div>
          <Button>Confirm payment</Button>
        </Content>
      </Layout>
    );
  }
}

const Content = styled.div`
  padding-top: 50px;
  display: grid;
  align-items: center;
  justify-content: center;

  > div {
    text-align: center;
    opacity: 0.8;
    line-spacing: 1px;
  }
`;

const Button = styled.button`
  margin-top: 40px;
  color: white;
  text-transform: uppercase;
  font-size: 17px;

  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 2.5px 7.5px 0 rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  border: none;
  padding: 15px 55px;
`

export default Product;