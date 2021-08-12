import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/cart" component={ Cart } />
          <Route
            path="/product-details/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route path="/checkout" component={ Checkout } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
