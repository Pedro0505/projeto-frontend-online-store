import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import CartPage from './pages/CartPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  }

  render() {
    const { cart } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route
              path="/CartPage"
              render={ (props) => (<CartPage
                { ...props }
                cart={ cart }
                addToCart={ this.addToCart }
              />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
