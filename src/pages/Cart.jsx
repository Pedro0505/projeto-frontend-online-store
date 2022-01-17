import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from '../styles/Cart.module.css';

class Cart extends Component {
  render() {
    const { cart, addToCart, decreaseCart, removeCart } = this.props;
    return (
      <div>
        <Header className={ styles.cartContainer } />
        {cart.length > 0 ? (cart.map((item) => (
          <main key={ item.id } className={ styles.card }>
            <img src={ item.thumbnail } alt={ item.title } />
            <div className={ styles.titleButtonContainer }>
              <h3
                data-testid="shopping-cart-product-name"
              >
                {item.title}
              </h3>
              <div className={ styles.btnContainer }>
                <div className={ styles.addBtn }>
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
                </div>
                <button
                  className={ styles.removeBtn }
                  type="button"
                  data-testid="product-exclude"
                  onClick={ () => removeCart(item) }
                >
                  Remover
                </button>
              </div>
            </div>
            <div className={ styles.price }>
              <p>{ `R$ ${item.price * item.quantity}` }</p>
            </div>
          </main>
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
            <div className={ styles.buyBtnConteiner }>
              <Link
                className={ styles.buyBtn }
                to="/checkout"
                data-testid="checkout-products"
              >
                Comprar
              </Link>
            </div>
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
