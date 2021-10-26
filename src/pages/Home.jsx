import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import ListCategories from '../components/ListCategories';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      products: [],
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  getId = async ({ target }) => {
    const DATA = await api.getProductsFromCategoryAndQuery(target.id);
    const result = DATA.results;
    this.setState({ itensCategorys: result });
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ search: value });
  }

  handleSearch = async () => {
    const { search } = this.state;
    const response = await api.getProductsFromCategoryAndQuery('', search);
    const products = response.results;
    this.setState({ products });
  }

  fetchCategories = async () => {
    const response = await api.getCategories();
    this.setState({
      categories: response,
    });
  }

  render() {
    const { search, products, categories, itensCategorys } = this.state;
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
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <main>
          <section>
            {
              products.map((product) => (
                <Card key={ product.id } product={ product } />
              ))
            }
          </section>
          <aside>
            <h3>Lista de categorias</h3>
            {
              categories.map((e) => (
                <ListCategories
                  name={ e.name }
                  key={ e.id }
                  id={ e.id }
                  getId={ this.getId }
                />
              ))
            }
          </aside>
          <section>
            {
              itensCategorys !== undefined && itensCategorys.map((e) => (
                <Card product={ e } key={ e.id } />
              ))
            }
          </section>
        </main>
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
