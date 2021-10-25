import React, { Component } from 'react';
import Card from '../components/Card';

import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      products: [],
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ search: value });
  }

  handleSearch = async () => {
    const { search } = this.state;
    const response = await api.getProductsFromCategoryAndQuery(search);
    const products = response.results;
    this.setState({ products });
  }

  render() {
    const { search, products } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          value={ search }
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.handleSearch }
        >
          Buscar
        </button>
        { products.map((product) => (
          <Card key={ product.id } product={ product } />
        ))}
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
