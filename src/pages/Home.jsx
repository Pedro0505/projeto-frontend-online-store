import PropTypes from 'prop-types';
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
    this.setState({ products: result });
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
    const { search, products, categories } = this.state;
    const { addToCart } = this.props;
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
          <div>
            <Link
              to="/cart"
              data-testid="shopping-cart-button"
            >
              Carrinho
            </Link>
          </div>
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
              products.map((product) => (
                <Card
                  key={ product.id }
                  product={ product }
                  addToCart={ addToCart }
                />
              ))
            }
          </section>
        </main>
      </div>
    );
  }
}

Home.defaultProps = {
  addToCart: () => {},
};

Home.propTypes = {
  addToCart: PropTypes.func,
};

export default Home;
