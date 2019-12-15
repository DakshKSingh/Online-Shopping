import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import Details from './components/Details.jsx';
import Cart from './components/Cart.jsx';
import store from './components/Store';
import { Provider } from 'react-redux';
import ShoppingCart from './components/ShoppingCart.jsx';
import Order from './components/Order.jsx';

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Home} />{' '}
          <Route path='/details' component={Details} />{' '}
          <Route path='/cart' component={ShoppingCart} />{' '}
          <Route path='/order' component={Order} />{' '}
        </Switch>{' '}
      </BrowserRouter>{' '}
    </div>
    </Provider>
  );
}

export default App;
