import React, { Component } from 'react';
import ListCategories from '../components/ListCategories';
import * as api from '../services/api';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const response = await api.getCategories();
    this.setState({
      categories: response,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ListCategories categories={ categories } />
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
