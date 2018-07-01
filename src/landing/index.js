import React, {PureComponent}  from 'react';
import styled from 'styled-components';
import {map} from 'ramda';

import Loader from '../components/Loader';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

import loyalty from '../ethereum/qLoyalty';
import partner from '../ethereum/partner';

class LandingPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      partners: []
    };
  }

  async componentDidMount(props) {
    const partnerAddresses = await loyalty.methods.getPartners().call();

    Promise.all(map(getPartnerInfo, partnerAddresses))
      .then(partners => this.setState({partners, loading: false}));
  }

  render() {
    const {loading, partners} = this.state;
    const {address} = this.props;

    if (loading) {
      return <Layout><Loader/></Layout>;
    }

    return (
      <Layout>
        <Navigation />
        <Content>
          {
            map((partner, key) => (
              <li key={key}>
                <a href={`/partners/${partner.address}`}>{partner.name}<div><i/></div></a>
              </li>
            ), partners)
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
    display: flex;
    justify-content: space-between;
  }

  > li > a:visited {
    color: white;
    text-decoration: none;
  }

  > li {
    padding: 10px 0;
  }

  > li > a > div {
    width: 10px;
    height: 10px;
  }

  > li > a > div > i {
    border: solid #ffffff;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 2px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
}
  }
`

export default LandingPage;
