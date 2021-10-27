import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <h2
          data-testid="shopping-cart-product-name"
        >
          Item:
        </h2>
        <p data-testid="shopping-cart-product-quantity">Quantidade:</p>
      </div>
    );
  }
}

export default CartItem;
