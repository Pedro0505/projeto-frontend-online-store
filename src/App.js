import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import FormPay from './components/FormPay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/CartPage" exact component={ CartPage } />
            <Route path="/CartPage" exact component={ CartPage } />
            <Route path="/checkout" exact component={ FormPay } />
            <Route path="/product-detail/:id" exact component={ ProductDetail } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
