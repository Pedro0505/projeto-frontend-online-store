import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import FormPay from './components/FormPay';
import Login from './pages/Login';
import Cart from './pages/Cart';
import './styles/Main.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      totalQuantity: 0,
    };
  }

  componentDidMount() {
    this.initialState();
    this.calculatorItens();
    this.calculatorTotalPrice();
  }

  initialState = () => {
    const localCart = localStorage.getItem('cart');
    const cart = localCart ? JSON.parse(localCart) : [];
    this.setState({ cart });
  }

  calculatorItens = () => {
    const localCart = localStorage.getItem('cart');
    const cart = localCart ? JSON.parse(localCart) : [];
    const catchNumber = cart.map((e) => e.quantity).reduce((acc, cur) => acc + cur, 0);
    this.setState({ totalQuantity: catchNumber });
  }

  calculatorTotalPrice = () => {
    const localCart = localStorage.getItem('cart');
    const cart = localCart ? JSON.parse(localCart) : [];
    const total = cart.map((e) => e.price * e.quantity)
      .reduce((acc, cur) => acc + cur, 0);
    const round = Math.round(total);
    localStorage.setItem('total-price', JSON.stringify(round));
  }

  removeCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const itemFound = cart.find((item) => item.id === product.id);
    const newCart = cart.filter((item) => item.id !== itemFound.id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    this.setState({ cart: newCart });
    this.calculatorItens();
    this.calculatorTotalPrice();
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
    this.calculatorItens();
    this.calculatorTotalPrice();
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
    this.calculatorItens();
    this.calculatorTotalPrice();
  }

  render() {
    const { cart, totalQuantity } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ Login }
          />
          <Route
            exact
            path="/home"
            render={ (props) => (
              <Home
                { ...props }
                addToCart={ this.addToCart }
                totalQuantity={ totalQuantity }
              />) }
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
              <ProductDetail
                { ...props }
                addToCart={ this.addToCart }
                totalQuantity={ totalQuantity }
              />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
