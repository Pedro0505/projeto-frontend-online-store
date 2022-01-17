import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import FreeShipping from './FreeShipping';
import styles from '../styles/Home.module.css';

class Card extends Component {
  render() {
    const { product, product: { shipping } } = this.props;
    return (
      <Link
        to={ `/product-detail/${product.id}` }
        data-testid="product-detail-link"
        className={ styles.card }
      >
        <div data-testid="product">
          <h3>{product.title}</h3>
          <img src={ product.thumbnail } alt={ product.title } />
          <div>
            <p className={ styles.price }>{`R$: ${product.price}`}</p>
            {
              shipping.free_shipping && <FreeShipping />
            }
          </div>
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default Card;
