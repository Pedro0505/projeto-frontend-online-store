import React, { Component } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import ListCategories from '../components/ListCategories';
import * as api from '../services/api';
import styles from '../styles/Home.module.css';

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
    return (
      <main>
        <Header
          handleChange={ this.handleChange }
          handleSearch={ this.handleSearch }
        />
        <section className={ styles.containerHome }>
          <aside className={ styles.containerCategories }>
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
          <section className={ styles.containerCards }>
            {
              products.map((product) => (
                <Card
                  key={ product.id }
                  product={ product }
                />
              ))
            }
          </section>
        </section>
      </main>
    );
  }
}

export default Home;
