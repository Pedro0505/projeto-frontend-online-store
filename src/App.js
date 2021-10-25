import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import CartPage from './pages/CartPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/CartPage" exact component={ CartPage } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
