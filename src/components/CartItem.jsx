import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <h2
          data-testid="shopping-cart-product-name"
        >
          {item.title}
        </h2>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          {`Quantidade: ${item.quantity}`}
        </p>
      </div>
    );
  }
}

CartItem.defaultProps = {
  item: {},
};

CartItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number,
    title: PropTypes.string,
  }),
};

export default CartItem;
