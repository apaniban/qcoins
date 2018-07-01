import React, {PureComponent}  from 'react';
import styled from 'styled-components';
import {map} from 'ramda';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

import web3 from '../ethereum/web3';
import loyalty from '../ethereum/qLoyalty';
import partner from '../ethereum/partner';

class LandingPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      partners: []
    };
  }

  async componentDidMount(props) {
    const accounts = await web3.eth.getAccounts();
    const partnerAddresses = await loyalty.methods.getPartners().call();

    Promise.all(map(getPartnerInfo, partnerAddresses))
      .then(partners => this.setState({partners}));
  }

  render() {
    return (
      <Layout>
        <Navigation />
        <Content>
          {
            this.state.partners.map(
              partner => <li>
                <a href={`/partners/${partner.address}`}>{partner.name}</a>
              </li>
            )
          }
        </Content>
    </Layout>
    );
  }
}

const getPartnerInfo = (address) =>
  partner(address).methods.getPartnerInfo().call()
    .then(partner => ({address: partner[0], name: partner[1]}))

const Content = styled.ul`
  margin: 0;
  padding: 10px 0 0 0;
  list-style-type: none;
  text-transform: uppercase;
  opacity: 0.8;
  letter-spacing: 1px;
  font-size: 14px;


  > li > a {
    color: white;
    text-decoration: none;
  }

  > li > a:visited {
    color: white;
    text-decoration: none;
  }

  > li {
    padding: 10px 0;
  }
`

export default LandingPage;
