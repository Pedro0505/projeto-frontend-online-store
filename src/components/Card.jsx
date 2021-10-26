import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="card" data-testid="product">
        <h2>{product.title}</h2>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{`R$: ${product.price}`}</p>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default Card;
