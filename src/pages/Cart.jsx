import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Cart extends Component {
  render() {
    const { cart, addToCart, decreaseCart, removeCart } = this.props;
    return (
      <div>
        {cart.length > 0 ? (cart.map((item) => (
          <div key={ item.id }>
            <h2
              data-testid="shopping-cart-product-name"
            >
              {item.title}
            </h2>
            <p
              data-testid="shopping-cart-product-quantity"
            >
              {item.quantity}
            </p>
            <div>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => addToCart(item) }
              >
                +
              </button>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => decreaseCart(item) }
              >
                -
              </button>
              <button
                type="button"
                data-testid="product-exclude"
                onClick={ () => removeCart(item) }
              >
                Remover
              </button>
            </div>
          </div>
        ))) : (
          <div>
            <h1
              data-testid="shopping-cart-empty-message"
            >
              <span>Seu carrinho está vazio</span>
            </h1>
          </div>
        )}
      </div>
    );
  }
}

Cart.defaultProps = {
  cart: [],
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(Object),
  addToCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
  decreaseCart: PropTypes.func.isRequired,
};

export default Cart;
