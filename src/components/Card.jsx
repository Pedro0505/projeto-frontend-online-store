import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import FreeShipping from './FreeShipping';
import '../styles/Card.css';

class Card extends Component {
  render() {
    const { product, addToCart, product: { shipping } } = this.props;
    return (
      <>
        <Link to={ `/product-detail/${product.id}` } data-testid="product-detail-link">
          <div className="card" data-testid="product">
            <h2>{product.title}</h2>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{`R$: ${product.price}`}</p>
            {
              shipping.free_shipping && <FreeShipping />
            }
          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addToCart(product) }
        >
          Adicionar ao carrinho

        </button>
      </>
    );
  }
}

Card.defaultProps = {
  addToCart: () => {},
};

Card.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  addToCart: PropTypes.func,
};

export default Card;
