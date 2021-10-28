import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import FormPay from './components/FormPay';
import Cart from './pages/Cart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  addToCart = (product) => {
    const { cart } = this.state;
    const itemFound = cart.find((item) => item.id === product.id);
    if (itemFound) {
      const { quantity } = itemFound;
      itemFound.quantity = quantity + 1;
      const newCart = cart.filter((item) => item.id !== itemFound.id);
      this.setState({ cart: [...newCart, itemFound] });
    } else {
      product = {
        ...product,
        quantity: 1,
      };
      this.setState((prevState) => ({
        cart: [...prevState.cart, product],
      }));
    }
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
              />) }
            />
            <Route path="/checkout" exact render={ () => <FormPay cart={ cart } /> } />
            <Route
              path="/product-detail/:id"
              exact
              render={ (props) => (
                <ProductDetail { ...props } addToCart={ this.addToCart } />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
