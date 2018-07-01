import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'

import history from './history';
import Landing from './landing';
import Partner from './partner';
import Product from './product';
import Retrieved from './retrieved';
import './globals';

const App = () =>
  <div>
    <Router history={history}>
      <Switch>
        <Route path='/' exact render={() => <Landing />} />
        <Route path='/partners/:address' exact render={renderPartner} />
        <Route path='/partners/:address/products/:id' exact render={renderProduct} />
        <Route path='/sent' exact render={renderConfirmation} />
      </Switch>
    </Router>
  </div>

const renderPartner = ({match: {params: {address}}}) => <Partner address={address} />
const renderProduct = ({match: {params: {address, id}}}) => <Product address={address} id={id} />
const renderConfirmation = () => <Retrieved />

export default App;
