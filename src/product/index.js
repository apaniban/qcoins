import React, {PureComponent} from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Loader from '../components/Loader';

import {format} from '../utils/number';
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
      account: accounts[0],
      loading: false,
      message: ''
    });

  }

  handleConfirm = async (e) => {
    const {address, id} = this.props;
    const {account} = this.state;

    this.setState({loading: true, message: 'Processing payment'});

    try {
      await partner(address).methods.redeem(id).send({
        from: account
      });

      history.push('/sent');
    } catch (err) {
      this.setState({loading: false, message: ''});
    }
  }

  render() {
    const {name, loading, message, price} = this.state;

    if(loading) {
      return <Layout><Loader message={message}/></Layout>;
    }

    return (
      <Layout>
        <Navigation withCancel />
        <Content>
          <div>You are sending</div>
          <div><strong>{format(price)}</strong> QCoins to <strong>{name.toUpperCase()}</strong></div>
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
  letter-spacing: 0.8px;

  > div {
    text-align: center;
    line-spacing: 1px;

    > strong {
      font-weight: 700;
      opacity: 1;
    }
  }
`;

const Button = styled.button`
  margin-top: 40px;
  color: white;
  text-transform: uppercase;
  font-size: 17px;
  font-family: Ciutadella;
  letter-spacing: 0.8px;

  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 2.5px 7.5px 0 rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  border: none;
  padding: 15px 55px;
`

export default Product;
