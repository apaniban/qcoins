import React, {Component} from 'react';
import Head from 'next/head';
import {map, zip} from 'ramda';
import Layout from '../components/Layout';
import {Link} from '../routes';

import web3 from '../ethereum/web3';
import qCoins from '../ethereum/qCoins';
import loyalty from '../ethereum/qLoyalty';
import partner from '../ethereum/partner';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0,
      partners: []
    };
  }

  async componentDidMount(props) {
    const accounts = await web3.eth.getAccounts();
    const balance = await qCoins.methods.balanceOf(accounts[0]).call();
    const partnerAddresses = await loyalty.methods.getPartners().call();

    Promise.all(map(getPartnerInfo, partnerAddresses))
      .then(partners => this.setState({balance, partners}));
  }

  render() {
    return (
      <Layout>
        <div> Balance: {this.state.balance}</div>

        <div> Partners: {
          this.state.partners.map(
            partner => <div>
              <Link route={`/partners/${partner.address}`}><a>{partner.name}</a></Link>
              <div>{partner.name}</div>
            </div>
          )
        }
      </div>
    </Layout>
    );
  }
}

const getPartnerInfo = (address) =>
  partner(address).methods.getPartnerInfo().call()
    .then(partner => ({address: partner[0], name: partner[1]}))

export default LandingPage;
