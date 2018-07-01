import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Landing from './landing';
import Partner from './partner';
import Product from './product';
import './globals';

const App = () =>
  <div>
    <Router>
      <Switch>
        <Route path='/' exact render={() => <Landing />} />
        <Route path='/partners/:address' exact render={renderPartner} />
        <Route path='/partners/:address/products/:id' exact render={renderProduct} />
      </Switch>
    </Router>
  </div>

const renderPartner = ({match: {params: {address}}}) => <Partner address={address} />
const renderProduct = ({match: {params: {address, id}}}) => <Product address={address} id={id} />

export default App;
