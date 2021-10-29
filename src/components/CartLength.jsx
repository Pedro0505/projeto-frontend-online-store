import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartLength extends Component {
  render() {
    const { totalQuantity } = this.props;
    return (
      <p data-testid="shopping-cart-size">
        { totalQuantity }
      </p>
    );
  }
}

CartLength.propTypes = {
  totalQuantity: PropTypes.number.isRequired,
};

export default CartLength;
