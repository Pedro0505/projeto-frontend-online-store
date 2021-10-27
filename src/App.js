import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Cart from './pages/Cart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  addToCart = (product) => {
    this.handleCart();
    const { cart } = this.state;

    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  }

  /** *
   * Esta função altera os objetos dentro do estado
   * adicionando um atributo quantidade:0
   */
  handleCart = () => {
    const { cart } = this.state;
    const updatedCart = cart.map((itemCart) => ({
      ...itemCart,
      quantity: 0,
    }));
    console.log(updatedCart);
    this.setState({ cart: updatedCart });
  }

  render() {
    const { cart } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (
                <Home { ...props } addToCart={ this.addToCart } />) }
            />
            <Route
              exact
              path="/cart"
              render={ (props) => (<Cart
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
