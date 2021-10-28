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

  componentDidMount() {
    this.initialState();
  }

  initialState = () => {
    const localCart = localStorage.getItem('cart');
    const cart = localCart ? JSON.parse(localCart) : [];
    this.setState({ cart });
  }

  removeCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const itemFound = cart.find((item) => item.id === product.id);
    const newCart = cart.filter((item) => item.id !== itemFound.id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    this.setState({ cart: newCart });
  }

  decreaseCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const itemFound = cart.find((item) => item.id === product.id);
    if (itemFound) {
      const { quantity } = itemFound;
      if (quantity > 1) {
        const index = cart.findIndex((x) => x.id === itemFound.id);
        cart[index].quantity = quantity - 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        this.setState({ cart });
      }
    }
  }

  addToCart = (product) => {
    const localCart = localStorage.getItem('cart');
    const cart = localCart ? JSON.parse(localCart) : [];
    const itemFound = cart.find((item) => item.id === product.id);
    if (itemFound) {
      const { quantity } = itemFound;
      itemFound.quantity = Number(quantity) + 1;
      const index = cart.findIndex((x) => x.id === itemFound.id);
      cart[index].quantity = quantity + 1;
      localStorage.setItem('cart', JSON.stringify(cart));
      this.setState({ cart });
    } else {
      product = {
        ...product,
        quantity: 1,
      };
      localStorage.setItem('cart', JSON.stringify([...cart, product]));
      this.setState({ cart: [...cart, product] });
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
                addToCart={ this.addToCart }
                decreaseCart={ this.decreaseCart }
                removeCart={ this.removeCart }
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
