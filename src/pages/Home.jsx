import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <Link
            to="/CartPage"
            data-testid="shopping-cart-button"
          >
            Botão
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
