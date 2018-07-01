import React, {PureComponent} from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

import web3 from '../ethereum/web3';
import partner from '../ethereum/partner';
import history from '../history';

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
    const accounts = await web3.eth.getAccounts();

    this.setState({
      name,
      price: product[1],
      account: accounts[0]
    });

  }

  handleConfirm = async (e) => {
    const {address, id} = this.props;
    const {account} = this.state;
    const result = await partner(address).methods.redeem(id).send({
      from: account
    });

    if (result) {
      history.push('/sent');
    }
  }

  render() {
    const {name, price} = this.state;

    return (
      <Layout>
        <Navigation />
        <Content>
          <div>You are sending</div>
          <div>{price} QCoins to {name}</div>
          <Button onClick={this.handleConfirm}>Confirm payment</Button>
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
