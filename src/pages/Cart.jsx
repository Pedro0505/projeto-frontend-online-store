import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Cart extends Component {
  render() {
    const { cart, addToCart, decreaseCart, removeCart } = this.props;
    return (
      <div>
        <Header />
        {cart.length > 0 ? (cart.map((item) => (
          <div key={ item.id }>
            <h3
              data-testid="shopping-cart-product-name"
            >
              {item.title}
            </h3>
            <p>{ `R$ ${item.price * item.quantity}` }</p>
            <img src={ item.thumbnail } alt={ item.title } />
            <div>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => addToCart(item) }
                disabled={ item.available_quantity === item.quantity }
              >
                +
              </button>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                {item.quantity}
              </p>
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
        {
          cart.length !== 0 && (
            <Link
              to="/checkout"
              data-testid="checkout-products"
            >
              Comprar
            </Link>
          )
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
  addToCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
  decreaseCart: PropTypes.func.isRequired,
};

export default Cart;
