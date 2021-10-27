import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CartItem from '../components/CartItem';

class Cart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        {
          cart.length > 0
            ? cart.map((cartItem) => (
              <CartItem
                key={ cartItem.id }
                item={ cartItem }
                sumItems={ console.log(this.handleCartItems(cart, cartItem.id)) }
              />
            )) : (
              <h1
                data-testid="shopping-cart-empty-message"
              >
                <span>Seu carrinho está vazio</span>
              </h1>)
        }
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
