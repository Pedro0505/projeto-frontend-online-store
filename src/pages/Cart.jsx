import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CartItem from '../components/CartItem';

class Cart extends Component {
  render() {
    const { cart } = this.props;
    console.log(cart);
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
      </div>
    );
  }
}

Cart.defaultProps = {
  cart: [],
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(Object),
};

export default Cart;
