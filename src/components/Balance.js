import React, {PureComponent} from 'react';
import styled from 'styled-components';

import Label from './Label';
import qCoins from '../ethereum/qCoins';
import web3 from '../ethereum/web3';
import {format} from '../utils/number';

class Balance extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    };

  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const balance = await qCoins.methods.balanceOf(accounts[0]).call();

    this.setState({balance});
  }

  render() {
    const {balance} = this.state;
    return (
      <Container>
        <Label text='Wallet Balance' />
        <div>{format(balance)}</div>
      </Container>
    );
  }
}

export default Balance;

const Container = styled.div`
  grid-column: 3 / span 1;
  place-self: flex-end;

  > :nth-child(2) {
    text-align: right;
    font-size: 16px;
    font-family: Ciutadella-Bold;
    letter-spacing: 0.6px;
  }
`
