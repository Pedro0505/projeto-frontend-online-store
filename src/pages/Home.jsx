import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Card from '../components/Card';
import CartLength from '../components/CartLength';
import ListCategories from '../components/ListCategories';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: 'Computador',
      products: [],
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
    this.handleSearch();
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
    const { products, categories } = this.state;
    const { addToCart, totalQuantity } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          onChange={ this.handleChange }
          placeholder="Digite algum termo de pesquisa"
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.handleSearch }
        >
          <Search />
        </button>
        <main>
          <CartLength totalQuantity={ totalQuantity } />
          <div>
            <Link
              to="/cart"
              data-testid="shopping-cart-button"
            >
              <ShoppingCartIcon style={ { color: 'black' } } />
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
  totalQuantity: PropTypes.number.isRequired,
};

export default Home;
