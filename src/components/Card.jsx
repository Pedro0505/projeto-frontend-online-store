import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
  render() {
    const { product } = this.props;
    return (
      <Link to={ `/product-detail/${product.id}` } data-testid="product-detail-link">
        <div className="card" data-testid="product">
          <h2>{product.title}</h2>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>{`R$: ${product.price}`}</p>
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default Card;
