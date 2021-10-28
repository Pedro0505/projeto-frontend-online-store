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

  removeCart = (product) => {
    const { cart } = this.state;
    const itemFound = cart.find((item) => item.id === product.id);
    const newCart = cart.filter((item) => item.id !== itemFound.id);
    this.setState({ cart: newCart });
  }

  decreaseCart = (product) => {
    const { cart } = this.state;
    const itemFound = cart.find((item) => item.id === product.id);
    if (itemFound) {
      const { quantity } = itemFound;
      if (quantity === 1) {
        return;
      }
      itemFound.quantity = quantity - 1;
      const newCart = cart.filter((item) => item.id !== itemFound.id);
      this.setState({ cart: [itemFound, ...newCart] });
    }
  }

  addToCart = (product) => {
    const { cart } = this.state;
    const itemFound = cart.find((item) => item.id === product.id);
    if (itemFound) {
      const { quantity } = itemFound;
      itemFound.quantity = quantity + 1;
      const newCart = cart.filter((item) => item.id !== itemFound.id);
      this.setState({ cart: [itemFound, ...newCart] });
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

  /** *
   * Esta função altera os objetos dentro do estado
   * adicionando um atributo quantidade:0
   */
  handleCart = () => {
    const { cart } = this.state;
    const updatedCart = cart.map((itemCart) => ({
      ...itemCart,
      quantity: 1,
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
                decreaseCart={ this.decreaseCart }
                removeCart={ this.removeCart }
              />) }
            />
            <Route path="/checkout" exact component={ FormPay } />
            <Route path="/product-detail/:id" exact component={ ProductDetail } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
