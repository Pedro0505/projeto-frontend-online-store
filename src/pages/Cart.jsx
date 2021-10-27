import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CartItem from '../components/CartItem';

class Cart extends Component {
  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <div>
        {
          products.lenght >= 0 ? products.map((product) => <CartItem key={ product.id } product={ product } />)
            : <h1 data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
              </h1>
        }
      </div>
    );
  }
}

Cart.defaultProps = {
  history: {},
};

Cart.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.shape({
        products: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
      }),
    }),
  }),
};

export default Cart;
