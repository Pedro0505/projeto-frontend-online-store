import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
  render() {
    const { product, onClick } = this.props;
    return (
      <div className="card" data-testid="product">
        <h2>{product.title}</h2>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{`R$: ${product.price}`}</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ onClick }
        >
          Adicionar ao carrinho

        </button>
      </div>
    );
  }
}

Card.defaultProps = {
  onClick: () => {},
};

Card.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func,
};

export default Card;
