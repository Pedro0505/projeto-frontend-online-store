import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategories extends Component {
  render() {
    const { categories } = this.props;

    return (
      <div>
        <h3>Lista de categorias</h3>
        <ul>
          {categories.map(({ id, name }) => (
            <li data-testid="category" key={ id }>{ name }</li>
          ))}
        </ul>
      </div>
    );
  }
}

ListCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListCategories;
